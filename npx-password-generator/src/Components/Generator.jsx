import React, { useCallback, useEffect, useState, useRef } from 'react'
import { Checkbox } from './Checkbox'
import { Slider } from './Slider'

export const Generator = () => {
    const [length, setLength] = useState(6)
    const [numbersAllowed, setNumberAllowed] = useState(false)
    const [charactersAllowed, setCharactersAllowed] = useState(false)
    const [password, setPassword] = useState("")
    const copyContent = useCallback(() =>{
        passwordFieldReference.current?.select()
        window.navigator.clipboard.writeText(password)
    }, [password])

    const generatePassword = () => {
        let password = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (numbersAllowed) str += "0123456789"
        if (charactersAllowed) str += "!@#$%^&*()[];'/.,<>_+-}{~`\""
        for (let i = 0; i <= length; i++) password += str.charAt(Math.floor(Math.random() * str.length + 1))
        setPassword(password)
    }
    const memoizedFunction = useCallback(generatePassword, [length, numbersAllowed, charactersAllowed, setPassword])
    useEffect(() => {generatePassword()}, [length, numbersAllowed, charactersAllowed, setPassword])
    const passwordFieldReference = useRef(null)
    return (
        <>
            <h3 className="w-full text-center p-20 text-6xl text-white font-bold"> Password Generator! </h3>
            <div className="text-center absolute left-1/4 bottom-1/4 border-4 rounded-full m-auto p-5 w-1/2 bg-black">
                <div className="p-5">
                    <input id="passwordField" className="p-2 w-96 rounded-l-3xl" type="text" placeholder="password" value={password} readOnly ref={passwordFieldReference} />
                    <button className="p-2 bg-blue-500 rounded-r-3xl font-bold text-white" onClick={copyContent}> Copy </button>
                </div>
                <div className="flex justify-center items-center">
                    <Slider state={length} setState={setLength} />
                    <Checkbox name="Numbers" state={numbersAllowed} setState={setNumberAllowed} />
                    <Checkbox name="Characters" state={charactersAllowed} setState={setCharactersAllowed} />
                </div>
            </div>
        </>
    )
}