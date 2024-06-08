    import { useState , useEffect} from "react"
    export function Bar()
    {
        const [bgcolor,setbgcolor] = useState(null);
        function ChangeColour(e)
        {
            setbgcolor(e.target.value);
        }
        useEffect(()=>{
            document.body.style.backgroundColor= bgcolor;
        },[bgcolor])
        return(
            <>
                <div className="ChangerBar">
                    <button onClick = {ChangeColour} value = "red" className="RedButton">Red</button>
                    
                    <button onClick = {ChangeColour} value = "white" className="WhiteButton">White</button>
                    
                    <button onClick = {ChangeColour} value = "blue" className="BlueButton">Blue</button>
                    
                    <button onClick = {ChangeColour} value = "green" className="GreenButton">Green</button>
                    
                    <button onClick = {ChangeColour} value = "yellow" className="YellowButton">Yellow</button>
                    
                    <button onClick = {ChangeColour} value = "purple" className="PurpleButton">Purple</button>

                    <div>{bgcolor}</div>
                </div>
            </>
        )
    }