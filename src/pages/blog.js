import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import BlogLink from '../components/blogLink'

const Blog = () => (
    <Layout>
        <SEO title="Blog" />
        <h1>Blog</h1>
        <p>
            Check out some blog pages written by members of the NDSU CSA
        </p>
        <BlogLink 
            title="Introduction"
            path="/blog/introduction" 
            description="What is a blog?"
        />
    </Layout>
);

export default Blog;
