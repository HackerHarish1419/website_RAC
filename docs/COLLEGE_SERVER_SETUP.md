# College Server Setup - Single Folder Deployment

## 📁 Folder Structure for College Server

Your college will receive **ONE FOLDER** that contains everything:

```
RACREC_Website/
│
├── frontend/                    ← Website (put in web server)
│   └── dist/
│       ├── index.html
│       ├── assets/
│       ├── Communityservice/
│       ├── internationalservice/
│       ├── Professonialservice/
│       ├── clubservice/
│       ├── core/
│       ├── gallery/
│       └── ...
│
├── backend/                     ← API (run on server)
│   ├── app.py
│   ├── requirements.txt
│   ├── Procfile
│   ├── projects.json
│   ├── uploads/
│   └── README.md
│
├── README.md                    ← Start here
├── SETUP.md                     ← Setup instructions
└── CONFIG.md                    ← Configuration guide
```

---

## 🚀 What College Does (Simple Steps)

### Step 1: Extract Folder
```
Extract RACREC_Website.zip to college server
```

### Step 2: Setup Frontend (Website)
```bash
# Copy frontend/dist/ to web server root
# OR configure web server to serve from frontend/dist/

# If using Apache:
# Copy frontend/dist/* to /var/www/html/

# If using Nginx:
# Configure to serve frontend/dist/
```

### Step 3: Setup Backend (API)
```bash
cd backend

# Install dependencies
pip install -r requirements.txt

# Run the server
python app.py

# Server runs on: http://localhost:5000
```

### Step 4: Update Configuration
```bash
# Edit backend/app.py

# Line 14: Change admin password
ADMIN_PASSWORD = 'college-secure-password'

# Line 20-30: Update CORS for college domain
CORS(app, resources={
    r"/api/*": {
        "origins": [
            "https://college-website-domain.com",
            "http://localhost:5173"
        ]
    }
})
```

### Step 5: Update Frontend API URL
```bash
# Edit frontend/dist/index.html
# Find: http://localhost:5000
# Replace with: https://college-backend-url

# OR edit before building:
# rcrec-web/src/pages/ImpactPage.tsx
# rcrec-web/src/pages/AdminPage.tsx
```

---

## 📋 Folder Contents Explained

### Frontend Folder (`frontend/dist/`)

**What it is**: Built React website - ready to serve  
**Size**: ~5-10 MB  
**Files**:
- `index.html` - Main page
- `assets/` - JavaScript and CSS
- Image folders - All project images

**How to serve**:
```bash
# Option 1: Apache
cp -r frontend/dist/* /var/www/html/

# Option 2: Nginx
# Configure nginx.conf to serve frontend/dist/

# Option 3: Python simple server (testing)
cd frontend/dist
python -m http.server 8000
# Visit: http://localhost:8000
```

### Backend Folder (`backend/`)

**What it is**: Flask API server  
**Size**: ~1-2 MB  
**Files**:
- `app.py` - Main application
- `requirements.txt` - Python packages
- `projects.json` - Database
- `uploads/` - Uploaded images

**How to run**:
```bash
cd backend
pip install -r requirements.txt
python app.py
# Runs on: http://localhost:5000
```

---

## 🔧 Configuration for College Server

### 1. Change Admin Password

**File**: `backend/app.py` (Line 14)

```python
# BEFORE:
ADMIN_PASSWORD = 'admin123'

# AFTER:
ADMIN_PASSWORD = 'your-secure-password-here'
```

### 2. Update CORS Settings

**File**: `backend/app.py` (Lines 20-30)

```python
# BEFORE:
CORS(app)

# AFTER:
CORS(app, resources={
    r"/api/*": {
        "origins": [
            "https://college-domain.com",
            "http://college-ip:port",
            "http://localhost:5173"
        ]
    }
})
```

### 3. Update API URL in Frontend

**Option A: Before Building (Recommended)**

Edit `rcrec-web/src/pages/ImpactPage.tsx`:
```typescript
// Line 14
const response = await fetch('https://college-backend-url/api/projects');
```

Edit `rcrec-web/src/pages/AdminPage.tsx`:
```typescript
// Line 38
const API_URL = 'https://college-backend-url/api';
```

Then rebuild:
```bash
cd rcrec-web
npm run build
```

**Option B: After Building (Quick Fix)**

Edit `frontend/dist/index.html`:
```html
<!-- Find and replace -->
http://localhost:5000 → https://college-backend-url
```

### 4. Configure Web Server

**Apache Configuration**:
```apache
<VirtualHost *:80>
    ServerName racrec.college.edu
    DocumentRoot /var/www/racrec/frontend/dist

    <Directory /var/www/racrec/frontend/dist>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
        
        # For React Router
        <IfModule mod_rewrite.c>
            RewriteEngine On
            RewriteBase /
            RewriteRule ^index\.html$ - [L]
            RewriteCond %{REQUEST_FILENAME} !-f
            RewriteCond %{REQUEST_FILENAME} !-d
            RewriteRule . /index.html [L]
        </IfModule>
    </Directory>

    # Proxy API requests to backend
    ProxyPreserveHost On
    ProxyPass /api http://localhost:5000/api
    ProxyPassReverse /api http://localhost:5000/api
</VirtualHost>
```

**Nginx Configuration**:
```nginx
server {
    listen 80;
    server_name racrec.college.edu;

    root /var/www/racrec/frontend/dist;
    index index.html;

    # Serve frontend
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Proxy API to backend
    location /api {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 📊 Server Requirements

### For Frontend
- Any web server (Apache, Nginx, IIS)
- No special requirements
- Just serve static files

### For Backend
- Python 3.8+
- pip (Python package manager)
- ~100 MB disk space

### Dependencies
```
Flask==2.3.3
Flask-CORS==4.0.0
Werkzeug==2.3.7
```

---

## 🎯 Complete Setup Steps for College

### Step 1: Extract Package
```bash
unzip RACREC_Website.zip
cd RACREC_Website
```

### Step 2: Setup Frontend
```bash
# Copy to web server
cp -r frontend/dist /var/www/racrec/

# Or configure web server to serve from this folder
```

### Step 3: Setup Backend
```bash
cd backend

# Install Python packages
pip install -r requirements.txt

# Update configuration
nano app.py  # Edit password and CORS

# Run backend
python app.py
# Backend runs on: http://localhost:5000
```

### Step 4: Configure Web Server
```bash
# Apache
sudo cp apache-config.conf /etc/apache2/sites-available/racrec.conf
sudo a2ensite racrec
sudo systemctl restart apache2

# Nginx
sudo cp nginx-config.conf /etc/nginx/sites-available/racrec
sudo ln -s /etc/nginx/sites-available/racrec /etc/nginx/sites-enabled/
sudo systemctl restart nginx
```

### Step 5: Test
```bash
# Test frontend
curl http://localhost/

# Test backend
curl http://localhost:5000/api/projects

# Test admin panel
# Visit: http://localhost/admin
```

---

## 🔐 Security Checklist

- [ ] Changed admin password
- [ ] Updated CORS settings
- [ ] Enabled HTTPS (SSL certificate)
- [ ] Backed up projects.json
- [ ] Set proper file permissions
- [ ] Configured firewall
- [ ] Tested all endpoints
- [ ] Verified file uploads work

---

## 📁 File Permissions

```bash
# Set proper permissions
chmod 755 backend/
chmod 644 backend/app.py
chmod 644 backend/projects.json
chmod 755 backend/uploads/
chmod 755 frontend/dist/
chmod 644 frontend/dist/*
```

---

## 🚨 Troubleshooting

### Backend won't start
```bash
# Check Python version
python --version  # Should be 3.8+

# Check dependencies
pip install -r requirements.txt

# Check port 5000 is available
lsof -i :5000
```

### Frontend not loading
```bash
# Check web server is running
sudo systemctl status apache2
# or
sudo systemctl status nginx

# Check files are in right location
ls -la /var/www/racrec/frontend/dist/
```

### API not connecting
```bash
# Check backend is running
curl http://localhost:5000/api/projects

# Check CORS settings
# Check firewall allows connections
sudo ufw allow 5000
```

### Images not uploading
```bash
# Check uploads folder exists
ls -la backend/uploads/

# Check permissions
chmod 755 backend/uploads/

# Check disk space
df -h
```

---

## 📞 Support Information

### What College IT Needs to Know

**Frontend**:
- React + Vite built application
- Static files only
- No backend needed for frontend
- Can be served by any web server

**Backend**:
- Flask Python application
- Handles API requests
- Manages file uploads
- Stores data in JSON file

**Admin Panel**:
- URL: `/admin`
- Password: (college will set)
- Features: Add/Edit/Delete projects, Upload images

**API Endpoints**:
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Add project (requires password)
- `PUT /api/projects/<id>` - Update project (requires password)
- `DELETE /api/projects/<id>` - Delete project (requires password)
- `GET /api/uploads/<filename>` - Get uploaded image

---

## 📝 Handover Checklist

Before giving to college:

- [ ] Frontend built: `npm run build`
- [ ] Backend ready: `requirements.txt` updated
- [ ] Folder structure correct
- [ ] README.md included
- [ ] SETUP.md included
- [ ] CONFIG.md included
- [ ] All documentation included
- [ ] Sample projects in projects.json
- [ ] uploads/ folder exists
- [ ] Tested locally
- [ ] Compressed as ZIP
- [ ] Ready to hand over

---

## 🎉 What College Gets

✅ **Complete Website** - Ready to deploy  
✅ **Admin Panel** - Manage projects  
✅ **Image Upload** - Add project images  
✅ **API** - Backend for all features  
✅ **Documentation** - Setup & deployment guides  

---

## 📦 Single Folder Structure

```
RACREC_Website/
├── frontend/dist/          ← Website files
├── backend/                ← API server
├── README.md               ← Start here
├── SETUP.md                ← Setup instructions
└── CONFIG.md               ← Configuration guide
```

**Size**: ~10-15 MB  
**Setup Time**: 30 minutes  
**Deployment Time**: 5 minutes  

---

**Status**: ✅ Ready for College Server Deployment
