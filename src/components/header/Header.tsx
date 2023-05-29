'use client';
import Image from 'next/image';
import { NavBarItem } from './NavBarItem';
import Link from 'next/link';
import { useState } from 'react';
import { HamburgerIcon } from '../icons';

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="flex flex-row-reverse flex-wrap items-center justify-between py-4">
          <Link href="/">
            <Image
              src="/assets/logo.png"
              width="156"
              height="59"
              // className="mr-3"
              alt="J4J Logo"
            />
          </Link>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ml-3 inline-flex items-center rounded-lg p-2 text-sm focus:outline-none focus:ring-2 md:hidden"
          >
            <span className="sr-only">Open main menu</span>
            <HamburgerIcon className="h-6 w-6" />
          </button>
          {/* <div className="w-full md:block md:w-auto" id="navbar-default"> */}
          <div
            className={`${open ? 'block' : 'hidden'} w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul
              className="border-gray-100 dark:border-gray-700 mt-4 flex flex-col rounded-lg border p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:space-x-reverse md:border-0 md:p-0"
              style={{ direction: 'rtl' }}
            >
              <NavBarItem href="#">עלינו</NavBarItem>
              <NavBarItem href="#">פנאי</NavBarItem>
              <NavBarItem href="#">דרושים</NavBarItem>
              <NavBarItem href="#">העשרות</NavBarItem>
              <NavBarItem href="#">קורסים</NavBarItem>
              <NavBarItem href="#">פרויקטים</NavBarItem>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
