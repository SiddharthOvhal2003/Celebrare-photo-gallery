
function PhotoCard({ photo, isFavorite, onToggleFavorite }) {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <img
        src={photo.download_url}
        alt={`Photo by ${photo.author}`}
        className="h-64 w-full object-cover"
        loading="lazy"
      />

      <div className="flex items-center justify-between gap-3 p-4">
        <p className="truncate font-medium text-slate-800">
          {photo.author}
        </p>

        <button
          type="button"
          onClick={() => onToggleFavorite(photo.id)}
          aria-label={
            isFavorite
              ? `Remove ${photo.author} from favourites`
              : `Add ${photo.author} to favourites`
          }
          aria-pressed={isFavorite}
          className={`shrink-0 rounded-full p-2 transition-colors ${
            isFavorite
              ? 'text-rose-600'
              : 'text-slate-500 hover:bg-rose-50 hover:text-rose-600'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={isFavorite ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
          </svg>
        </button>
      </div>
    </article>
  );
}

export default PhotoCard;
