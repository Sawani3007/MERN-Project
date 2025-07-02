import { useState } from "react";

const arr=["Kiwi","banana","pineapple"];
const App = () =>{
  const [editIndex,setEditIndex] = useState(-1);
  return(
    <div>
      {arr.map((elem,idx) => {
        return(
          <div style={{backgroundColor :idx === editIndex ? "red":"green"}}>
            {/* <h1>{elem}</h1>
            <input type="text"/> */}
            
            <button onClick={()=>{
              setEditIndex(idx);
            }}>Edit</button>
          </div>
        );
      })}
    </div>
  )
}
export default App;