import React, { useState } from 'react'

export default () => {
  const [count, setCount] = useState(0)

  return (
    <div >
      <p> {count} likes </p>
      <button class="bi bi-hand-thumbs-up" onClick={() => setCount(count - 1)}>
      </button>
      <button class="bi bi-hand-thumbs-down" onClick={() => setCount(count - 1)}>
      </button>
    </div>
  )
}