import React from 'react'
import { Link, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'


const IndexPage = () => (
    <StaticQuery
        query={graphql`
            query {
                imgSkimask: file(relativePath: { eq: "csa-skimask.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 300) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `}
        render={
            (data) => (
                <Layout>
                    <SEO title="Home" />
                    <h1>Hello</h1>
                    <p>Welcome to the NDSU Cyber Security Student Association Homepage</p>
                    <p>We like to have fun here.</p>
                    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                        <Img fluid={data.imgSkimask.childImageSharp.fluid} />
                    </div>
                    <Link to="/about/">About</Link>
                </Layout>
            )
        }
    />
)

export default IndexPage
