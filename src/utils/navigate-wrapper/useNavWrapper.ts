import React from "react"
import { useNavigate } from "react-router-dom"

export function useNavWrapper() {
    const navigate = useNavigate();

    return ((path: string) => {
        localStorage.setItem("last", path);
        navigate(path);
    })
}

