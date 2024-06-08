import { useState } from "react"
export function Para()
{
    const [totalwords ,settotalwords] = useState(0);
    const [totalPara , setTotalPara] = useState('');
    function TotalWords(e)
    {
        settotalwords(e.target.value);
    }
    function TotalPara()
    {
        const Random = 'abcdefghijklmnopqrstuvwxyz123456789'
        let fin = ''
        for(let i = 0 ; i< totalwords ;i++)
            {
                let temp = '';
                for(let  i =0 ;i<Math.floor(Math.random() * 10);i++)
                    {
                        temp = temp+Random[Math.floor(Math.random() * 10)];
                    }
                fin =fin+" " + temp;
            }
        setTotalPara(fin);
    }
    return (
        <>
            <div>
                <h1>ParaGenerator</h1>
                <input type = "text" onChange = {TotalWords}></input>
                <button type = "submit" onClick = {TotalPara}>Submit</button>
                <p>{totalPara}</p>
            </div>
        </>
    )
}