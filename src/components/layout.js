import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import * as styles from './layout.module.scss'


const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    return (
        <main className={styles.container}>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <p className={styles.siteTitle}>{data.site.siteMetadata.title}</p>
            <nav>
                <ul className={styles.navLinks}>
                    <li className={styles.navLinkItem}>
                        <Link className={styles.navLinkText} to="/">Home</Link>
                    </li>
                    <li className={styles.navLinkItem}>
                        <Link className={styles.navLinkText} to="/about">About</Link>
                    </li>
                    <li className={styles.navLinkItem}>
                        <Link to="/blog" className={styles.navLinkText}>
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>
            <h1 className={styles.heading}>{pageTitle}</h1>
            {children}
        </main>
    )
}

export default Layout