import React from 'react'
export default async function ServerComponent() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result =  await data.json()
  return (
    <div>
      {result.map((item, index) => {
        return (
          <ul key={index}>
            <li>{item.id}</li>
          </ul>  
        
        )
      })}
    </div>
  )
}
