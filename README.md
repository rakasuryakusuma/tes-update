# PTMB Fikom Guesser - Vercel Project

Project game "Fikom Guesser" yang sudah dimigrasikan ke struktur Vercel dengan API Routes.

## 🚀 Fitur Utama

- **Game Guessing**: Game menebak nama berdasarkan password
- **Sistem Autentikasi**: Login/Register dengan localStorage
- **Progress Tracking**: Menyimpan progress user di localStorage
- **API Routes**: Data dan validasi password via serverless functions
- **Responsive Design**: UI yang responsif dan modern

## 📁 Struktur Project

```
ptmb/
├── api/                    # Vercel API Routes
│   ├── data.js            # Endpoint untuk data nama/password/clue
│   └── validate.js        # Endpoint untuk validasi password
├── lib/                    # Shared data dan utilities
│   └── data.js            # Data nama, password, dan clue
├── public/                 # Static files (akan dibuat saat build)
├── index.html             # File HTML utama
├── script.js              # Script lama (hardcode)
├── script-new.js          # Script baru (menggunakan API)
├── style.css              # File CSS
├── package.json           # Dependencies dan scripts
├── vercel.json            # Konfigurasi Vercel
└── README.md              # Dokumentasi ini
```

## 🔧 Cara Deploy ke Vercel

### 1. Install Vercel CLI
```bash
npm install -g vercel
```

### 2. Login ke Vercel
```bash
vercel login
```

### 3. Deploy Project
```bash
vercel
```

### 4. Atau Deploy via GitHub
- Push code ke GitHub
- Connect repository ke Vercel
- Auto-deploy setiap push

## 🌐 API Endpoints

### GET /api/data
Mengembalikan data nama, password, dan clue.

**Response:**
```json
{
  "people": [
    {
      "name": "Ryan",
      "password": "tegarkecelupsanten",
      "clue": "Aku perempuan"
    }
  ],
  "groupConfig": {
    "group1": 10,
    "group2": 15,
    "group3": 22
  },
  "total": 47
}
```

### POST /api/validate
Validasi password untuk nama tertentu.

**Request Body:**
```json
{
  "name": "Ryan",
  "password": "tegarkecelupsanten"
}
```

**Response Success:**
```json
{
  "success": true,
  "clue": "Aku perempuan",
  "message": "Password benar!"
}
```

**Response Error:**
```json
{
  "success": false,
  "message": "Password salah!"
}
```

## 💾 Data Storage

### localStorage Keys:
- `linktree_users`: Data user (username, password, createdAt)
- `linktree_user_progress`: Progress setiap user
- `linktree_current_user`: User yang sedang login

### Data Structure:
```javascript
// Users
{
  "username": {
    "password": "hashed_password",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}

// Progress
{
  "username": [0, 1, 2, 5] // Index nama yang sudah dijawab
}
```

## 🔄 Migrasi dari Script Lama

### Yang Berubah:
1. **Data tidak lagi hardcode** di `script.js`
2. **Validasi password** via API `/api/validate`
3. **Data nama** diambil dari API `/api/data`
4. **Script.js** hanya handle UI dan localStorage

### Yang Tetap:
1. **Progress user** tetap tersimpan di localStorage
2. **Sistem autentikasi** tetap sama
3. **UI/UX** tidak berubah
4. **Game logic** tetap sama

## 🛠️ Development

### Local Development:
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build project
npm run build
```

### Testing API:
```bash
# Test data endpoint
curl http://localhost:3000/api/data

# Test validate endpoint
curl -X POST http://localhost:3000/api/validate \
  -H "Content-Type: application/json" \
  -d '{"name":"Ryan","password":"tegarkecelupsanten"}'
```

## 🔒 Security Features

- **CORS Headers**: API endpoints memiliki CORS yang aman
- **Input Validation**: Validasi input di server dan client
- **Error Handling**: Error handling yang robust
- **No Sensitive Data**: Password tidak tersimpan di client

## 📱 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🚨 Troubleshooting

### API Error:
- Cek console browser untuk error details
- Pastikan Vercel deployment berhasil
- Cek network tab untuk request/response

### Data Loading:
- Jika API gagal, akan ada fallback message
- Refresh halaman jika data tidak muncul
- Cek internet connection

### Progress Lost:
- Progress tersimpan di localStorage
- Clear browser data = progress hilang
- Gunakan fungsi reset di console jika perlu

## 📞 Support

Untuk pertanyaan atau masalah:
1. Cek console browser untuk error
2. Cek network tab untuk API calls
3. Cek localStorage untuk data
4. Buat issue di repository

## 📄 License

MIT License - bebas digunakan untuk keperluan apapun.

---

**Note**: Project ini sudah siap di-deploy ke Vercel. Pastikan untuk mengganti `script.js` dengan `script-new.js` sebelum deploy.
