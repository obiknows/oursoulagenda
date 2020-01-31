import React from "react"
import styled from "styled-components"


const TitleHeader = ({ title }) => {
  return (
    <TitleHeaderText>{title}</TitleHeaderText>
  )
}

const TitleHeaderText = styled.h1`
  font-size: 66px;
  text-align: center;
  letter-spacing: 0.22rem;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 44px;
  }
`

export default TitleHeader