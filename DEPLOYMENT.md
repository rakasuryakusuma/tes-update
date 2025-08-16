# 🚀 Panduan Deployment ke Vercel

## Langkah 1: Persiapan Project

### 1.1 Pastikan struktur folder sudah benar:
```
ptmb/
├── api/
│   ├── data.js
│   └── validate.js
├── lib/
│   └── data.js
├── index.html
├── script-new.js
├── style.css
├── package.json
├── vercel.json
└── README.md
```

### 1.2 Ganti script.js dengan script-new.js:
- File `index.html` sudah diupdate untuk menggunakan `script-new.js`
- File `script.js` lama bisa di-backup atau dihapus

## Langkah 2: Install Vercel CLI

### 2.1 Install Vercel CLI secara global:
```bash
npm install -g vercel
```

### 2.2 Verifikasi instalasi:
```bash
vercel --version
```

## Langkah 3: Login ke Vercel

### 3.1 Login dengan akun Vercel:
```bash
vercel login
```

### 3.2 Ikuti instruksi di browser untuk login

## Langkah 4: Deploy Project

### 4.1 Dari root folder project:
```bash
cd /path/to/ptmb
vercel
```

### 4.2 Ikuti prompt yang muncul:
- **Set up and deploy**: `Y`
- **Which scope**: Pilih akun/team Anda
- **Link to existing project**: `N` (untuk project baru)
- **Project name**: `ptmb-fikom-guesser` (atau nama yang diinginkan)
- **In which directory is your code located**: `./` (root folder)
- **Want to override the settings**: `N`

### 4.3 Tunggu deployment selesai

## Langkah 5: Verifikasi Deployment

### 5.1 Cek URL yang diberikan Vercel:
```
✅ Production: https://your-project.vercel.app
```

### 5.2 Test aplikasi:
- Buka URL production
- Test login/register
- Test game functionality
- Cek console untuk error

### 5.3 Test API endpoints:
```bash
# Test data endpoint
curl https://your-project.vercel.app/api/data

# Test validate endpoint
curl -X POST https://your-project.vercel.app/api/validate \
  -H "Content-Type: application/json" \
  -d '{"name":"Ryan","password":"tegarkecelupsanten"}'
```

## Langkah 6: Custom Domain (Opsional)

### 6.1 Tambah custom domain:
```bash
vercel domains add your-domain.com
```

### 6.2 Update DNS records sesuai instruksi Vercel

## Langkah 7: Environment Variables (Jika Diperlukan)

### 7.1 Tambah environment variables:
```bash
vercel env add VARIABLE_NAME
```

### 7.2 Redeploy setelah tambah env vars:
```bash
vercel --prod
```

## Langkah 8: Auto-Deploy dari GitHub

### 8.1 Push code ke GitHub:
```bash
git add .
git commit -m "Initial Vercel deployment"
git push origin main
```

### 8.2 Connect repository ke Vercel:
- Buka dashboard Vercel
- Klik "New Project"
- Import dari GitHub
- Pilih repository
- Deploy otomatis

## 🔧 Troubleshooting

### Error: "Module not found"
- Pastikan semua file ada di folder yang benar
- Cek import/export statements
- Restart development server

### Error: "API endpoint not found"
- Pastikan folder `api/` ada
- Cek nama file dan function export
- Verifikasi `vercel.json` configuration

### Error: "CORS policy"
- API endpoints sudah include CORS headers
- Pastikan request dari domain yang sama
- Cek browser console untuk error details

### Deployment stuck
- Cancel deployment dengan `Ctrl+C`
- Cek error logs
- Restart deployment dengan `vercel`

## 📱 Testing Checklist

- [ ] Halaman load tanpa error
- [ ] Login/Register berfungsi
- [ ] Data nama muncul dari API
- [ ] Validasi password via API
- [ ] Progress tersimpan di localStorage
- [ ] Game logic berfungsi normal
- [ ] Responsive design di mobile
- [ ] Console browser clean (no errors)

## 🚀 Next Steps

### Setelah deployment berhasil:
1. **Monitor performance** di Vercel dashboard
2. **Set up analytics** jika diperlukan
3. **Configure backups** untuk data penting
4. **Set up monitoring** untuk API endpoints
5. **Plan scaling** jika traffic meningkat

### Maintenance:
- Update dependencies secara berkala
- Monitor error logs
- Backup data penting
- Test functionality setelah update

---

**🎉 Selamat! Project Anda sudah berhasil di-deploy ke Vercel!**

Jika ada masalah, cek:
1. Console browser untuk error
2. Network tab untuk API calls
3. Vercel deployment logs
4. README.md untuk dokumentasi lengkap
