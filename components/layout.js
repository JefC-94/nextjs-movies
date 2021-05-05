import React from 'react'
import Link from 'next/link';

function Layout({children, pageTitle}) {
    return (
        <>
        <header>
            <h1>{pageTitle}</h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/"><a>Home</a></Link>
                    </li>
                    <li>
                        <Link href="/about"><a>About</a></Link>
                    </li>
                </ul>
            </nav>
        </header>
        <main>{children}</main>
        <footer>© Jef 2021</footer>
        </>
    )
}

export default Layout
