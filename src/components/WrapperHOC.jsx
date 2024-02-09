import { useState } from "react";

const WrapperHOC = (WrapperFunciton)=>{
    function WrapperHOC(){

        const [counter, setCounter] = useState(0)

        const handleCounter = ()=>{
            setCounter(prevCount => prevCount+1)
        }

        return(
            <WrapperFunciton counter={counter} handleCounter={handleCounter}/>
        )
    }

    return WrapperHOC;
}

export default WrapperHOC;