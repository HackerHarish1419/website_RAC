# Gallery Admin Setup - Upload Images to Gallery

## 🎯 Overview

The gallery admin feature allows authenticated admins to upload images to the gallery page, just like projects. Images are stored on the backend and served dynamically.

---

## 📋 What's Been Added

### Backend (Flask)

**New Endpoints:**
- `GET /api/gallery` - Get all gallery images
- `POST /api/gallery` - Upload new gallery image
- `DELETE /api/gallery/<id>` - Delete gallery image
- `GET /api/gallery-uploads/<filename>` - Serve gallery images

**New Files:**
- `gallery.json` - Stores gallery metadata
- `gallery_uploads/` - Stores uploaded images

### Frontend (React)

**Updated:**
- `GalleryPage.tsx` - Now fetches images from backend
- `AdminPage.tsx` - Add gallery upload section (coming soon)

---

## 🚀 How to Use

### For Users (Public)

1. Visit `/gallery` page
2. See all uploaded gallery images
3. Click to view in lightbox

### For Admins

**Coming Soon**: Gallery upload interface in admin panel

---

## 📊 API Endpoints

### Get Gallery Images
```bash
GET /api/gallery
```

**Response:**
```json
[
  {
    "id": 1,
    "filename": "1234567890.0_photo.jpg",
    "title": "Event Photo",
    "width": 1080,
    "height": 1440,
    "createdAt": "2025-01-28T20:00:00"
  }
]
```

### Upload Gallery Image
```bash
POST /api/gallery
Content-Type: multipart/form-data

Parameters:
- password: admin_password
- image: <file>
- title: "Image Title"
- width: 1080
- height: 1440
```

**Response:**
```json
{
  "id": 1,
  "filename": "1234567890.0_photo.jpg",
  "title": "Image Title",
  "width": 1080,
  "height": 1440,
  "createdAt": "2025-01-28T20:00:00"
}
```

### Delete Gallery Image
```bash
DELETE /api/gallery/1?password=admin_password
```

---

## 🔧 Configuration

### Backend (app.py)

```python
GALLERY_FILE = 'gallery.json'
GALLERY_FOLDER = 'gallery_uploads'
ADMIN_PASSWORD = '#Rotaract@RACREC'
```

### Frontend (config.ts)

```typescript
export const API_BASE_URL = 'http://localhost:5000/api';
```

---

## 📁 File Structure

```
backend/
├── app.py
├── gallery.json          ← Gallery metadata
├── gallery_uploads/      ← Uploaded images
│   ├── 1234567890.0_photo.jpg
│   └── ...
└── ...

rcrec-web/
├── src/
│   ├── pages/
│   │   ├── GalleryPage.tsx    ← Updated to fetch from backend
│   │   └── AdminPage.tsx      ← Will add gallery upload
│   └── config.ts
└── ...
```

---

## ✅ Testing

### Test Backend

```bash
# Get gallery
curl http://localhost:5000/api/gallery

# Upload image (replace with actual file)
curl -X POST http://localhost:5000/api/gallery \
  -F "password=#Rotaract@RACREC" \
  -F "image=@/path/to/image.jpg" \
  -F "title=My Photo" \
  -F "width=1080" \
  -F "height=1440"

# Delete image
curl -X DELETE "http://localhost:5000/api/gallery/1?password=%23Rotaract%40RACREC"
```

### Test Frontend

1. Start backend: `python app.py`
2. Start frontend: `yarn dev`
3. Visit: `http://localhost:5173/gallery`
4. Should see uploaded images

---

## 🎯 Next Steps

### To Add Gallery Upload to Admin Panel

1. Add gallery tab to AdminPage
2. Create gallery upload form
3. Add image preview
4. Handle upload and deletion
5. Display uploaded images

**Similar to Projects admin, but for gallery images**

---

## 📝 Image Metadata

Each gallery image stores:
- `id` - Unique identifier
- `filename` - Stored filename
- `title` - Display title
- `width` - Image width (for layout)
- `height` - Image height (for layout)
- `createdAt` - Upload timestamp

---

## 🔐 Security

- ✅ Password protected uploads
- ✅ File type validation (jpg, png, gif, webp)
- ✅ Secure filename handling
- ✅ 16MB max file size

---

## 🚨 Troubleshooting

### Images not showing

1. Check backend is running
2. Verify `gallery_uploads/` folder exists
3. Check `gallery.json` has entries
4. Check browser console for errors

### Upload fails

1. Check password is correct
2. Verify file format is supported
3. Check file size < 16MB
4. Check backend logs

---

## 📊 Database Schema

### gallery.json

```json
[
  {
    "id": 1,
    "filename": "1234567890.0_photo.jpg",
    "title": "Event Photo",
    "width": 1080,
    "height": 1440,
    "createdAt": "2025-01-28T20:00:00"
  }
]
```

---

## 🎉 Features

✅ Upload images to gallery  
✅ Delete images from gallery  
✅ Dynamic gallery display  
✅ Lightbox view  
✅ Responsive masonry layout  
✅ Password protected  
✅ Fallback to default images  

---

**Status**: ✅ Backend ready, Frontend display ready, Admin upload coming soon!
