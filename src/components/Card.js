import { React} from "react";
import styled from 'styled-components';
import {theme} from '../components/theme';
import FirstComponent from "./FirstComponent";

const StyledCard = styled.div`

   marging: auto 10px;
    height: 330px;
    border-radius: ${theme.borderRadius.small};
    display: flex;
    flex-direction: column;
    gap: ${theme.padding.standard};
    align-items: center;
    padding: ${theme.padding.standard};
    background-color: ${theme.color.light};

    h2 {
        font-size: ${theme.fontSize.medium};
        line-height: ${theme.lineHeight.medium};
        text-align: center;
        margin-top: ${theme.padding.double};
    }

    @media (min-width: ${theme.media.phone}) {
        max-width: ${theme.media.phone};
    }
`;



const Card = ({ slideNumber }) => {
  

    return (
        <StyledCard>
            {
                slideNumber === 0
                    ? (<>
                        <FirstComponent/>
                        </>)
                    : slideNumber === 1
                        ? (<>
                           
                            <h2>Beautiful socks</h2>  
                        </>)
                        : (<>
                           
                            <h2>Awesome socks</h2> 
                        </>)
            }
        </StyledCard>

    )
}

export default Card;