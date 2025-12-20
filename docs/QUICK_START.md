# Quick Start Guide - Admin Panel with Image Upload

## What's New

✨ **Enhanced Admin Panel** with:
- ✅ Project Avenue Selection (Club Service, Community Service, International Service, Professional Service)
- ✅ Signature Project Marking
- ✅ Local Image Upload (PNG, JPG, GIF, WebP)
- ✅ Image Preview Before Saving
- ✅ Automatic Image Storage in Backend

## 5-Minute Setup

### Terminal 1: Start Backend

```bash
cd backend
pip install -r requirements.txt
python app.py
```

You'll see:
```
 * Running on http://127.0.0.1:5000
```

### Terminal 2: Start Frontend

```bash
npm run dev
# or
yarn dev
```

You'll see:
```
  ➜  Local:   http://localhost:5173/
```

### Browser: Access Admin Panel

1. Open: `http://localhost:5173/admin`
2. Enter password: `admin123`
3. Click "Add New Project"

## Adding Your First Project

### Form Fields

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Project Title | Text | ✓ | Name of your project |
| Project Avenue | Dropdown | ✓ | Select category (Club, Community, International, Professional) |
| Mark as Signature | Checkbox | - | Check if it's a flagship project |
| Description | Textarea | ✓ | Detailed project information |
| Project Image | File Upload | ✓ | Choose image from your computer |
| Status | Dropdown | - | Active or Inactive |

### Example Project

```
Title: Udhiram Blood Donation Camp
Avenue: Community Service
Signature: ✓ (checked)
Description: A successful blood donation camp uniting students for a life-saving cause.
Image: (select from computer)
Status: Active
```

## File Organization

```
backend/
├── app.py                    # Flask server
├── projects.json             # All project data
├── uploads/                  # Uploaded images
│   ├── 1704067200.0_photo.jpg
│   ├── 1704067300.0_image.png
│   └── ...
└── requirements.txt

rcrec-web/
├── src/pages/AdminPage.tsx   # Admin interface
└── ...
```

## Viewing Your Projects

### In Admin Panel
- All projects displayed in grid
- Shows avenue as purple badge
- Shows "⭐ Signature" badge if marked
- Edit or Delete buttons available

### In Your Website
To display projects on your website, fetch from the API:

```javascript
// Get all projects
fetch('http://localhost:5000/api/projects')
  .then(res => res.json())
  .then(projects => {
    // Filter by avenue
    const educationProjects = projects.filter(p => p.avenue === 'education');
    
    // Filter signature projects
    const signatureProjects = projects.filter(p => p.isSignature);
    
    // Display images
    projects.forEach(project => {
      const imageUrl = `http://localhost:5000/api/uploads/${project.image}`;
      console.log(imageUrl);
    });
  });
```

## Common Tasks

### Change Admin Password

Edit `backend/app.py`:
```python
ADMIN_PASSWORD = 'your-new-secure-password'
```

Restart the backend server.

### Delete All Projects

Delete `backend/projects.json` and restart the backend.

### Clear Uploaded Images

Delete all files in `backend/uploads/` directory.

### Add More Avenues

Edit `backend/app.py` and `AdminPage.tsx` to add more avenue options:

**In AdminPage.tsx** (line ~334):
```jsx
<option value="new-avenue">New Avenue Name</option>
```

### Export Projects as JSON

```bash
# Copy the projects.json file
cp backend/projects.json backup_projects.json
```

## Troubleshooting

### "Backend not connecting"
- Check if Flask is running on port 5000
- Check browser console (F12) for errors
- Verify no firewall blocking port 5000

### "Image not uploading"
- Check file size (max 16MB)
- Verify file format (PNG, JPG, GIF, WebP)
- Check `backend/uploads/` folder exists

### "Password not working"
- Verify password in `backend/app.py`
- Restart backend after changing password
- Check for typos

### "Projects not showing"
- Refresh the page
- Check `backend/projects.json` exists
- Check browser console for errors

## Next Steps

1. ✅ Add your first project
2. ✅ Test image upload
3. ✅ Mark a project as signature
4. ✅ Edit and delete projects
5. ⏭️ Integrate projects into your website
6. ⏭️ Migrate to PostgreSQL for production
7. ⏭️ Deploy to production server

## API Endpoints Reference

```
GET    /api/projects              # Get all projects
POST   /api/projects              # Add new project (requires password)
PUT    /api/projects/<id>         # Update project (requires password)
DELETE /api/projects/<id>         # Delete project (requires password)
GET    /api/uploads/<filename>    # Get uploaded image
GET    /api/health                # Health check
```

## Support

For detailed information, see:
- `ADMIN_SETUP.md` - Full setup guide
- `DATABASE_RECOMMENDATION.md` - Database options for production
- `backend/README.md` - Backend documentation

---

**Ready to go!** 🚀

Start adding your projects now!
