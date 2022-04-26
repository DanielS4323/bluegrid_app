import { useEffect } from "react"

export const TitleName = (title) => {
    useEffect(() => {
        document.title = title
    },[])
}