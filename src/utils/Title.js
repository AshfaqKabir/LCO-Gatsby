import styled from "@emotion/styled"

export const Title = styled.h1`
  margin-bottom: ${props => props.mb || "30px"};
  font-family: ${props => props.fontFam || `'Asap', sans-serif`};
  font-weight: ${props => props.fWeight};
  font-size: ${props => props.fSize || "50px"};
  text-align: ${props => props.textAlign};
  font-style: ${props => props.fStyle};
  letter-spacing: ${props => props.gap};
`
