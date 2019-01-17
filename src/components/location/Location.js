import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11660.869008795104!2d17.191144347203526!3d44.77618352138437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475e030891003f13%3A0xb5fcbe8149bcc045!2sPark+Mladen+Stojanovi%C4%87!5e0!3m2!1sen!2sba!4v1547716480748"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullscreen></iframe>

        <div className="location_tag">
          <div>Location</div>
        </div>
    </div>
  )
}


export default Location