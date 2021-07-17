import * as React from 'react'
import { Link } from 'gatsby'
import * as styles from './layout.module.scss'


const Layout = ({ pageTitle, children }) => {
    return (
        <main className={styles.container}>
            <title>{pageTitle}</title>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <h1>{pageTitle}</h1>
            {children}
        </main>
    )
}

export default Layout