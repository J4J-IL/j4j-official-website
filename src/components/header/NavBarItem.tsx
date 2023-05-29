import Link from 'next/link';
import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{ href: string }>;

export const NavBarItem = ({ href, children }: Props) => (
  <li className="border-b-2 md:border-none">
    <Link
      href={href}
      className="md:bg-transparent block rounded px-4 py-2 text-white dark:text-white md:p-0"
      aria-current="page"
      rel="page"
    >
      {children}
    </Link>
  </li>
);
