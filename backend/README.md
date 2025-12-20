# RACREC Admin Backend

Simple Flask backend for managing projects.

## Setup

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Run the server:
```bash
python app.py
```

The server will run on `http://localhost:5000`

## API Endpoints

- `GET /api/projects` - Get all projects
- `POST /api/projects` - Add a new project (requires password)
- `PUT /api/projects/<id>` - Update a project (requires password)
- `DELETE /api/projects/<id>` - Delete a project (requires password)
- `GET /api/health` - Health check

## Configuration

Change the `ADMIN_PASSWORD` in `app.py` to a secure password.

## Data Storage

Projects are stored in `projects.json` file in the same directory.
