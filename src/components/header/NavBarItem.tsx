import Link from 'next/link';
import type { ReactNode } from 'react';

export const NavBarItem = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => (
  <li
    className="border-b-2 md:border-none
"
  >
    <Link
      href={href}
      className="block rounded px-4 py-2 text-white dark:text-white md:bg-transparent md:p-0"
      aria-current="page"
      rel="page"
    >
      {children}
    </Link>
  </li>
);
