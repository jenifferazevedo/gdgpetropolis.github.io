import React from "react"; 
import styled from "styled-components";
import { Row, Col } from "antd";
import { mainTitle, mainText } from "../Txt";
import { mainImg, altMainImg } from "../Imgs";

const Section = styled.section`
width: 100%;
height: 500px;
img {
  width: 80%;
  display: flex;
  margin: auto;
  padding-top: 80px;
}
.backColor {
background-color: #609dff;
padding: 80px 70px;
height: 500px;
h1 {
  color: white;
  font-size: 2rem;
}
p{
  color: white;
  font-size: 1rem;
}
}
`

export function MainSection(props) {
  
  return(
    <Section>
      <Row>
        <Col md={24} lg={14} xl={12} className='backColor'>
          <h1>{mainTitle ? mainTitle.toUpperCase() : 'Title'.toUpperCase()}</h1>
          <p>{mainText ? mainText : 'Text'}</p>
        </Col>
        <Col md={24} lg={10} xl={12}>
          <img src={mainImg ? mainImg : 'img/gdg_petropolis_logocomimagem.svg'} alt={altMainImg ? altMainImg : 'GDG - Petrópolis'} />
        </Col>
      </Row>
    </Section>
  )
}