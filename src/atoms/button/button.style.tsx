import styled from 'styled-components'
import {HexColor} from "../../../.theme/colors/contracts/hex-color";

export interface ButtonStyleProps {
    background : HexColor,
    text: HexColor,
    font: string
}

export const Button = styled.button<{ style: ButtonStyleProps; }>`
  background: ${(props) => props.style.background};
  border-radius: 3px;
  border: 6px solid #BF4F74;
  color: ${(props) => props.style.text};
  margin: 0 1em;
  padding: 0.25em 1em;
  font: ${(props) => props.style.font};
`

export interface ButtonLabelStyleProps {}

export const ButtonLabel = styled.div<{ style: ButtonLabelStyleProps; }>`
  border: 3px solid greenyellow;
`