import styled from 'styled-components'
import { Box } from '@rebass/grid'
import { FontSize, Color, FontWeight } from '../../../components/theme/Theme';
export const ExamContainer = styled('div') <{}>`
    display: flex;
    align-items: center;
    @media ${props => props.theme.device.xs.min}{
        margin: 15px;
        width: 100%;
        justify-content: space-between;
    }
    @media ${props => props.theme.device.sm.min}{
        margin-left: 46px;
    }
    @media ${props => props.theme.device.lg.min}{
        justify-content: center;
      }
`;
export const ExamName = styled('div') <{}>`
    display: inline-block;
    @media ${props => props.theme.device.xs.min}{
        min-width: 172px;
    }
    @media ${props => props.theme.device.sm.min}{
    min-width: 339px;
    }
    @media ${props => props.theme.device.lg.min}{
        min-width: 640px;
      }
    @media ${props => props.theme.device.xl.min}{
        min-width: 780px;
    }
`;

export const ExamButton = styled('div') <{}>`
    display: flex;
    min-width: 230px;
    align-items: center;
    @media ${props => props.theme.device.xs.min}{
        padding-left: 20px;
    }
    @media ${props => props.theme.device.sm.min}{
        padding-right: 50px;
    }
    @media ${props => props.theme.device.lg.min}{
        }
    @media ${props => props.theme.device.xl.min}{
    }
`;

export const AddRowButton = styled('div') <{}>`
    margin-top: 17px;
    width: 45px;
    height: 45px;
    margin-left: 30px;
    display: flex;
`;

export const FinishButton = styled('div') <{}>`
    width: fit-content;
    margin: auto;
    display: flex;
`;


export const Row = styled(Box)`
    display: flex;
    font-weight: ${props => props.theme.fontWeight[FontWeight.SEMIBOLD]};
    font-size:  ${props => props.theme.fontSize[FontSize.BASE]};
    background: ${props => props.index % 2 === 0 ? props.theme.colors[Color.GRAYLIGHT] : props.theme.colors[Color.WHITE]};
  `;

export const NoExam = styled(Box)`
    margin-top: 21px;
    display: flex;
    font-size:  ${props => props.theme.fontSize[FontSize.BASE]};
    justify-content: center;
    font-weight: ${props => props.theme.fontWeight[FontWeight.SEMIBOLD]};
    @media ${props => props.theme.device.xs.max}{
        margin-top: 15px;
      }
`;

export const ButtonContainer = styled('div') <{}>`
    height: 44px;
    z-index: 1;
    @media ${props => props.theme.device.xl.min}{
       min-width:158px;
    }
`;