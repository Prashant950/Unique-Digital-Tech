// Standalone Express/Node backend for db.json persistence
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5000;
const DB_FILE = path.join(__dirname, 'db.json');

function getDbData() {
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify({ contacts: [] }, null, 2));
    return { contacts: [] };
  }
  try {
    const raw = fs.readFileSync(DB_FILE, 'utf8');
    const parsed = JSON.parse(raw || '{"contacts":[]}');
    if (!Array.isArray(parsed.contacts)) parsed.contacts = [];
    return parsed;
  } catch (e) {
    return { contacts: [] };
  }
}

const server = http.createServer((req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const url = req.url.split('?')[0];

  if ((url === '/api/contact' || url === '/api/contacts') && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', () => {
      try {
        const payload = JSON.parse(body || '{}');
        const db = getDbData();
        const record = {
          id: 'lead_' + Date.now(),
          ...payload,
          createdAt: new Date().toISOString()
        };
        db.contacts.push(record);
        fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2), 'utf8');

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, message: 'Saved to db.json', contact: record }));
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: err.message }));
      }
    });
  } else if ((url === '/api/contact' || url === '/api/contacts') && req.method === 'GET') {
    const db = getDbData();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(db));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Endpoint not found' }));
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend API Server running at http://localhost:${PORT}/api/contact`);
  console.log(`Saving records into: ${DB_FILE}`);
});
