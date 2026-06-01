'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/',             label: 'Home' },
  { href: '/about',        label: 'About' },
  { href: '/skills',       label: 'Skills' },
  { href: '/projects',     label: 'Projects' },
  { href: '/hobbies',      label: 'Hobbies' },
  { href: '/education',    label: 'Education' },
  { href: '/achievements', label: 'Awards' },
  { href: '/resume',       label: 'Resume' },
  { href: '/contact',      label: 'Contact' },
  { href: '/gallery',      label: 'Gallery' },
]

export default function NavBar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav>
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          L<span>.</span>
        </Link>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={pathname === href ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="nav-mobile-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}
