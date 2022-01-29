import styled from 'styled-components'
import { FontSize, FontWeight, Color } from '../theme/Theme';

export const TitleStyled = styled('h1') <{}>`
  text-align: center;
  font-size:  ${props => props.theme.fontSize[FontSize.JUMBO]};
  font-weight: ${props => props.theme.fontWeight[FontWeight.BOLD]};
  color:  ${props => props.theme.colors[Color.BLUE]};
  font-family: Montserrat;
`;

export const SubtitleStyled = styled('p') <{}>`
  font-size:  ${props => props.theme.fontSize[FontSize.BASE]};
`;

export const ContainerStyled = styled('div') <{}>`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;
