# Setup Checklist

## Pre-Setup Requirements

- [ ] Python 3.8+ installed
- [ ] Node.js 14+ installed
- [ ] npm or yarn installed
- [ ] Git installed (optional)
- [ ] Text editor or IDE ready

## Backend Setup

### Step 1: Install Python Dependencies
```bash
cd backend
pip install -r requirements.txt
```
- [ ] Flask installed
- [ ] Flask-CORS installed
- [ ] Werkzeug installed
- [ ] No errors during installation

### Step 2: Verify Backend Files
```bash
ls -la backend/
```
- [ ] `app.py` exists
- [ ] `requirements.txt` exists
- [ ] `README.md` exists
- [ ] `uploads/` folder created

### Step 3: Start Backend Server
```bash
python app.py
```
- [ ] Server starts without errors
- [ ] Message shows: "Running on http://127.0.0.1:5000"
- [ ] No port conflicts
- [ ] CORS enabled message appears

### Step 4: Test Backend Health
```bash
curl http://localhost:5000/api/health
```
- [ ] Returns: `{"status":"ok"}`
- [ ] No connection errors

## Frontend Setup

### Step 1: Install Dependencies
```bash
npm install
# or
yarn install
```
- [ ] All dependencies installed
- [ ] No peer dependency warnings
- [ ] node_modules folder created

### Step 2: Verify Frontend Files
```bash
ls -la src/pages/AdminPage.tsx
```
- [ ] `AdminPage.tsx` exists
- [ ] `App.tsx` updated with admin route
- [ ] No TypeScript errors

### Step 3: Start Development Server
```bash
npm run dev
# or
yarn dev
```
- [ ] Server starts without errors
- [ ] Message shows: "Local: http://localhost:5173/"
- [ ] No build errors
- [ ] No missing dependencies

### Step 4: Open in Browser
```
http://localhost:5173/admin
```
- [ ] Page loads without errors
- [ ] Login form appears
- [ ] No console errors (F12)

## Admin Panel Testing

### Step 1: Login Test
- [ ] Enter password: `admin123`
- [ ] Click "Login"
- [ ] Dashboard appears
- [ ] No errors

### Step 2: Add Project Test
- [ ] Click "Add New Project"
- [ ] Form appears
- [ ] All fields visible

### Step 3: Fill Form
- [ ] Enter title: "Test Project"
- [ ] Select avenue: "Education"
- [ ] Check "Mark as Signature Project"
- [ ] Enter description: "Test description"
- [ ] Select image file
- [ ] Image preview appears
- [ ] Select status: "Active"

### Step 4: Submit Form
- [ ] Click "Add Project"
- [ ] Success message appears
- [ ] Form resets
- [ ] Project appears in list

### Step 5: Verify Project Display
- [ ] Project title visible
- [ ] Avenue badge shows "Education" (purple)
- [ ] Signature badge shows "⭐ Signature" (yellow)
- [ ] Image displays correctly
- [ ] Description visible
- [ ] Edit and Delete buttons present

### Step 6: Edit Test
- [ ] Click "Edit" on project
- [ ] Form opens with current data
- [ ] Change title to "Updated Project"
- [ ] Click "Update Project"
- [ ] Success message appears
- [ ] Project list updates

### Step 7: Delete Test
- [ ] Click "Delete" on project
- [ ] Confirmation dialog appears
- [ ] Click "OK"
- [ ] Success message appears
- [ ] Project removed from list

### Step 8: Logout Test
- [ ] Click "Logout"
- [ ] Redirected to login screen
- [ ] Session cleared

## File System Verification

### Backend Uploads
```bash
ls -la backend/uploads/
```
- [ ] Folder exists
- [ ] Uploaded images present
- [ ] Filenames have timestamps
- [ ] Images accessible

### Project Data
```bash
cat backend/projects.json
```
- [ ] File exists
- [ ] Valid JSON format
- [ ] Projects array present
- [ ] Project data correct

## Configuration

### Admin Password
- [ ] Default password: `admin123`
- [ ] Change before production
- [ ] Edit: `backend/app.py` line 14

### CORS Settings
- [ ] Frontend URL: `http://localhost:5173`
- [ ] Backend URL: `http://localhost:5000`
- [ ] CORS enabled in Flask

### Upload Settings
- [ ] Max file size: 16MB
- [ ] Allowed formats: PNG, JPG, GIF, WebP
- [ ] Upload folder: `backend/uploads/`

## Documentation Review

- [ ] Read `QUICK_START.md`
- [ ] Read `ADMIN_SETUP.md`
- [ ] Read `ADMIN_PANEL_GUIDE.md`
- [ ] Read `DATABASE_RECOMMENDATION.md`
- [ ] Read `IMPLEMENTATION_SUMMARY.md`

## Browser Compatibility

Test in:
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari
- [ ] Edge

Verify:
- [ ] Form displays correctly
- [ ] Images load
- [ ] Buttons work
- [ ] No console errors

## Performance Check

- [ ] Page loads in < 2 seconds
- [ ] Form submission < 1 second
- [ ] Image upload < 5 seconds
- [ ] No lag in interactions

## Security Check

- [ ] Password required for login
- [ ] Password required for add/edit/delete
- [ ] File types validated
- [ ] File size limited
- [ ] No sensitive data in console

## Integration Testing

### With Gallery Page
- [ ] Fetch projects from API
- [ ] Display in gallery
- [ ] Images load correctly
- [ ] Filtering works

### With Other Pages
- [ ] Navigation works
- [ ] Links functional
- [ ] No broken routes

## Backup & Recovery

- [ ] Backup `projects.json`
- [ ] Backup `uploads/` folder
- [ ] Test restore process
- [ ] Document backup location

## Production Preparation

### Before Deploying
- [ ] Change admin password
- [ ] Review security settings
- [ ] Plan database migration
- [ ] Set up environment variables
- [ ] Configure HTTPS
- [ ] Plan deployment strategy

### Database Migration (Optional)
- [ ] Review `DATABASE_RECOMMENDATION.md`
- [ ] Choose database (PostgreSQL recommended)
- [ ] Set up database
- [ ] Create migration script
- [ ] Test migration
- [ ] Update Flask app

## Troubleshooting

### If Backend Won't Start
- [ ] Check Python version: `python --version`
- [ ] Check port 5000 not in use: `lsof -i :5000`
- [ ] Reinstall dependencies: `pip install -r requirements.txt`
- [ ] Check error messages carefully

### If Frontend Won't Start
- [ ] Check Node version: `node --version`
- [ ] Clear cache: `rm -rf node_modules && npm install`
- [ ] Check port 5173 not in use
- [ ] Check for TypeScript errors

### If Admin Page Won't Load
- [ ] Check both servers running
- [ ] Check browser console (F12)
- [ ] Check network tab for failed requests
- [ ] Verify API URL in code

### If Images Won't Upload
- [ ] Check file format (PNG, JPG, GIF, WebP)
- [ ] Check file size (< 16MB)
- [ ] Check `uploads/` folder exists
- [ ] Check permissions on `uploads/` folder

## Final Verification

- [ ] Backend running on port 5000
- [ ] Frontend running on port 5173
- [ ] Admin page accessible at `/admin`
- [ ] Can login with password
- [ ] Can add project with image
- [ ] Can edit project
- [ ] Can delete project
- [ ] Images stored in `uploads/`
- [ ] Projects stored in `projects.json`
- [ ] No console errors
- [ ] No network errors

## Sign-Off

- [ ] All tests passed
- [ ] Documentation reviewed
- [ ] Ready for use
- [ ] Ready for production (after security review)

---

## Quick Reference

### Start Services
```bash
# Terminal 1 - Backend
cd backend && python app.py

# Terminal 2 - Frontend
npm run dev
```

### Access Points
- Admin Panel: `http://localhost:5173/admin`
- API: `http://localhost:5000/api`
- Images: `http://localhost:5000/api/uploads/<filename>`

### Key Files
- Backend: `backend/app.py`
- Frontend: `src/pages/AdminPage.tsx`
- Data: `backend/projects.json`
- Images: `backend/uploads/`

### Default Credentials
- Username: (not used)
- Password: `admin123`

---

**Checklist Complete!** ✅

You're ready to start managing projects!
