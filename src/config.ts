// API Configuration
// Update this URL when deploying to production

// Change this URL based on your deployment:
// - Local development: http://localhost:5000/api
// - Render production: https://racrec-api.onrender.com/api
// - Other backends: https://your-backend-url/api

const getApiUrl = () => {
    if (import.meta.env.VITE_API_URL) return import.meta.env.VITE_API_URL;
    const hostname = window.location.hostname;
    return `http://${hostname}:5000/api`;
};

export const API_BASE_URL = getApiUrl();
