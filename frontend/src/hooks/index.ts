import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../../config";

interface Blogs{
    "author": {
        "name": string
    },
    "title": string,
    "content": string,
    "id": string,
}

export interface Blog{
    "author": {
        "name": string
    },
    "title": string,
    "content": string,
    "id": string
}

export const useBlog = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(function(response){
                setBlog(response.data.blog);
                setLoading(false);
            })
    },[id])

    return {
        loading,
        blog
    }
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blogs[]>([]);

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(function(response){
                setBlogs(response.data.blogs);
                setLoading(false);
            })
    },[])

    return {
        loading,
        blogs
    }
}