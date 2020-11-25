import React, { Fragment } from 'react'
import { default as NextLink } from 'next/link'
import { Navigation, LanguageSwitcher } from 'components'
import { header } from 'styles'

const Header = ({ menu, altLangs, currentLang, isMyMainLanguage }) => (
  <Fragment>
    <header className="site-header">
      <NextLink href={isMyMainLanguage ? '/' : `/${currentLang}`} passHref prefetch>
        <a><div className="logo">Maillol-Maillet Wedding</div></a>
      </NextLink>
      <nav>
        <ul>  
          <Navigation menu={menu} />
          <LanguageSwitcher altLangs={altLangs} />
        </ul>
      </nav>
    </header>
    <style jsx global>{ header }</style>
  </Fragment>
);

export default Header;