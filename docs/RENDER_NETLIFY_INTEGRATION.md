# Connect Render Backend to Netlify Frontend

## 🎯 Complete Integration Guide

### Architecture
```
Netlify Frontend
    ↓
    ↓ (API calls)
    ↓
Render Backend
    ↓
    ↓ (serves data)
    ↓
Netlify Frontend (displays)
```

---

## 📋 Step-by-Step Integration

### Step 1: Deploy Backend to Render

#### 1.1 Go to Render
- Visit https://render.com
- Sign up (free account)
- Click "New +"
- Select "Web Service"

#### 1.2 Connect GitHub
- Select "Build and deploy from a Git repository"
- Connect your GitHub account
- Select your repo

#### 1.3 Configure Render
```
Name: racrec-api
Environment: Python 3
Region: Choose closest to you
Build Command: pip install -r requirements.txt
Start Command: gunicorn app:app
```

#### 1.4 Deploy
- Click "Create Web Service"
- Wait for deployment (2-3 minutes)
- You'll get a URL like: `https://racrec-api.onrender.com`

**Save this URL!** You'll need it for the frontend.

---

### Step 2: Update Backend for Render

#### 2.1 Update CORS Settings

Edit `backend/app.py` (around line 20-30):

```python
# Before:
CORS(app)

# After:
CORS(app, resources={
    r"/api/*": {
        "origins": [
            "https://racrec.netlify.app",  # Your Netlify URL
            "http://localhost:5173",        # Local development
            "http://localhost:3000"         # Alternative local
        ]
    }
})
```

#### 2.2 Push to GitHub

```bash
git add backend/app.py
git commit -m "Update CORS for Render + Netlify"
git push origin main
```

**Render auto-deploys** when you push to GitHub!

---

### Step 3: Build Frontend for Netlify

#### 3.1 Update API URLs

Edit `rcrec-web/src/pages/ImpactPage.tsx`:

```typescript
// Find this line (around line 14):
const response = await fetch('http://localhost:5000/api/projects');

// Replace with:
const response = await fetch('https://racrec-api.onrender.com/api/projects');
```

Edit `rcrec-web/src/pages/AdminPage.tsx`:

```typescript
// Find this line (around line 38):
const API_URL = 'http://localhost:5000/api';

// Replace with:
const API_URL = 'https://racrec-api.onrender.com/api';
```

#### 3.2 Build Frontend

```bash
cd rcrec-web
npm run build
```

This creates `rcrec-web/dist/` folder.

---

### Step 4: Deploy Frontend to Netlify

#### 4.1 Go to Netlify
- Visit https://app.netlify.com
- Sign up (free account)
- Click "Add new site"
- Select "Deploy manually"

#### 4.2 Upload dist Folder
```bash
# Option 1: Drag & drop
# Drag rcrec-web/dist/ folder to Netlify

# Option 2: Using CLI
npm install -g netlify-cli
netlify login
cd rcrec-web
netlify deploy --prod --dir=dist
```

#### 4.3 Get Your URL
- Netlify gives you a URL like: `https://racrec.netlify.app`
- This is your website URL!

---

## ✅ Verification Checklist

### Backend (Render)
- [ ] Backend deployed to Render
- [ ] Got Render URL: `https://racrec-api.onrender.com`
- [ ] CORS updated with Netlify URL
- [ ] Code pushed to GitHub
- [ ] Render auto-deployed

### Frontend (Netlify)
- [ ] API URLs updated in code
- [ ] Frontend built: `npm run build`
- [ ] dist/ folder created
- [ ] Uploaded to Netlify
- [ ] Got Netlify URL: `https://racrec.netlify.app`

### Integration
- [ ] Test website loads
- [ ] Test admin panel loads
- [ ] Test API calls work
- [ ] Test project display
- [ ] Test image upload

---

## 🧪 Testing the Connection

### 1. Test Frontend Loads
```
Visit: https://racrec.netlify.app
Expected: Website loads
```

### 2. Test Admin Panel
```
Visit: https://racrec.netlify.app/admin
Expected: Admin panel loads
```

### 3. Test API Connection
```
Open browser console (F12)
Visit: https://racrec.netlify.app
Check console for errors
Expected: No CORS errors
```

### 4. Test Projects Display
```
Visit: https://racrec.netlify.app/impact
Expected: Projects from Render backend display
```

### 5. Test Admin Functionality
```
1. Go to: https://racrec.netlify.app/admin
2. Enter password: #Rotaract@RACREC
3. Add a test project
4. Go to: https://racrec.netlify.app/impact
5. Expected: New project appears
```

---

## 🔗 URLs Reference

| Component | URL | Purpose |
|-----------|-----|---------|
| **Frontend** | `https://racrec.netlify.app` | Website |
| **Admin Panel** | `https://racrec.netlify.app/admin` | Manage projects |
| **Backend API** | `https://racrec-api.onrender.com/api` | API server |
| **Projects Endpoint** | `https://racrec-api.onrender.com/api/projects` | Get projects |

---

## 📝 Complete URLs to Update

### In Code Before Building

**File**: `rcrec-web/src/pages/ImpactPage.tsx`
```typescript
// Line 14 - Change from:
const response = await fetch('http://localhost:5000/api/projects');

// To:
const response = await fetch('https://racrec-api.onrender.com/api/projects');
```

**File**: `rcrec-web/src/pages/AdminPage.tsx`
```typescript
// Line 38 - Change from:
const API_URL = 'http://localhost:5000/api';

// To:
const API_URL = 'https://racrec-api.onrender.com/api';
```

---

## 🚨 Troubleshooting

### Issue: "Failed to fetch projects"

**Solution 1: Check CORS**
```bash
# Edit backend/app.py
# Make sure Netlify URL is in CORS origins
CORS(app, resources={
    r"/api/*": {
        "origins": [
            "https://racrec.netlify.app",  # Add this
            "http://localhost:5173"
        ]
    }
})

# Push to GitHub
git push origin main
# Render auto-deploys
```

**Solution 2: Check API URL**
```bash
# Make sure API URL is correct in frontend
# Should be: https://racrec-api.onrender.com/api

# Rebuild and redeploy
npm run build
netlify deploy --prod --dir=dist
```

### Issue: Images not loading

**Solution**: Check image paths
```bash
# Images should be served from:
# https://racrec-api.onrender.com/api/uploads/image-name.jpg

# Check backend has uploads folder
# Check images are uploaded correctly
```

### Issue: Admin panel not working

**Solution**: Check password
```bash
# Default password: #Rotaract@RACREC
# Make sure you're using correct password
```

---

## 🔐 Security Checklist

- [ ] Admin password set: `#Rotaract@RACREC`
- [ ] CORS configured for Netlify domain
- [ ] HTTPS enabled (automatic on both)
- [ ] API URLs updated in frontend
- [ ] Tested all endpoints
- [ ] Verified file uploads work

---

## 📊 Deployment Summary

### Render Backend
```
Repository: Your GitHub repo
Branch: main
Build: pip install -r requirements.txt
Start: gunicorn app:app
URL: https://racrec-api.onrender.com
```

### Netlify Frontend
```
Build: npm run build
Publish: rcrec-web/dist
URL: https://racrec.netlify.app
```

### Integration
```
Frontend calls: https://racrec-api.onrender.com/api
Backend serves: Projects, images, API
CORS: Configured for Netlify domain
```

---

## 🎯 Quick Reference

### Deploy Backend to Render
1. Go to https://render.com
2. Create Web Service
3. Connect GitHub
4. Configure: `gunicorn app:app`
5. Deploy (auto)

### Deploy Frontend to Netlify
1. Update API URLs in code
2. Build: `npm run build`
3. Go to https://app.netlify.app
4. Upload `rcrec-web/dist/`
5. Done!

### Connect Them
1. Update CORS in backend
2. Update API URLs in frontend
3. Rebuild and redeploy
4. Test everything

---

## ✅ Final Checklist

- [ ] Backend deployed to Render
- [ ] Frontend deployed to Netlify
- [ ] API URLs updated in frontend
- [ ] CORS configured in backend
- [ ] Website loads
- [ ] Admin panel works
- [ ] Projects display
- [ ] Image upload works
- [ ] All tests pass

---

## 🎉 You're Live!

Your website is now live with:

✅ **Frontend**: https://racrec.netlify.app  
✅ **Admin Panel**: https://racrec.netlify.app/admin  
✅ **Backend API**: https://racrec-api.onrender.com/api  
✅ **Database**: Render backend (projects.json)  
✅ **Images**: Render backend (uploads folder)  

---

## 📞 Support

**If something doesn't work:**

1. Check browser console (F12)
2. Check Render logs
3. Check Netlify logs
4. Verify API URLs
5. Verify CORS settings
6. Test API directly: `curl https://racrec-api.onrender.com/api/projects`

---

**Status**: ✅ Ready for Render + Netlify Deployment
