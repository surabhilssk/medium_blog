import { SignupInput } from "@surabhilssk/medium-common"
import { ChangeEvent, useState } from "react"
import { Link } from "react-router-dom"



export const Auth = ({type}: {type: "signup" | "signin"}) => {
    const [postInputs, setPostInputs] =  useState<SignupInput>({
        name: "",
        username: "",
        password: ""
    })
    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div className="px-10">
                    <div className="text-3xl font-extrabold">
                        {type === "signup" ? "Create an account" : "Welcome back!"}
                    </div>
                    <div className="text-slate-400 text-center">
                        {type === "signup" ? "Already have an account?" : "Don't have an account?"}
                        <Link className="pl-1 underline" to={type === "signup" ? "/signin" : "/signup"}>{type === "signup" ? "Login" : "Sign up"}</Link>
                    </div>
                </div>
                <div>
                    <LabelledInputs label="Name" placeholder="Enter your name" onChange={(e)=>{
                        setPostInputs({
                            ...postInputs,
                            name: e.target.value
                        })
                    }} />
                    <LabelledInputs label="Username" placeholder="user@email.com" onChange={(e)=>{
                        setPostInputs({
                            ...postInputs,
                            username: e.target.value
                        })
                    }} />
                    <LabelledInputs label="Password" placeholder="Enter your password" type="password" onChange={(e)=>{
                        setPostInputs({
                            ...postInputs,
                            name: e.target.value
                        })
                    }} />
                    <button type="button" className="w-full mt-8 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{type === "signup" ? "Sign up" : "Signin"}</button>
                </div>
            </div>
        </div>
    </div>
}

interface LabelledInputType{
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string
}
function LabelledInputs({label, placeholder, type, onChange}: LabelledInputType){
    return <div className="mt-2">
    <label className="block mb-1 text-sm font-medium text-gray-900">{label}</label>
    <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
</div>
}