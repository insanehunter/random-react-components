import React from 'react'
import Toggle from './Toggle'

const Test = () => {
  return (
    <Toggle>
      {({ isOpen, toggle }) => (
        <div>
          <button onClick={toggle}>Open</button>
          {isOpen && <h2>Hui</h2>}
        </div>
      )}
    </Toggle>
  )
}

export default Test
