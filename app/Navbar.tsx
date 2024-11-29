"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaBug } from 'react-icons/fa';
import classNames from 'classnames';

const Navbar = () => {

  const currentPath = usePathname();

  const navLinks = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issues', href: '/issues' },
  ];

  return (
    <nav className="flex h-16 items-center border-b border-gray-300 bg-white px-6 shadow-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-2 text-indigo-600">
        <FaBug size={24} />
        <Link href="/">
          <span className="text-lg font-bold tracking-wide">Trace</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="ml-auto flex space-x-8">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={classNames({
                'text-indigo-600': link.href === currentPath,
                ' text-gray-600': link.href !== currentPath,
                'hover:text-indigo-600 font-medium transition-colors ': true
              })}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
