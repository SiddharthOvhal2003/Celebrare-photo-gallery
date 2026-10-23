# Celebrare Photo Gallery

A responsive photo gallery built with **React, Vite, and Tailwind CSS**. The application fetches photos from the Picsum Photos API, allows users to search by author, and saves favourite photo IDs in local storage.

## Features

- Fetches 30 photos from the Picsum Photos API when the gallery loads.
- Displays a loading indicator while photos are being fetched.
- Displays an error message if the API request fails.
- Responsive photo grid:
  - One column on mobile devices.
  - Two columns on tablet-sized screens.
  - Four columns on larger screens.
- Real-time author search using the photos already fetched, without additional API requests.
- Add or remove favourite photos using the heart button.
- Persists favourite photos across page refreshes using `localStorage`.

## Tech Stack

- React
- Vite
- Tailwind CSS
- JavaScript
- Picsum Photos API
- React Hooks:
  - `useEffect`
  - `useState`
  - `useReducer`
  - `useCallback`
  - `useMemo`

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- Git (required to clone or push the repository)

### Installation

**1. Clone the repository**

Replace the placeholder with your actual GitHub repository URL.

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

**2. Navigate to the project directory**

```bash
cd celebrare-photo-gallery
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open the application**

Open the local URL displayed in your terminal.

## Production Build

To create a production build, run:

```bash
npm run build
```

To preview the production build locally, run:

```bash
npm run preview
```

## API

The application fetches 30 photos from the following endpoint:

[https://picsum.photos/v2/list?limit=30](https://picsum.photos/v2/list?limit=30)

Each photo contains information such as its ID, author, and image URL.

## Implementation Details

### Custom Hook: `useFetchPhotos`

Fetches photos from the Picsum Photos API and returns three values:

- `photos` — the fetched photo data.
- `loading` — indicates whether the request is in progress.
- `error` — contains an error message if the request fails.

### Favourite Management: `useReducer`

The `favoritesReducer` manages adding and removing favourite photo IDs. This keeps favourite-state updates organized in a single reducer.

### Persistence: `localStorage`

Favourite photo IDs are saved in `localStorage`, allowing them to remain available after a page refresh.

### `useCallback`

Memoizes the search input handler so its function reference remains stable between renders.

### `useMemo`

Memoizes the filtered photo list and recalculates it when the fetched photos or search term changes.

## Project Structure

```text
celebrare-photo-gallery/
├── public/
├── src/
│   ├── components/
│   │   ├── Gallery.jsx
│   │   └── PhotoCard.jsx
│   ├── hooks/
│   │   └── useFetchPhotos.js
│   ├── reducers/
│   │   └── favoritesReducer.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Assignment

Built as a React Photo Gallery internship assignment for **Celebrare**.