import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className=" text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
         z
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="hover:bg-gray-700 px-3 py-2 rounded-md">
                Home
              </Link>
              <Link href="/about" className="hover:bg-gray-700 px-3 py-2 rounded-md">
                About
              </Link>
              <Link href="/projects" className="hover:bg-gray-700 px-3 py-2 rounded-md">
                Projects
              </Link>
              <Link href="#portfolio" className="hover:bg-gray-700 px-3 py-2 rounded-md">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
