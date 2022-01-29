import styled, { css } from 'styled-components'
import { FontSize, FontWeight, Color } from '../theme/Theme';
import { ButtonTypes } from './Button';

export const ButtonStyled = styled('button') <{ styleType: string }>`
  font-size:  ${props => props.theme.fontSize[FontSize.SMALL]};
  font-weight: ${props => props.theme.fontWeight[FontWeight.SEMIBOLD]};
  border-radius: ${props => props.theme.roundedCorners.medium};
  box-shadow: 0 2px 1px 0 rgba(64, 64, 64, 0.15);
  font-family: 'Open Sans';
  cursor: pointer;
  width: 100%;
  
  ${props => props.styleType == ButtonTypes.PRIMARY && css`
      background: ${props => props.theme.colors[Color.PRIMARY]};
      color: ${props => props.theme.colors[Color.WHITE]};
      padding: 13px 25px;
      border:  1px solid  ${props => props.theme.colors[Color.PRIMARY]};
  `}

  ${props => props.styleType == ButtonTypes.SECONDARY && css`
      border:  1px solid ${props => props.theme.colors[Color.SECONDARY]};
      background: ${props => props.theme.colors[Color.WHITE]};
      color: ${props => props.theme.colors[Color.SECONDARY]};
      padding: 7px 15px
  `}
`;