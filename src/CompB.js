import { CompC } from "./CompC"
import { UserContext } from "./UserContext"

const CompB = (props) => {
const {info} = props
    return ( 
     <>
        <div>CompB will be here</div>
        <UserContext>
        <CompC info={info}/>
        </UserContext>
       
    </>
    )
}

export { CompB }