# RACREC Website - Server Deployment

## 📁 This Folder Contains Everything

```
RACREC_Website/
├── frontend/dist/          ← Website (put in web server)
├── backend/                ← API (run on server)
├── README.md               ← This file
├── SETUP.md                ← How to setup
└── CONFIG.md               ← How to configure
```

---

## ⚡ Quick Start (3 Steps)

### 1. Setup Frontend (Website)
```bash
# Copy to web server
cp -r frontend/dist /var/www/html/
```

### 2. Setup Backend (API)
```bash
cd backend
pip install -r requirements.txt
python app.py
```

### 3. Update Configuration
```bash
# Edit backend/app.py
# Change line 14: ADMIN_PASSWORD = 'your-password'
# Change line 20-30: Update CORS for your domain
```

---

## 📖 Documentation

1. **README.md** - Overview (this file)
2. **SETUP.md** - Detailed setup instructions
3. **CONFIG.md** - Configuration guide

---

## 🎯 What This Is

✅ **Complete RACREC Website**  
✅ **Admin Panel** - Manage projects  
✅ **Image Upload** - Add project images  
✅ **API Server** - Backend for all features  

---

## 🚀 Deployment

### For Website
- Copy `frontend/dist/` to web server
- Configure web server to serve files
- Access via: `http://your-domain.com`

### For API
- Run `python app.py` in `backend/` folder
- Runs on: `http://localhost:5000`
- Update CORS settings for your domain

---

## 🔐 Security

**IMPORTANT**: Before going live:

1. Change admin password (line 14 in app.py)
2. Update CORS settings (line 20-30 in app.py)
3. Enable HTTPS
4. Set proper file permissions
5. Backup projects.json regularly

---

## 📋 Folder Contents

### frontend/dist/
- Website files (React + Vite)
- Ready to serve
- ~5-10 MB

### backend/
- Flask API server
- Python application
- ~1-2 MB

---

## 🛠️ Requirements

- Python 3.8+
- pip (Python package manager)
- Web server (Apache, Nginx, IIS, etc.)
- ~100 MB disk space

---

## 📞 Support

See **SETUP.md** for detailed instructions  
See **CONFIG.md** for configuration options

---

## ✅ Next Steps

1. Read **SETUP.md**
2. Follow setup instructions
3. Update configuration
4. Test everything
5. Go live!

---

**Status**: ✅ Ready to Deploy
