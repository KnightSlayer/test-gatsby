import * as React from 'react'
import Layout from 'src/components/layout'

const IndexPage = () => {
    const [count, setCount] = React.useState(0);
    return (
        <Layout pageTitle="Home Page">
            <p>I'm making this by following the Gatsby Tutorial.</p>

            <button onClick={() => setCount(c => c + 1)}> I'm clicked {count} times </button>
        </Layout>
    )
}

export default IndexPage