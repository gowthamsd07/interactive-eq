import React from 'react';
import './Hrm.scss';

const HrmTile = (props) => {
  const { id, imgUrl, altText, title, titleDescription, tileText } = props.tileData;
  const isIdEven = id % 2 === 0;
  return (
    <div className='mt-80 flex-all-center flex-column'>
      <h3 className="text-white text-center">{title}</h3>
      <p className='hrm-titleDesc subtitle-3 .text-center'>{titleDescription}</p>
      <div className={`hrmTile-wrapper mt-80 ${isIdEven ? 'direction-reverse' : ''}`}>
        <div className={`hrmTextTile flex-all-center ${isIdEven ? 'ml' : 'mr'}`}>
          <p>{tileText}</p>
        </div>
        <div className='hrmImageTile'>
          <img src={imgUrl} alt={altText}/>
        </div>
      </div>
    </div>
  )
}

export default HrmTile;
