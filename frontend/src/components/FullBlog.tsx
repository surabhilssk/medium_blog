import { Blog } from "../hooks"
import { AppBar } from "./AppBar"
import { Avatar } from "./BlogCard"

export const FullBlog = ({ blog }:{ blog: Blog }) => {
    return <div>
            <AppBar writeButton="true" />
            <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 max-w-screen-xl pt-20">
                <div className="col-span-8">
                    <div className="text-5xl font-semibold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 mt-2">
                        Posted on 30 December 2024
                    </div>
                    <div className="pt-4">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4 pl-9">
                    <div className="text-slate-600">
                        Author
                    </div>
                    <div className="flex pt-1">
                        <div className="flex justify-center flex-col pr-3">
                            <Avatar name={blog.author.name || "Anonymous"} />
                        </div>
                        <div>
                            <div className="text-xl font-bold">
                                {blog.author.name || "Anonymous"}
                            </div>
                            <div className="text-slate-500">
                                Random catch phrase about the author's ability to grab the users attention
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}