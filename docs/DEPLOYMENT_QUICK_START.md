# Quick Deployment Guide - Render + Netlify

## 🎯 Complete Deployment in 5 Steps

### Step 1: Deploy Backend to Render (5 minutes)

```bash
# 1. Go to https://render.com
# 2. Sign up with GitHub
# 3. Click "New +" → "Web Service"
# 4. Select your GitHub repo
# 5. Configure:
#    - Name: racrec-api
#    - Environment: Python 3
#    - Build Command: pip install -r requirements.txt
#    - Start Command: gunicorn app:app
# 6. Click "Create Web Service"
# 7. Wait 2-3 minutes for deployment
# 8. Copy your URL: https://racrec-api.onrender.com
```

**Save this URL!** You'll need it for the frontend.

---

### Step 2: Update Backend CORS (2 minutes)

Edit `backend/app.py` (around line 20-30):

```python
CORS(app, resources={
    r"/api/*": {
        "origins": [
            "https://racrec.netlify.app",  # Your Netlify URL
            "http://localhost:5173",        # Local development
        ]
    }
})
```

Push to GitHub:
```bash
git add backend/app.py
git commit -m "Update CORS for Render + Netlify"
git push origin main
```

**Render auto-deploys!** ✅

---

### Step 3: Build Frontend (3 minutes)

```bash
cd rcrec-web
npm run build
```

This creates `rcrec-web/dist/` folder.

---

### Step 4: Deploy Frontend to Netlify (5 minutes)

**Option A: Using CLI (Fastest)**
```bash
npm install -g netlify-cli
netlify login
cd rcrec-web
netlify deploy --prod --dir=dist
```

**Option B: Drag & Drop**
1. Go to https://app.netlify.app
2. Drag `rcrec-web/dist/` folder to upload area
3. Done! ✅

**Option C: GitHub Integration**
1. Go to https://app.netlify.com
2. Click "Add new site"
3. Select "Deploy from Git"
4. Connect GitHub
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `rcrec-web/dist`
6. Deploy! ✅

**Get your Netlify URL**: `https://racrec.netlify.app`

---

### Step 5: Test Everything (5 minutes)

```bash
# 1. Test website loads
Visit: https://racrec.netlify.app

# 2. Test admin panel
Visit: https://racrec.netlify.app/admin
Password: #Rotaract@RACREC

# 3. Test projects display
Visit: https://racrec.netlify.app/impact

# 4. Test add project
1. Go to admin panel
2. Add a test project
3. Go to impact page
4. Verify project appears
```

---

## 📊 URLs After Deployment

| Component | URL |
|-----------|-----|
| **Website** | `https://racrec.netlify.app` |
| **Admin Panel** | `https://racrec.netlify.app/admin` |
| **Impact Page** | `https://racrec.netlify.app/impact` |
| **Backend API** | `https://racrec-api.onrender.com/api` |

---

## 🔧 Configuration Files

### Frontend Config
**File**: `rcrec-web/src/config.ts`

```typescript
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
```

**For Render production**, change to:
```typescript
export const API_BASE_URL = 'https://racrec-api.onrender.com/api';
```

### Backend Config
**File**: `backend/app.py` (Line 14)

```python
ADMIN_PASSWORD = '#Rotaract@RACREC'
```

---

## ✅ Deployment Checklist

- [ ] Backend deployed to Render
- [ ] Backend CORS updated
- [ ] Code pushed to GitHub
- [ ] Render auto-deployed
- [ ] Frontend built: `npm run build`
- [ ] Frontend deployed to Netlify
- [ ] Got Render URL: `https://racrec-api.onrender.com`
- [ ] Got Netlify URL: `https://racrec.netlify.app`
- [ ] Website loads
- [ ] Admin panel works
- [ ] Projects display
- [ ] Image upload works
- [ ] All tests pass

---

## 🚨 Troubleshooting

### "Failed to fetch projects"
1. Check Render backend is running
2. Verify CORS settings include Netlify URL
3. Check API URL in config.ts
4. Rebuild and redeploy frontend

### "Images not loading"
1. Check uploads folder exists on Render
2. Verify image paths are correct
3. Check backend is serving images

### "Admin panel not working"
1. Check password: `#Rotaract@RACREC`
2. Check backend is running
3. Check CORS settings

---

## 📝 Environment Variables

### Frontend (.env or config.ts)
```
REACT_APP_API_URL=https://racrec-api.onrender.com/api
```

### Backend (Render Config Vars)
```
ADMIN_PASSWORD=#Rotaract@RACREC
FLASK_ENV=production
```

---

## 🎉 You're Live!

Your website is now live with:
- ✅ Frontend on Netlify
- ✅ Backend on Render
- ✅ Admin panel working
- ✅ Image uploads working
- ✅ Projects displaying

---

**Total Deployment Time**: ~20 minutes  
**Cost**: FREE (both Render and Netlify have free tiers)  
**Status**: ✅ Ready to Go Live!
