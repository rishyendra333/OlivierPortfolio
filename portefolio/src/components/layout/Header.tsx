import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold">
              Alan Turing
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400">
              About
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400">
              Projects
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400">
              Experience
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400">
              Contact
            </Link>
          </nav>
          <div className="flex md:hidden">
            <button className="p-2 rounded-md text-foreground hover:bg-gray-100 dark:hover:bg-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}