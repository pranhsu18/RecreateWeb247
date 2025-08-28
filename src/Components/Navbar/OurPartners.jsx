import React from 'react'
import"./OurPartners.css"

export default function () {
  return (
    <>
      <div className="partners-section">
        <h2 className="headings">Our Trusted Partners</h2>
        
        <div className="partners-carousel">
          <div className="partners-track">
            <img src="https://gns.tv/files/ekcs.jpeg" alt="Client 1" />
            <img src="https://gns.tv/files/vertex1.png" alt="Client 2" />
            <img src="https://gns.tv/files/lions_light.jpeg" alt="Client 3" />
            <img src="https://gns.tv/files/cc_com.jpeg" alt="Client 4" />
            <img src="https://gns.tv/files/octopus.jpeg" alt="Client 5" />
            <img src="https://gns.tv/files/sr_con.jpeg" alt="Client 6" />
            {/* duplicate for infinite loop effect */}
            <img src="https://gns.tv/files/ekcs.jpeg" alt="Client 1" />
            <img src="https://gns.tv/files/vertex1.png" alt="Client 2" />
            <img src="https://gns.tv/files/lions_light.jpeg" alt="Client 3" />
            <img src="https://gns.tv/files/cc_com.jpeg" alt="Client 4" />
            <img src="https://gns.tv/files/octopus.jpeg" alt="Client 5" />
            <img src="https://gns.tv/files/sr_con.jpeg" alt="Client 6" />
          </div>
        </div>
      </div>

    </>
  )
}
