import React, { useEffect, useState } from "react";

function Photo() {
const [photo, setPhoto] = useState([])
useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        setPhoto(res.data)
      })
      .catch(err => {
        debugger
      })
    }, [])
return (
    <div className='Photo'>
        <h2>{photo.title}</h2>
            <img src = {photo.hdurl} />
            <p>{photo.explanation}</p>
            <p>Date: {photo.date}</p>
        <button onClick={close}>Close</button>
    </div>
    )
} 