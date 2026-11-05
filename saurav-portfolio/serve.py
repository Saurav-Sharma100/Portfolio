"""Local preview with a branded 404. Run python serve.py."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import os
os.chdir(Path(__file__).resolve().parent / 'dist')
class Handler(SimpleHTTPRequestHandler):
    def send_error(self, code, message=None, explain=None):
        if code == 404:
            data=Path('404.html').read_bytes()
            self.send_response(404); self.send_header('Content-Type','text/html; charset=utf-8'); self.send_header('Content-Length',str(len(data))); self.end_headers(); self.wfile.write(data)
        else: super().send_error(code,message,explain)
print('Local: http://127.0.0.1:4173',flush=True)
ThreadingHTTPServer(('127.0.0.1',4173),Handler).serve_forever()
