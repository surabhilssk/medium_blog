import { Link } from "react-router-dom"


interface BlogCardProps{
    id: string,
    authorName: string,
    title: string,
    content: string,
    publishedDate: string
}


export const BlogCard = ({authorName, title, content, publishedDate, id}: BlogCardProps) => {
    return <Link to={`/blog/${id}`}> 
        <div className=" p-4 border-b border-slate-200 pb-4 cursor-pointer">
            <div className="flex">
                <div>
                    <Avatar name={authorName || "Anonymous"} />
                </div>
                <div className="font-extralight pl-2 text-sm flex justify-center flex-col"> {authorName}</div>
                <div className="text-slate-400 pl-2">
                    &#128900;
                </div>
                <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
                    {publishedDate}
                </div>
            </div>
            <div className="text-xl font-semibold pt-2">
                {title}
            </div>
            <div className="text-md font-thin">
                {content.length > 100 ? content.slice(0, 100) + "..." : content}
            </div>
            <div className="mt-3 p-1 bg-slate-100 rounded-full w-fit">
                <div className="text-sm text-slate-500 font-thin px-2">
                    {`${Math.ceil(content.length / 100)} min read`}
                </div>
            </div>
        </div>
    </Link>
}

export function Avatar({ name }: { name: string}){
    return  <div className={`relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-300 rounded-full`}>
        <span className="font-medium text-gray-600 text-base">{name[0]}</span>
    </div>
    
}