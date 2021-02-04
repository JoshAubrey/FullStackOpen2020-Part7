import React, { useRef } from 'react'
import Togglable from './Togglable'
import BlogForm from './BlogForm'
import BlogListItem from './BlogListItem'

const BlogList = ({blogs, currentUser, handleCreateBlog, handleLikeBlog, handleDeleteBlog}) => {
    const blogFormRef = useRef()

    return (
        <div>

            <Togglable buttonLabel='Add new' ref={blogFormRef}>
                <BlogForm handleCreateBlog={handleCreateBlog}/>
            </Togglable>

            {blogs.map(blog =>
                <BlogListItem 
                    key={blog.id} 
                    blog={blog} 
                    handleLikeBlog={handleLikeBlog} 
                    handleDeleteBlog={handleDeleteBlog} 
                    currentUser={currentUser}
                />
            )}
        </div>
    )
}

export default BlogList