import React from 'react'

const Home = () => {
  return (
    <div className='column-container'>

      <div className="upper-section">
        <div className='left-side-logo'>
          <img src="public/images/logo.png" className='logo'/>
        </div>

        <div className='middle-part-text'>
          <h1>Products and </h1> <br />
          <h1>Travel</h1>
          <div>
           <img src="public/images/hiking.png" alt="" />
          </div>
          <div>
           <img src="public/images/mountain.png" alt="" />
          </div>

          <p>Explore the world's best destinations & <br />Buy the best product for your travel</p>
        </div>

        <div className='right-side-cover'>
          <img src="public/images/IMG_0015.jpg" className='cover-img1' />
        </div>
      </div>

      <div className="middle-section">
        <img src="public/images/guarantee-logo.png" className='guarantee-logo'/>
      </div>

      <div className="bottom-section">
        <div className='section1'>
            <h3>12K+</h3>
            <p>Happy customers</p> <br />

            <h3>132+</h3>
            <p>Products available</p>
        </div>

        <div className='section2'>
          <img src="public/images/IMG_0017.jpg" />
          <div>
            <h3>Trendy <br /> Collections</h3>
            <p>We constantly create <br /> trendy clothing and <br /> product for travel</p>
          </div>
        </div>

        <div className='section3'>
          <img src="public/images/IMG_0016.jpg"/> 
          <div>
            <h3>12.8K+ Travel <br /> Destinations</h3>
            <p>Explore all the beautiful <br /> places of the world at <br /> low cost</p>
          </div>
        </div>

      </div>

    </div>

  )
}

export default Home