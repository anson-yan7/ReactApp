import React, { useState } from 'react'
 
export default (setMyArray) => {
  const [userName, changeUserName] = useState('')
  const [userInput, changeUserInput] = useState('')
  return (
    <div class="container">
      <div class="row justify-content-md-center">
      <div class="col-md-auto">
        <input class="input-group-text" id="inputGroup-sizing-sm" placeholder="name" onChange={e => changeUserName(e.target.value)} />
        <input class="input-group-text" id="inputGroup-sizing-lg" placeholder="post" onChange={e => changeUserInput(e.target.value)} />
        <div class="input-group-prepend">
          <button class="btn btn-outline-secondary" onSubmit={() => {if (userName && userInput) {setMyArray(myArray => [...myArray, {userName: userName, userInput: userInput}] )}}}> post </button>  
        </div>
      </div>
      </div>
    </div>
  )
}