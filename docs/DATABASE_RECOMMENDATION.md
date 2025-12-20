# Database Recommendation for RACREC Admin System

## Current Setup
Currently using **JSON file storage** (`projects.json`) - suitable for small projects and development.

## Recommended Databases for Production

### 1. **PostgreSQL** (Recommended for Scalability)
**Best for:** Medium to large projects, complex queries, reliability

**Advantages:**
- Robust relational database
- ACID compliance (data integrity)
- Excellent for complex queries
- Free and open-source
- Great for team collaboration
- Supports JSON data types

**Setup:**
```bash
# Install PostgreSQL
# Then in Flask, use:
pip install psycopg2-binary sqlalchemy

# Connection string:
# postgresql://username:password@localhost:5432/racrec_db
```

**Schema Example:**
```sql
CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  avenue VARCHAR(100) NOT NULL,
  is_signature BOOLEAN DEFAULT FALSE,
  status VARCHAR(50) DEFAULT 'active',
  image_filename VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_avenue ON projects(avenue);
CREATE INDEX idx_signature ON projects(is_signature);
```

---

### 2. **MongoDB** (Recommended for Flexibility)
**Best for:** Rapid development, flexible schema, document-based data

**Advantages:**
- No schema required (flexible)
- Easy to scale horizontally
- Great for JSON-like data
- Good for rapid prototyping
- Cloud hosting available (MongoDB Atlas)

**Setup:**
```bash
pip install pymongo

# Connection string:
# mongodb://username:password@localhost:27017/racrec_db
```

**Document Example:**
```json
{
  "_id": ObjectId("..."),
  "title": "Project Name",
  "description": "...",
  "avenue": "education",
  "isSignature": true,
  "status": "active",
  "imageFilename": "...",
  "createdAt": ISODate("2025-01-01T00:00:00Z"),
  "updatedAt": ISODate("2025-01-01T00:00:00Z")
}
```

---

### 3. **SQLite** (Recommended for Small/Medium Projects)
**Best for:** Simple projects, single-user, no server needed

**Advantages:**
- Zero configuration
- File-based (easy backup)
- Good for development and testing
- Suitable for small to medium projects
- No separate server needed

**Setup:**
```bash
pip install sqlalchemy

# Connection string:
# sqlite:///racrec.db
```

---

### 4. **Firebase/Firestore** (Recommended for Rapid Deployment)
**Best for:** Quick deployment, real-time updates, no backend management

**Advantages:**
- Serverless (no backend management)
- Real-time database
- Built-in authentication
- Automatic scaling
- Easy integration with frontend

**Setup:**
```bash
pip install firebase-admin

# Use Google Cloud credentials
```

---

## Migration Path from JSON to Database

### Step 1: Install Database Package
```bash
# For PostgreSQL
pip install psycopg2-binary sqlalchemy flask-sqlalchemy

# For MongoDB
pip install pymongo

# For SQLite
pip install sqlalchemy flask-sqlalchemy
```

### Step 2: Update requirements.txt
```txt
Flask==2.3.3
Flask-CORS==4.0.0
Flask-SQLAlchemy==3.0.5
psycopg2-binary==2.9.7
python-dotenv==1.0.0
```

### Step 3: Create Database Models
```python
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class Project(db.Model):
    __tablename__ = 'projects'
    
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=False)
    avenue = db.Column(db.String(100), nullable=False)
    is_signature = db.Column(db.Boolean, default=False)
    status = db.Column(db.String(50), default='active')
    image = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
```

### Step 4: Update Flask App
```python
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'sqlite:///racrec.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

with app.app_context():
    db.create_all()
```

### Step 5: Update API Endpoints
```python
@app.route('/api/projects', methods=['GET'])
def get_projects():
    projects = Project.query.all()
    return jsonify([{
        'id': p.id,
        'title': p.title,
        'description': p.description,
        'avenue': p.avenue,
        'isSignature': p.is_signature,
        'status': p.status,
        'image': p.image,
        'createdAt': p.created_at.isoformat(),
        'updatedAt': p.updated_at.isoformat()
    } for p in projects])
```

---

## Comparison Table

| Feature | JSON | SQLite | PostgreSQL | MongoDB | Firebase |
|---------|------|--------|------------|---------|----------|
| Setup Complexity | ⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐ |
| Scalability | ❌ | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Query Power | ⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| Cost | Free | Free | Free | Free/Paid | Free/Paid |
| Best For | Dev | Small | Medium/Large | Flexible | Quick Deploy |

---

## Recommendation for RACREC

**For Now:** Continue with JSON (current setup) for development

**For Production:** Use **PostgreSQL** because:
- ✅ Scalable and reliable
- ✅ Great for team collaboration
- ✅ Excellent query capabilities
- ✅ Free and open-source
- ✅ Easy to backup and maintain
- ✅ Good for future expansion

**Alternative:** Use **MongoDB** if you prefer:
- Flexible schema
- Easier horizontal scaling
- Document-based approach

---

## Environment Variables (.env)

```env
# For PostgreSQL
DATABASE_URL=postgresql://user:password@localhost:5432/racrec_db

# For SQLite
DATABASE_URL=sqlite:///racrec.db

# For MongoDB
MONGODB_URI=mongodb://user:password@localhost:27017/racrec_db

# Admin
ADMIN_PASSWORD=your-secure-password-here
UPLOAD_FOLDER=uploads
```

---

## Next Steps

1. **Continue development** with current JSON setup
2. **When ready for production:**
   - Choose PostgreSQL or MongoDB
   - Set up database
   - Update Flask app with SQLAlchemy
   - Migrate JSON data to database
   - Deploy to production

3. **Consider adding:**
   - User authentication
   - Image optimization
   - Caching layer (Redis)
   - Database backups
   - Monitoring and logging

---

## Resources

- **PostgreSQL**: https://www.postgresql.org/
- **MongoDB**: https://www.mongodb.com/
- **SQLAlchemy**: https://www.sqlalchemy.org/
- **Firebase**: https://firebase.google.com/
