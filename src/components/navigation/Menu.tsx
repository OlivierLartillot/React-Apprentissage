import Link from 'next/link';

export default function Menu() {
    return (
        <header className="bg-white">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex mx-3 space-x-4">
                    <Link href="/" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                        Accueil
                    </Link>
                    <Link href="/contact" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                        Contact
                    </Link>
                </div>
            </nav>
        </header>
    );
}