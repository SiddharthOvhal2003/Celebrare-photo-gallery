
import Gallery from './components/Gallery';

function App() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Photo Gallery
          </h1>

          <p className="mt-2 text-slate-600">
            Explore beautiful photos from the Picsum collection.
          </p>
        </header>

        <Gallery />
      </div>
    </main>
  );
}

export default App;
