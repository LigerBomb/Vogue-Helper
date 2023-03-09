import React from 'react'
import { useState } from 'react'

function Questions(){

   let [count, setCount] = useState(0)

    const question=[
        {
            Q:"Hello, are you ready to start stylin'?",
            Op1:"Yes",
            Op2:"No",
        },
        {
            Q:"Do you prefer mens or womens clothing?",
            Op1:"Men",
            Op2:"Women",

        },
        {
            Q:"Do you like to be dressed up or dressed down?",
            Op1:"Down",
            Op2:"Up",
        }, 
        {
            Q:"Do you like fitted clothes or baggy clothes?",
            Op1:"Fitted",
            Op2:"Baggy",
        },
        {
            Q:"Do you like colorful clothes or neutral colors?",
            Op1:"Colorful",
            Op2:"Neutral",
        },
    ]

    
  
return(
    
<div>
{
   count > 4? <h1>Thank you</h1>:
   <div>
    <h1>{question[count].Q}</h1>
    <button  onClick={() => setCount(count + 1)}>{question[count].Op1}</button>
     <button  onClick={() => setCount(count + 1)}>{question[count].Op2}</button>
   </div>


}

</div>

)
}


export default Questions;