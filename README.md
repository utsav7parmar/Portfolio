# Modern Portfolio

This workspace contains a complete modern portfolio scaffold.

## Stack
- Frontend: React, TypeScript, Tailwind CSS, Framer Motion, Vite
- Backend: Django, Django REST Framework, django-cors-headers
- Database: PostgreSQL by default (MongoDB option available with Djongo)

## Folder layout
- `frontend/` — React portfolio UI
- `backend/` — Django REST API for contact form and resume submission

## Setup

### Frontend
1. Open `frontend/`
2. Install packages: `npm install`
3. Start dev server: `npm run dev`

### Backend
1. Open `backend/`
2. Create Python venv and activate it
3. Install dependencies: `pip install -r requirements.txt`
4. Copy `.env.example` to `.env` and update values
5. Run migrations: `python manage.py migrate`
6. Start backend: `python manage.py runserver`

## Notes
- Place your pictures into `frontend/public/images/` and update `src/data/portfolioData.ts` with filenames.
- The contact form sends feedback and optional resume files to the configured `CONTACT_EMAIL`.
- `Skills` page includes both skill categories and certifications.
- `Journal` page combines extra-curricular activities and blog highlights.
