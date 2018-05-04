import React from 'react';
import './pictures.css'

class Pictures extends React.Component {
  render() {
    return (
      <div className="pictures contents-wrapper">

        <div className="pictures contents-wrapper">

          <div className="pictures-row">
            <div className='picture'>picture1</div>
            <div className='picture'>picture2</div>
            <div className='picture'>pictur3</div>
          </div>

          <div className="pictures-row">
            <div className='picture'>picture1</div>
            <div className='picture'>picture2</div>
            <div className='picture'>pictur3</div>
          </div>

          <div className="pictures-row">
            <div className='picture'>picture1</div>
            <div className='picture'>picture2</div>
            <div className='picture'>pictur3</div>
          </div>

        </div>

      </div>
    )
  }
}

export default Pictures;
