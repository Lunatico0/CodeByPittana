import Link from 'next/link.js'
import React from 'react'

interface links {
  href: string;
  label: string;
}

interface navProps {
  links: links[];
  ulClassName: string;
}

const Navigation = ({ links, ulClassName }: navProps) => {
  return (
    <ul className={ulClassName}>
      {
        links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm underline-offset-2 underline text-text/60 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))
      }
    </ul>

  )
}

export default Navigation
