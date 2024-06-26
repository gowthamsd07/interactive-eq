import React from 'react';
import './Hrm.scss';
import { Row, Col } from 'antd';

const HrmTile = (props) => {
  const { id, imgUrl, altText, title, titleDescription, tileText } = props.tileData;
  const isIdEven = id % 2 === 0;
  return (
    <div className='mt-80 flex-all-center flex-column w-100'>
      <h3 className="text-white text-center">{title}</h3>
      <p className='hrm-titleDesc h6r text-center'>{titleDescription}</p>
      <Row gutter={24} className={`hrmTile-wrapper mt-80 ${isIdEven ? 'direction-reverse' : ''}`}>
        <Col span={8} className='d-flex'>
          <div className={`hrmTextTile h4r flex-all-center w-100`}>
            <p>{tileText}</p>
          </div>
        </Col>
        <Col span={16} className='hrmImageTile'>
          <img src={imgUrl} alt={altText} />
        </Col>
      </Row>
    </div>
  )
}

export default HrmTile;
