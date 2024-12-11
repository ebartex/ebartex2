import Image from 'next/image';
import SearchBar from './SearchBar';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="p-2 border-b border-sky-600 bg-white flex items-center justify-between">
            <div className="flex-shrink-0">
                <Link href="/"> 
                <Image alt="logo" width={100} height={10} src="/bartex.png" />
                </Link>
            </div>
            <div className="flex-grow">
                <SearchBar />
            </div>
        </nav>
    );
};

export default Navbar;
