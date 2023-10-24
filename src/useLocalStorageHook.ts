import { useEffect, useState } from "react";

// store all ur data here
export function useLocalStorage<T>(key: string, initialValue: T | (() => T)){
    const [value, setValue] = useState<T>(() => {
        //check if the value is already present in the localStorage
        const jsonValue = localStorage.getItem(key)

        if(jsonValue == null){
            if(typeof initialValue === "function"){
                return (initialValue as () => T)()
            }else{
                return initialValue
            }

        }else{
            return JSON.parse(jsonValue)
        }
    })
    //useEffect save our data to local storage every time its value changes
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    })

    return [value, setValue] as [T, typeof setValue]
}