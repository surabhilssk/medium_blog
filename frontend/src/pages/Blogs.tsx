import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks"

export const Blogs = () => {

    const { loading, blogs } = useBlogs();

    if(loading){
        return <div className="flex justify-center mt-20">
            <div>
                <BlogSkeleton />
                <BlogSkeleton />
                <BlogSkeleton />
                <BlogSkeleton />
                <BlogSkeleton />
                <BlogSkeleton />
            </div>
        </div>
    }

    return <div>
        <AppBar writeButton="true" />
        <div className="flex justify-center">
            <div className="max-w-xl">
                {blogs.map(function(blog){
                    return <BlogCard
                    id={blog.id}
                    authorName= {blog.author.name}
                    title={blog.title}
                    content={blog.content}
                    publishedDate="2nd Feb 2024" />
                })}
            </div>
        </div>
    </div>
}