import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from 'src/components/layout'

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <StaticImage src="../images/me.jpg" alt="My Photo"/>
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        </Layout>
    )
}

export default AboutPage