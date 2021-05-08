import React from 'react';
import styled from "@emotion/styled"

const HeaderStyle = styled.header`
background-color: #fff;
padding: 3rem;
display:flex;
justify-content: center;

`;

const Header = ( {titulo} ) => {
    return (  

        <HeaderStyle>

                <h1>{titulo}</h1>

        </HeaderStyle>

    );
}
 
export default Header;