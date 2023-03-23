import React from 'react'
import '../styles/Gallery.css'

function Gallery() {
  return (
    <div>
        <section class = "Gallery">
            <h2>Gallery</h2>
            <ul>
                <li><img src="src/assets/1.jpg" alt="Digital art 1" width={200}/></li>
                <li><img src="src/assets/2.jpg" alt="Digital art 2" width={200}/></li>
                <li><img src="src/assets/3.jpg" alt="Digital art 3" width={200}/></li>
            </ul>
        </section>
    </div>
  )
}

export default Gallery