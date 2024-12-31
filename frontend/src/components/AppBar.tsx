import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"


export const AppBar = ({ writeButton }: { writeButton: "true" | "false" }) => {
    return <div className="border-b flex justify-between px-10 py-3">
        <Link to={"/blogs"} className="flex justify-center flex-col" >
            <div>
                Medium
            </div>
        </Link>
        <div className="flex">
            {writeButton === "true" ? <Link to={"/publish"}>
                <div className="mr-3">
                    <button className="relative inline-flex h-9 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 px-[2px] py-[2px]">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        Write✒️
                    </span>
                    </button>
                </div>
            </Link> : null}
            <div className="flex justify-center flex-col">
                <Avatar name={"User"} />
            </div>
        </div>
    </div>
}