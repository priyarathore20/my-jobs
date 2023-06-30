import React from 'react'

const Card = () => {
  return (
    <div className='card-section'>
      <div className="card-heading">Why Us?</div>
      <div className='cards'>
        <div className="card">
          <h3 className='card-title'>Get More Visibility</h3>
          <p className='card-para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, voluptatum incidunt voluptates molestiae doloribus cumque.</p>
        </div>
        <div className="card">
          <h3 className='card-title'>Organize Your Candidates</h3>
          <p className='card-para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, voluptatum incidunt voluptates molestiae doloribus cumque.</p>
        </div>
        <div className="card">
          <h3 className='card-title'>Verify Their Abilities</h3>
          <p className='card-para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, voluptatum incidunt voluptates molestiae doloribus cumque.</p>
        </div>
      </div>
    </div>
  )
}

export default Card