import styled, { css } from 'styled-components'
import { FontSize } from '../../theme/Theme';

export const Item = styled('div') <{ first?: boolean }>`
    display: inline-block;
    max-width: 260px;
    border-radius: 4px;
    border: solid 1px #c0c0c0;
    font-size:  ${props => props.theme.fontSize[FontSize.BASE]};
    padding-left: 15px;

    @media ${props => props.theme.device.xs.max}{
        max-width: 100%;
        ${props => props.first && css`
            margin-bottom: 15px;
        `}
    }
    @media ${props => props.theme.device.xs.min}{
        width: 100%;
        margin-right: 0;
    }
    @media ${props => props.theme.device.sm.min}{
        max-width: 195px;
        margin-right: 30px;
    }
    @media ${props => props.theme.device.lg.min}{
        min-width: 210px;
        margin-right: 30px;
      }
    @media ${props => props.theme.device.xl.min}{
        min-width: 262px;
        margin-right: 30px;
    }

`;

export const RadioButtonStyled = styled('div') <{}>`
    margin-top: 20px;
    & > * {
        @media ${props => props.theme.device.xs.max}{
            flex-direction: column !important;
        }
        @media ${props => props.theme.device.sm.min}{
            flex-direction: row !important;
        }
        @media ${props => props.theme.device.lg.min}{
            flex-direction: row !important;
          }
        @media ${props => props.theme.device.xl.min}{
            flex-direction: row !important;
        }
    }
`;