import { useEffect} from "react"

export const ChangeTitleName = (title) => {
    useEffect(() => {
        document.title = title
    },[])
}




