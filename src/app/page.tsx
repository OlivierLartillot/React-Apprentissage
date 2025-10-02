import Menu from '../components/navigation/Menu';

import Gallery from '../components/Gallery';
import Categories from '../components/Categories';
export default function Home() {
  return (
    <>
      <Menu />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Test</h1>
          <Gallery />
          <Categories />
      </div>
    </>
  );
}
