
import { useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import useFetchPhotos from '../hooks/useFetchPhotos';
import favoritesReducer from '../reducers/favoritesReducer';
import PhotoCard from './PhotoCard';

function getInitialFavorites() {
  try {
    const savedFavorites = localStorage.getItem('favorites');

    if (!savedFavorites) {
      return [];
    }

    const parsedFavorites = JSON.parse(savedFavorites);

    return Array.isArray(parsedFavorites)
      ? parsedFavorites.filter((id) => typeof id === 'string')
      : [];
  } catch {
    return [];
  }
}

function Gallery() {
  const { photos, loading, error } = useFetchPhotos();

  const [searchTerm, setSearchTerm] = useState('');

  const [favorites, dispatch] = useReducer(
    favoritesReducer,
    undefined,
    getInitialFavorites
  );

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleSearchChange = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  const filteredPhotos = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(query)
    );
  }, [photos, searchTerm]);

  function handleToggleFavorite(photoId) {
    dispatch({
      type: 'TOGGLE_FAVORITE',
      payload: photoId,
    });
  }

  if (loading) {
    return (
      <div className="flex min-h-64 items-center justify-center" role="status">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-purple-600" />
        <span className="ml-3 text-slate-600">Loading photos...</span>
      </div>
    );
  }

  if (error) {
    return (
      <p className="rounded-lg bg-red-50 p-4 text-red-700" role="alert">
        Failed to load photos: {error}
      </p>
    );
  }

  return (
    <section>
      <div className="mb-6">
        <label
          htmlFor="photo-search"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Search photos by author
        </label>

        <input
          id="photo-search"
          type="search"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Enter an author's name..."
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
        />
      </div>

      <p className="mb-4 text-sm text-slate-600" aria-live="polite">
        Showing {filteredPhotos.length} of {photos.length} photos
      </p>

      {filteredPhotos.length === 0 ? (
        <p className="rounded-lg bg-white p-8 text-center text-slate-600">
          No photos found for "{searchTerm}".
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredPhotos.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isFavorite={favorites.includes(photo.id)}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Gallery;
