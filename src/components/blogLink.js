import React from 'react'

/**
 * The BlogLink component is used to create a link to a blog in the
 * blogs page
 * 
 * properties:
 * 
 * title = [title of the blog]
 * path  = [path to blog]
 * description = [description of blog]
 */
class BlogLink extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="blogLink">
                <a href={this.props.path}>{this.props.title}</a>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default BlogLink