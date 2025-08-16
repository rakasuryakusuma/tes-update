// API endpoint untuk data nama, password, dan clue
import { peopleData, groupConfig } from '../lib/data.js';

export default function handler(req, res) {
  // Hanya izinkan method GET
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Return data dengan CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  res.status(200).json({
    people: peopleData,
    groupConfig: groupConfig,
    total: peopleData.length
  });
}
