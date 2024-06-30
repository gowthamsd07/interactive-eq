import React from 'react';
import './Hrm.scss';
import { Row, Col } from 'antd';

const HrmTile = (props) => {
  const { id, imgUrl, altText, title, titleDescription, tileText } = props.tileData;
  const isIdEven = id % 2 === 0;
  return (
    <div className='hrmTile flex-all-center flex-column w-100'>
      <h3 className="text-white text-center">{title}</h3>
      <div className='flex-all-center w-100'>
        <p className='hrm-titleDesc h6r text-center'>{titleDescription}</p>
      </div>
      <Row gutter={[{ xl: 24, lg: 24 }, { xs: 24, sm: 24, md:24 }]} className={`hrmTile-wrapper w-100 mt-80 ${isIdEven ? 'direction-reverse' : ''}`}>
        <Col xs={24} sm={24} md={24} lg={12} xl={8} className='w-100'>
          <div className={`hrmTextTile h4r flex-all-center w-100`}>
            <p className='w-100'>{tileText}</p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={16} className='w-100'>
          <div className='hrmImageTile'>
            <img src={imgUrl} alt={altText} />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default HrmTile;
