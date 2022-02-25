import Voter from './Voter'
import Textbox from './Textbox'
import React, { useState } from 'react'
import RecursivelyRenderedComponent from './RecursivelyRenderedComponent'

export default ({name, post, depth}) => {
    const [myArray, setMyArray] = useState([])
    if (depth === 0) {
        // Base case
        return null
      }
      let voter
      if (post) {
          voter = <Voter />
      }
      let textbox
      if (depth !== 0) {
        textbox = <Textbox setMyArray={setMyArray}></Textbox> 
      }
      return (
          <> 
            <div class="row">
                <div class="col">
                    <div> {name} </div>
                </div>
                <div class="col-6">
                    <div>{post}</div>
                </div>
                <div class="col">{voter}</div>
                <row>
                    <div>{textbox}</div>
                </row>
                <row>
                    <div>{myArray.forEach(element => { <RecursivelyRenderedComponent name={element.userName} post={element.userInput} depth={depth-1}></RecursivelyRenderedComponent>})}</div>
                </row>
            </div>
          </>
      )
}