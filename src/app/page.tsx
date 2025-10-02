import Link from 'next/link';

import Gallery from '../components/Gallery';
import Categories from '../components/Categories';
export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Test</h1>
        <Gallery />
      <Categories />
      <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">
        Contact
      </Link>
    </div>
  );
}
