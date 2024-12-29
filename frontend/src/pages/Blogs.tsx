import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks"

export const Blogs = () => {

    const { loading, blogs } = useBlogs();

    if(loading){
        return <div>
            Loading...
        </div>
    }

    return <div>
        <AppBar />
        <div className="flex justify-center">
            <div className="max-w-xl">
                <BlogCard
                    authorName="Surabhil S Kumar"
                    title="How an ugly single page website makes $5000 a month without affiliate marketing"
                    content="How an ugly single page website makes $5000 a month without affiliate marketing which is very surprising if you think 
                    about it"
                    publishedDate="2nd Feb 2024" />
                    <BlogCard
                    authorName="Surabhil S Kumar"
                    title="How an ugly single page website makes $5000 a month without affiliate marketing"
                    content="How an ugly single page website makes $5000 a month without affiliate marketing which is very surprising if you think 
                    about it"
                    publishedDate="2nd Feb 2024" />
                    <BlogCard
                    authorName="Surabhil S Kumar"
                    title="How an ugly single page website makes $5000 a month without affiliate marketing"
                    content="How an ugly single page website makes $5000 a month without affiliate marketing which is very surprising if you think 
                    about it"
                    publishedDate="2nd Feb 2024" />
            </div>
        </div>
    </div>
}