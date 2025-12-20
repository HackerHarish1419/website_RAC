# Netlify Deployment Guide - RACREC Website

## Overview

This guide explains how to deploy your RACREC website to Netlify with the backend API integration.

## Deployment Architecture

```
Frontend (React/Vite)
    ↓
Netlify (Hosts dist/ folder)
    ↓
Backend API (Flask)
    ↓
Heroku/Railway/DigitalOcean (Hosts backend)
```

---

## Step 1: Build the Frontend

### 1.1 Build the React App

```bash
cd rcrec-web
npm run build
```

This creates a `dist/` folder with optimized production files.

### 1.2 Verify Build

```bash
npm run preview
```

Visit `http://localhost:4173` to test the production build locally.

---

## Step 2: Deploy Backend (Flask)

### Option A: Deploy to Heroku (Recommended)

#### Prerequisites
- Heroku account (free tier available)
- Heroku CLI installed

#### Steps

1. **Create Heroku App**
```bash
heroku login
heroku create your-app-name
```

2. **Create `Procfile` in backend folder**
```
web: gunicorn app:app
```

3. **Update `requirements.txt`**
```bash
cd backend
pip freeze > requirements.txt
# Add gunicorn
echo "gunicorn==21.2.0" >> requirements.txt
```

4. **Update Flask for Production**

Edit `backend/app.py` and add at the end:
```python
if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=int(os.environ.get('PORT', 5000)))
```

5. **Deploy**
```bash
git add .
git commit -m "Deploy to Heroku"
git push heroku main
```

6. **Get Backend URL**
```bash
heroku open
# Your backend URL: https://your-app-name.herokuapp.com
```

### Option B: Deploy to Railway

1. Go to https://railway.app
2. Connect GitHub repo
3. Add environment variables
4. Deploy

Your backend URL: `https://your-project.railway.app`

---

## Step 3: Update Frontend API URL

### 3.1 Update ImpactPage.tsx

Replace hardcoded localhost with production URL:

```typescript
// Before
const response = await fetch('http://localhost:5000/api/projects');

// After
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
const response = await fetch(`${API_URL}/projects`);
```

### 3.2 Update AdminPage.tsx

```typescript
// Before
const API_URL = 'http://localhost:5000/api';

// After
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
```

### 3.3 Create `.env.production`

```
VITE_API_URL=https://your-backend-url.herokuapp.com/api
```

### 3.4 Update vite.config.ts

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL)
  }
})
```

---

## Step 4: Deploy Frontend to Netlify

### Method 1: Using Netlify CLI (Recommended)

1. **Install Netlify CLI**
```bash
npm install -g netlify-cli
```

2. **Login to Netlify**
```bash
netlify login
```

3. **Deploy**
```bash
cd rcrec-web
netlify deploy --prod --dir=dist
```

4. **Get Your URL**
```
https://your-site-name.netlify.app
```

### Method 2: Using GitHub Integration

1. **Push to GitHub**
```bash
git add .
git commit -m "Ready for Netlify"
git push origin main
```

2. **Connect to Netlify**
   - Go to https://app.netlify.com
   - Click "New site from Git"
   - Select GitHub repo
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`

3. **Add Environment Variables**
   - Go to Site Settings → Environment
   - Add: `VITE_API_URL=https://your-backend-url.herokuapp.com/api`

4. **Deploy**
   - Netlify auto-deploys on push to main

---

## Step 5: Configure CORS on Backend

Update `backend/app.py`:

```python
from flask_cors import CORS

app = Flask(__name__)

# Allow Netlify domain
CORS(app, resources={
    r"/api/*": {
        "origins": [
            "https://your-site-name.netlify.app",
            "http://localhost:5173",
            "http://localhost:3000"
        ]
    }
})
```

---

## Step 6: Update Admin Panel Password

**IMPORTANT**: Change the default password before deploying!

Edit `backend/app.py`:
```python
ADMIN_PASSWORD = 'your-secure-password-here'  # Change this!
```

---

## Complete File Structure for Deployment

```
d:\website_for_RACREC\
│
├── rcrec-web/
│   ├── src/
│   ├── dist/                    ← Build output (for Netlify)
│   ├── package.json
│   ├── vite.config.ts
│   ├── .env.production          ← NEW: Production env vars
│   └── ...
│
├── backend/
│   ├── app.py
│   ├── requirements.txt         ← Updated with gunicorn
│   ├── Procfile                 ← NEW: For Heroku
│   ├── projects.json
│   ├── uploads/
│   └── ...
│
└── netlify.toml                 ← NEW: Netlify config (optional)
```

---

## Step 7: Create netlify.toml (Optional)

Create `d:\website_for_RACREC\netlify.toml`:

```toml
[build]
  command = "cd rcrec-web && npm run build"
  publish = "rcrec-web/dist"

[env.production]
  VITE_API_URL = "https://your-backend-url.herokuapp.com/api"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## Deployment Checklist

### Frontend
- [ ] Run `npm run build` successfully
- [ ] Test with `npm run preview`
- [ ] Update API URLs in code
- [ ] Create `.env.production`
- [ ] Push to GitHub
- [ ] Connect to Netlify
- [ ] Add environment variables
- [ ] Test on Netlify URL

### Backend
- [ ] Update `requirements.txt` with gunicorn
- [ ] Create `Procfile`
- [ ] Update Flask for production
- [ ] Change admin password
- [ ] Update CORS settings
- [ ] Deploy to Heroku/Railway
- [ ] Test API endpoints
- [ ] Verify uploads folder exists

### Integration
- [ ] Test admin panel on production
- [ ] Add new project in admin
- [ ] Verify project appears on Impact page
- [ ] Test all filters
- [ ] Test image uploads
- [ ] Check console for errors

---

## Troubleshooting

### Issue: "Failed to fetch projects"

**Solution**: Check CORS settings and API URL
```bash
# Test backend
curl https://your-backend-url.herokuapp.com/api/projects

# Check browser console (F12) for exact error
```

### Issue: Images not loading

**Solution**: Verify uploads folder and image paths
```bash
# Backend should have
backend/uploads/
  ├── 1704067200.0_image.jpg
  └── ...
```

### Issue: Admin panel not working

**Solution**: Check password and backend connection
```bash
# Test login
curl -X POST https://your-backend-url.herokuapp.com/api/projects \
  -F "password=admin123" \
  -F "title=Test"
```

### Issue: Build fails on Netlify

**Solution**: Check build logs
1. Go to Netlify dashboard
2. Click "Deploys"
3. Click failed deploy
4. Check "Deploy log"
5. Fix errors and push again

---

## Production URLs

After deployment, you'll have:

| Component | URL |
|-----------|-----|
| Frontend | `https://your-site-name.netlify.app` |
| Backend | `https://your-backend-url.herokuapp.com` |
| Admin Panel | `https://your-site-name.netlify.app/admin` |
| API | `https://your-backend-url.herokuapp.com/api` |

---

## Environment Variables Summary

### Frontend (.env.production)
```
VITE_API_URL=https://your-backend-url.herokuapp.com/api
```

### Backend (Heroku Config Vars)
```
ADMIN_PASSWORD=your-secure-password
FLASK_ENV=production
```

---

## Security Checklist

- [ ] Changed admin password
- [ ] Enabled HTTPS (automatic on Netlify)
- [ ] Updated CORS settings
- [ ] Removed debug mode from Flask
- [ ] Set environment variables
- [ ] Backed up projects.json
- [ ] Tested all endpoints
- [ ] Verified file uploads work

---

## Monitoring & Maintenance

### Netlify
- Monitor build logs
- Check analytics
- Set up error tracking

### Heroku
- Monitor dyno usage
- Check logs: `heroku logs --tail`
- Set up alerts

### Backend
- Regularly backup `projects.json`
- Monitor `uploads/` folder size
- Check error logs

---

## Rollback Instructions

If something goes wrong:

### Netlify
1. Go to Deploys
2. Click previous successful deploy
3. Click "Publish deploy"

### Heroku
```bash
heroku releases
heroku rollback v<number>
```

---

## Next Steps

1. **Build frontend**: `npm run build`
2. **Deploy backend**: Push to Heroku/Railway
3. **Deploy frontend**: Connect to Netlify
4. **Test everything**: Visit production URLs
5. **Monitor**: Check logs and analytics

---

## Support Resources

- Netlify Docs: https://docs.netlify.com
- Heroku Docs: https://devcenter.heroku.com
- Flask Deployment: https://flask.palletsprojects.com/deployment/
- CORS Guide: https://enable-cors.org

---

**Status**: ✅ Ready for Deployment  
**Last Updated**: January 2025
