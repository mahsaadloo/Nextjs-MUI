import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React, { useTransition } from 'react'

const Header = () => {
    const translation = useTranslations('Navigation')
  return (
    <header>
        <nav>
            <Link href="/">{translation('home')}</Link>
        </nav>
    </header>
  )
}

export default Header