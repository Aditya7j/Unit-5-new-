import { useState } from "react";

export function Counter(){
    const [counter,setCounter] =useState(0);
    
    const addchange = (value) =>{
        setCounter(counter+value)  
    }
    
    function changecolor(){
        if(counter%2===0){
            return "green"
        }
        else{
            return "red"
        }
    }
    

    return(
        <div>
            
            
            <h1 style={{color:changecolor()}}>Counter:{counter}</h1>
            <button className="abc" onClick={()=>{addchange(1)}}>Increment</button>

            <button className="bbc" onClick={()=>{addchange(-1)

                if(counter<=0){
                    setCounter(0)
                }
            }}>Decrement</button>
            <button className="ccc" onClick={()=>{
                setCounter(counter*2)
                
            }}>Double</button>

            <div className="ab">Counter:{counter%2===0 ? "even":"odd"}</div>

            

        </div>
    )
     
    
    
}