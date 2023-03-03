import { CompB } from "./CompB"


const CompA = ({info}) => {

    return ( 
     <>
        <div>CompA will be here</div>
        <div>{info}</div>
        <CompB info={info}/>
    </>
    )
}

export { CompA }