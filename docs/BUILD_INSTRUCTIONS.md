# Quick Build Instructions

## Build Frontend for Netlify

### Step 1: Build the Project

```bash
cd rcrec-web
npm run build
```

**Output**: Creates `rcrec-web/dist/` folder with all production files

### Step 2: What Gets Created

```
rcrec-web/dist/
├── index.html          ← Main entry point
├── assets/
│   ├── index-*.js      ← JavaScript bundles
│   ├── index-*.css     ← CSS files
│   └── ...
├── Communityservice/   ← Images
├── internationalservice/
├── Professonialservice/
├── clubservice/
├── core/
├── gallery/
└── ...
```

### Step 3: Upload to Netlify

#### Option A: Using Netlify CLI (Fastest)

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=rcrec-web/dist
```

#### Option B: Drag & Drop

1. Go to https://app.netlify.com
2. Drag `rcrec-web/dist` folder to the upload area
3. Done! ✅

#### Option C: GitHub Integration (Recommended)

1. Push code to GitHub
2. Go to https://app.netlify.com
3. Click "New site from Git"
4. Select your repo
5. Build command: `npm run build`
6. Publish directory: `rcrec-web/dist`
7. Deploy! ✅

---

## Backend Deployment

### Deploy to Heroku

```bash
# 1. Create Heroku app
heroku create your-app-name

# 2. Add Procfile to backend folder
echo "web: gunicorn app:app" > backend/Procfile

# 3. Update requirements.txt
cd backend
pip install gunicorn
pip freeze > requirements.txt

# 4. Deploy
git add .
git commit -m "Deploy to Heroku"
git push heroku main

# 5. Get URL
heroku open
```

Your backend URL: `https://your-app-name.herokuapp.com`

---

## Update Frontend for Production

### Update API URL

Edit `rcrec-web/src/pages/ImpactPage.tsx`:

```typescript
// Change this line:
const response = await fetch('http://localhost:5000/api/projects');

// To this:
const response = await fetch('https://your-backend-url.herokuapp.com/api/projects');
```

Edit `rcrec-web/src/pages/AdminPage.tsx`:

```typescript
// Change this line:
const API_URL = 'http://localhost:5000/api';

// To this:
const API_URL = 'https://your-backend-url.herokuapp.com/api';
```

---

## Complete Deployment Steps

```bash
# 1. Build frontend
cd rcrec-web
npm run build

# 2. Deploy backend (if not already done)
cd ../backend
git push heroku main

# 3. Deploy frontend
cd ../rcrec-web
netlify deploy --prod --dir=dist
```

---

## Verify Deployment

1. **Frontend**: Visit `https://your-site-name.netlify.app`
2. **Admin Panel**: Visit `https://your-site-name.netlify.app/admin`
3. **API**: Visit `https://your-backend-url.herokuapp.com/api/projects`
4. **Add Project**: Test admin panel
5. **Check Impact Page**: Verify new project appears

---

## File Locations

| File | Location | Purpose |
|------|----------|---------|
| Build output | `rcrec-web/dist/` | Upload to Netlify |
| Backend | `backend/` | Deploy to Heroku |
| Frontend code | `rcrec-web/src/` | Source code |
| Projects data | `backend/projects.json` | Database (backup regularly!) |
| Uploaded images | `backend/uploads/` | Image storage |

---

## Production Checklist

- [ ] Frontend built successfully
- [ ] Backend deployed to Heroku
- [ ] API URL updated in frontend
- [ ] Admin password changed
- [ ] CORS configured
- [ ] All features tested
- [ ] Images uploading correctly
- [ ] Projects visible on Impact page

---

## Troubleshooting

### Build fails
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### API not connecting
- Check backend URL is correct
- Verify CORS is enabled
- Check browser console (F12) for errors

### Images not loading
- Verify `backend/uploads/` folder exists
- Check image paths in database
- Verify backend is running

---

## Quick Reference

```bash
# Build
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=rcrec-web/dist

# Deploy backend to Heroku
git push heroku main

# Check Heroku logs
heroku logs --tail

# Preview locally
npm run preview
```

---

**Ready to deploy?** Follow the steps above! 🚀
