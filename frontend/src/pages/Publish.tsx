import { ChangeEvent, useState } from "react"
import { AppBar } from "../components/AppBar"
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { useNavigate } from "react-router-dom";

export const Publish = () => {

    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div className="text-center">
        <AppBar writeButton="false" />
        <div className="flex justify-center">
            <div className="mt-12 w-3/6">
                <textarea onChange={(e) => {
                    setTitle(e.target.value);
                }} className="block p-2 w-full h-10 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Title"></textarea>
            </div>
        </div>
        <div className="flex justify-center">
            <div className="mt-5 w-3/6">
                <TextEditor onChange={(e) => {
                    setDescription(e.target.value);
                }} />
            </div>
        </div>
        <div className="mt-5">
            <div>
                <button onClick={async() => {
                    const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                        title,
                        content: description
                    }, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                    });
                    navigate(`/blog/${response.data.id}`)
                }} type="submit" className="relative inline-flex h-9 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 px-[2px] py-[2px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Publish🎉
                </span>
                </button>
            </div>
        </div>
    </div>
}

function TextEditor({ onChange }: { onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }){
    return <div>
        <div className="mt-3">
            <textarea onChange={onChange} className="block p-2 w-full h-40 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write a blog..."></textarea>
        </div>
    </div>
}