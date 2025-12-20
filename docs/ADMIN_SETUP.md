# Admin Panel Setup Guide

## Overview
This admin panel allows you to manage future projects through a simple web interface with Flask backend.

## Quick Start

### 1. Backend Setup

Navigate to the backend folder and install dependencies:

```bash
cd backend
pip install -r requirements.txt
```

Start the Flask server:

```bash
python app.py
```

The backend will run on `http://localhost:5000`

### 2. Frontend Setup

In the main project folder, ensure dependencies are installed:

```bash
npm install
# or
yarn install
```

Start the development server:

```bash
npm run dev
# or
yarn dev
```

### 3. Access Admin Panel

Open your browser and go to:
```
http://localhost:5173/admin
```

Default admin password: `admin123`

**⚠️ IMPORTANT: Change this password in `backend/app.py` before deploying to production!**

## Features

- **Add Projects**: Create new projects with title, description, avenue, and local image upload
- **Edit Projects**: Modify existing project details and images
- **Delete Projects**: Remove projects from the system
- **Project Avenues**: Organize projects by avenue (Club Service, Community Service, International Service, Professional Service)
- **Signature Projects**: Mark important projects as signature projects with a special badge
- **Local Image Upload**: Upload images directly from your computer (PNG, JPG, JPEG, GIF, WebP)
- **Image Preview**: See a preview of the image before saving
- **Status Management**: Mark projects as Active or Inactive
- **Password Protected**: Simple authentication to prevent unauthorized access

## Project Data Structure

Each project contains:
- `id`: Unique identifier (auto-generated)
- `title`: Project name
- `description`: Project details
- `avenue`: Project category (club, community, international, professional)
- `isSignature`: Boolean flag for signature projects
- `image`: Filename of uploaded image (stored in backend/uploads/)
- `status`: active | inactive
- `createdAt`: Timestamp of creation
- `updatedAt`: Timestamp of last update

## Data Storage

- **Projects**: Stored in `backend/projects.json` file (JSON-based storage)
- **Images**: Uploaded images stored in `backend/uploads/` directory
- **Note**: For production, consider migrating to PostgreSQL or MongoDB (see DATABASE_RECOMMENDATION.md)

## Security Notes

1. **Change the default password** in `backend/app.py`:
   ```python
   ADMIN_PASSWORD = 'your-secure-password-here'
   ```

2. For production deployment:
   - Use environment variables for sensitive data
   - Implement proper authentication (JWT tokens, OAuth, etc.)
   - Use a proper database (PostgreSQL, MongoDB, etc.)
   - Enable HTTPS
   - Add rate limiting

## API Endpoints

- `GET /api/projects` - Get all projects
- `POST /api/projects` - Add new project (requires password)
- `PUT /api/projects/<id>` - Update project (requires password)
- `DELETE /api/projects/<id>` - Delete project (requires password)
- `GET /api/health` - Health check

## Troubleshooting

**Backend not connecting?**
- Ensure Flask is running on port 5000
- Check CORS is enabled (it is by default)
- Verify no firewall is blocking the connection

**Images not loading?**
- Use full URLs (http://... or https://...)
- Ensure the image URL is publicly accessible

**Password not working?**
- Verify you're using the correct password from `backend/app.py`
- Check browser console for error messages

## File Structure

```
backend/
├── app.py                 # Flask application
├── requirements.txt       # Python dependencies
├── projects.json          # Project data storage
├── uploads/               # Uploaded project images
│   ├── 1234567890_image1.jpg
│   ├── 1234567891_image2.png
│   └── ...
└── README.md

rcrec-web/
├── src/
│   └── pages/
│       └── AdminPage.tsx  # Admin dashboard component
└── ...
```

## Supported Image Formats

- PNG (.png)
- JPEG (.jpg, .jpeg)
- GIF (.gif)
- WebP (.webp)
- Maximum file size: 16MB

## Next Steps

1. Update the admin password to something secure
2. Test adding a project through the admin panel
3. Test uploading images from your local computer
4. Integrate the projects data into your gallery or projects page
5. Consider migrating to PostgreSQL for production (see DATABASE_RECOMMENDATION.md)
6. Deploy backend and frontend to production
