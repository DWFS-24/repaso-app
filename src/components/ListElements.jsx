import React from 'react'

const ListElements = ({list}) => {
  return (
    <ul>
      {
        list.map((item, i) => (
          <li key={i}>
            {item}
          </li>
        ))
      }
    </ul>
  )
}

export default ListElements