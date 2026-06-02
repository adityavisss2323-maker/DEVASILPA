    import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#080604] px-6 text-center text-[#f8f1df]">
      <h1 className="text-7xl font-bold text-[#d6b15c]">404</h1>

      <p className="mt-4 text-2xl">Masterpiece Not Found</p>

      <p className="mt-3 max-w-xl text-[#d8ccb2]">
        The page or sculpture you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-full bg-[#d6b15c] px-7 py-3 font-medium text-black"
      >
        Back Home
      </Link>
    </main>
  );
}