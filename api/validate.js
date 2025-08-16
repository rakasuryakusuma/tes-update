// API endpoint untuk validasi password
import { peopleData } from '../lib/data.js';

export default function handler(req, res) {
  // Hanya izinkan method POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, password } = req.body;

    // Validasi input
    if (!name || !password) {
      return res.status(400).json({ 
        error: 'Name dan password harus diisi',
        success: false 
      });
    }

    // Cari nama yang sesuai
    const person = peopleData.find(p => p.name === name);
    
    if (!person) {
      return res.status(404).json({ 
        error: 'Nama tidak ditemukan',
        success: false 
      });
    }

    // Validasi password
    if (person.password === password) {
      return res.status(200).json({
        success: true,
        clue: person.clue,
        message: 'Password benar!'
      });
    } else {
      return res.status(200).json({
        success: false,
        message: 'Password salah!'
      });
    }

  } catch (error) {
    console.error('Error validating password:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      success: false 
    });
  }
}
