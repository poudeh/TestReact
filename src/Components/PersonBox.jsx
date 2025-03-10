import React, { useContext } from 'react'
import { TextContext } from '../TextContext'

export default function PersonBox({person}) {
  const context = useContext(TextContext);


  return (
    <div className="person-box">
      <h3>{person.Name} {person.family}</h3>
      <p>Age: {person.age}</p>
      <p>Color of context is {context.color}</p>
    </div>  )
}
