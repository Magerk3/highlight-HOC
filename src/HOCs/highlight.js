import { Popular } from "../components/Popular"
import { New } from "../components/New"

export const highlight = (ComponentToWrap) => {
    return (props) => {
        return (
            <div>
                {props.views >= 1000
                 ? <Popular><ComponentToWrap {...props} /></Popular>
                : props.views < 100 ? <New><ComponentToWrap {...props} /> </New>
                : <ComponentToWrap {...props} />}
            </div>
            
        )
    }
}