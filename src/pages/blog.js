import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import BlogLink from '../components/blogLink'

const Blog = () => (
    <StaticQuery
        query={graphql`{
            allMarkdownRemark(
              sort: { order: DESC, fields: [frontmatter___date] }
              limit: 1000
            ) {
              edges {
                node {
                  frontmatter {
                    date
                    path
                    title
                    author
                    description
                  }
                }
              }
            }
          }`}
        render={(data) => (
            <Layout>
                <SEO title="Blog" />
                <h1>Blog</h1>
                <p>
                    Check out some blog pages written by members of the NDSU CSA
                </p>
                {
                    data.allMarkdownRemark.edges.map((blog) => (
                        <BlogLink
                            title={blog.node.frontmatter.title}
                            path={blog.node.frontmatter.path}
                            description={blog.node.frontmatter.description}
                        />
                    ))
                }
            </Layout>
        )}
    />
);

export default Blog;
