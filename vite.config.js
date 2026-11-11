import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

function dbApiPlugin() {
  const handleContactPost = (req, res) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', () => {
      try {
        const data = JSON.parse(body || '{}');
        const dbPath = path.resolve(process.cwd(), 'db.json');
        let db = { contacts: [] };
        if (fs.existsSync(dbPath)) {
          try {
            db = JSON.parse(fs.readFileSync(dbPath, 'utf-8') || '{"contacts":[]}');
            if (!Array.isArray(db.contacts)) db.contacts = [];
          } catch (e) {
            db = { contacts: [] };
          }
        }
        const newRecord = {
          id: 'lead_' + Date.now(),
          ...data,
          createdAt: new Date().toISOString(),
        };
        db.contacts.push(newRecord);
        fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf-8');

        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.end(
          JSON.stringify({
            success: true,
            message: 'Inquiry details saved to db.json successfully',
            contact: newRecord,
          })
        );
      } catch (err) {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 500;
        res.end(JSON.stringify({ success: false, error: err.message }));
      }
    });
  };

  const handleContactGet = (req, res) => {
    const dbPath = path.resolve(process.cwd(), 'db.json');
    let db = { contacts: [] };
    if (fs.existsSync(dbPath)) {
      try {
        db = JSON.parse(fs.readFileSync(dbPath, 'utf-8') || '{"contacts":[]}');
      } catch (e) {}
    }
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify(db));
  };

  return {
    name: 'vite-db-json-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url ? req.url.split('?')[0] : '';
        if (url === '/api/contact' || url === '/api/contacts') {
          if (req.method === 'POST') {
            return handleContactPost(req, res);
          } else if (req.method === 'GET') {
            return handleContactGet(req, res);
          }
        }
        next();
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url ? req.url.split('?')[0] : '';
        if (url === '/api/contact' || url === '/api/contacts') {
          if (req.method === 'POST') {
            return handleContactPost(req, res);
          } else if (req.method === 'GET') {
            return handleContactGet(req, res);
          }
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), dbApiPlugin()],
});
