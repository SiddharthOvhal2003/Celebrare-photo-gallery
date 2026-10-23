Celebrare Photo Gallery
A responsive photo gallery built with React, Vite, and Tailwind CSS. The app fetches photos from the Picsum Photos API, lets users search by author, and saves favourite photo IDs in local storage.
Features
- Fetches 30 photos from the Picsum Photos API when the gallery loads.
- Displays a loading indicator while photos are being fetched.
- Displays an error message if the request fails.
- Responsive photo grid: one column on mobile, two on tablet-sized screens, and four on larger screens.
- Real-time author search using the photos already fetched; searching does not make another API request.
- Favourite photos can be added or removed with the heart button.
- Favourites persist across page refreshes using localStorage.
Tech Stack
- React
- Vite
- Tailwind CSS
- JavaScript
- Picsum Photos API
- React Hooks: useEffect, useState, useReducer, useCallback, and useMemo
Getting Started
Prerequisites
- Node.js and npm installed on your machine.
- Git installed if you want to clone or push the repository.
Installation
1. Clone the repository:
   git clone <YOUR_GITHUB_REPOSITORY_URL>
2. Open the project directory:
   cd celebrare-photo-gallery
3. Install dependencies:
   npm install
4. Start the development server:
   npm run dev
5. Open the local URL shown in the terminal.
Production Build
Create a production build:
npm run build
Preview the production build locally:
npm run preview
API
The app fetches photos from:

https://picsum.photos/v2/list?limit=30

Each photo includes an ID, author, and image URL.
Implementation Notes
- useFetchPhotos custom hook: Fetches the photo data and exposes photos, loading, and error.
- useReducer and favoritesReducer: Manage adding and removing favourite photo IDs.
- localStorage: Persists favourites between page refreshes.
- useCallback: Memoizes the search input handler so its function identity remains stable between renders.
- useMemo: Memoizes the filtered photo list and recalculates it when the fetched photos or search term changes.
Project Structure
src/
├── components/
│   ├── Gallery.jsx
│   └── PhotoCard.jsx
├── hooks/
│   └── useFetchPhotos.js
├── reducers/
│   └── favoritesReducer.js
├── App.jsx
├── index.css
└── main.jsx
Assignment
Built as a React Photo Gallery internship assignment for Celebrare.