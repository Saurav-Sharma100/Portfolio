"""Prepare the portfolio for GitHub Pages without changing the Sites build."""
import re
import shutil
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote

ROOT = Path(__file__).resolve().parent
SOURCE = ROOT / 'saurav-portfolio' / 'dist'
OUTPUT = ROOT / '_site'
BASE = '/Portfolio'
ORIGIN = 'https://saurav-sharma100.github.io' + BASE
SITES_ORIGIN = 'https://saurav-sharma-data-portfolio.chandersaurav2016.chatgpt.site'

shutil.copytree(SOURCE, OUTPUT, dirs_exist_ok=True)
for file in OUTPUT.rglob('*'):
    if file.suffix not in {'.html', '.xml', '.txt'}:
        continue
    text = file.read_text(encoding='utf-8').replace(SITES_ORIGIN, ORIGIN)
    if file.suffix == '.html':
        text = re.sub(r'((?:href|src)=")/(?!/)', r'\1' + BASE + '/', text)
    file.write_text(text, encoding='utf-8')
(OUTPUT / '.nojekyll').touch()

class LinkCheck(HTMLParser):
    def handle_starttag(self, tag, attrs):
        for key, value in attrs:
            if key not in {'href', 'src'} or not value:
                continue
            if value.startswith('/'):
                assert value.startswith(BASE + '/'), f'Unprefixed local URL: {value}'
                path = unquote(urlsplit(value).path[len(BASE)+1:])
                target = OUTPUT / path
                assert target.is_file() or (target / 'index.html').is_file(), value

for file in OUTPUT.rglob('*.html'):
    LinkCheck().feed(file.read_text(encoding='utf-8'))
assert (OUTPUT / 'index.html').is_file()
print(f'Prepared and validated GitHub Pages output for {ORIGIN}/')
