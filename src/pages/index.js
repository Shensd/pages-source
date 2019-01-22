import React from 'react'

import IndexLayout from '../components/layout/indexLayout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
    <IndexLayout>
        <SEO title="Home" />
        <h1>NDSU Cybersecurity Student Association Homepage</h1>
        <p>We are a group of individuals that share a common interest of creating technology, and breaking it.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, margin: `0 auto`}}>
            <Image />
        </div>
    </IndexLayout>
);

export default IndexPage;
