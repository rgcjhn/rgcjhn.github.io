import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-[8rem] sm:text-[10rem] font-extrabold text-primary-orange leading-none">
        404
      </h1>
      <p className="mt-4 text-lg text-muted">Oops! The page you’re looking for doesn’t exist.</p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-xl bg-primary-orange px-6 py-3 text-white font-semibold hover:opacity-90 transition"
      >
        Go back home
      </Link>
    </div>
  );
}
