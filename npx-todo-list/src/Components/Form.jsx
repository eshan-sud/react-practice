import { useState } from "react"


export const Form = () => {
    const [userName, setUserName] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        
    }
    return (
        <>
            <form className="flex align-middle justify-center bg-slate-400 p-4" onSubmit="handleSubmit">
                <div>
                    <label className="text-xl" htmlFor="name"> Name : </label>
                    <input className="border-dashed border-black border-3 rounded-lg" id="name" title="name" type="text" value={userName} onChange={(event) => {setUserName(event.target.value)}} />
                </div>
                <button type="submit"> Submit </button>
            </form>
        </>
    )
}