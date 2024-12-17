import Image from 'next/image';
import SearchBar from './SearchBar';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <>
        <nav className="p-2 shadow-md bg-white flex items-center justify-between shadow-slate-300/50">
            <div className="flex-shrink-0">
                <Link href="/"> 
                <Image alt="logo" width={100} height={10} src="/bartex.png" />
                </Link>
            </div>
            <div className="flex-grow">
                <SearchBar />
            </div>
        </nav>
        <br/>
        </>
    );
};

export default Navbar;
