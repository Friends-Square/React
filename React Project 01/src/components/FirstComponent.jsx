import React from 'react'

export default function FirstComponent() {

    const designComponent = {
        backgroundColor: "white",
        color: "black",
        padding: "10px",
        textAlign: "center",
    }
  return <>
  <div style={designComponent} className='text-center'>
    <ul className='text-center'>
        <li>Tailwind CSS installed</li>
        <li>Daisy UI Installed</li>
    </ul>
  </div>
  </>
}
