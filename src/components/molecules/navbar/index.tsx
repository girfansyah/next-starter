import Link from 'next/link';
import { BiLogoGithub } from 'react-icons/bi';

const Navbar = () => {
  return (
    <header>
      <div className='px-3 py-6'>
        <div className='max-w-screen-lg mx-auto'>
          <div className='flex justify-between items-center gap-y-2'>
            <Link
              href='/'
              className='sm:text-lg text-xl font-semibold text-gray-700'
            >
              {' '}
              Next.JS Boilerplate
            </Link>
            <ul className='flex space-x-4'>
              <Link
                href='https://github.com/girfansyah/next-starter'
                target='_blank'
                rel='noopener'
              >
                <BiLogoGithub size={32} className='text-gray-500' />
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
