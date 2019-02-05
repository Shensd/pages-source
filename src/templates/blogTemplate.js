import React from "react"
import { graphql } from 'gatsby'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'

export default function Template({
    data
}) {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;

    return(
        <Layout>
            <SEO title="Blog" />
            <h1>{frontmatter.title}</h1>
            <h3>{frontmatter.author} - {frontmatter.date}</h3>
            <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html : html }}
                >
            </div>
        </Layout>
    )
}

// gatsby automatically runs this and passes what it returns to `data` above
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
        author
      }
    }
  }
`