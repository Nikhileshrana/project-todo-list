"use client"
import React, { useState } from 'react'


const page = () => {
  const [todoarray, settodoarray] = useState([]);
  const[todoitem,settodoitem]=useState("");

  const addtotodo = (e)=>
  {
    settodoitem(e.target.value)
  }

  const listtodo = ()=>
  {
    todoarray.push(todoitem);
    settodoarray([...todoarray]);
  }

  const deleteitem = (i)=>
  {
    todoarray.splice(i,1);
    settodoarray([...todoarray]);
  }

  return (
    <>
      <div className="container">
        <div></div>
        <div className='container_ip'>
          <div>
            <input placeholder="Enter To Do Task" onChange={addtotodo} />
          </div>
          <div>
            <button onClick={listtodo}>Add to List</button>
          </div>
        </div>

        <div className="list">
          {todoarray.map((elem, i) => {
            return (
              <>
                <div key={i}>{elem}</div>
                
                <div>
                  <button onClick={() => deleteitem(i)}>
                    Delete This Note
                  </button>
                </div>
              </>
            );
          })}
        </div>

      </div>
    </>
  );
}

export default page