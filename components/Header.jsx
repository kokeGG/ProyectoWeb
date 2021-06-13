import React from 'react';
import styled from '@emotion/styled';


const Header = () => {

    const HeaderA = styled.header`
        width: 100%;
        height: 4rem;
        background-color: rgb(23, 28, 36) !important;
    `;

    const Godiv = styled.div`
        width: 100%;
    `;

    const Go = styled.h1`
        width: 100%;
        
        

    `;
    return ( 
        <>
            <HeaderA>
                <Godiv>
                    <h1 className="animated-shadow til">
                        GoGasoline
                    </h1>
                </Godiv>
            </HeaderA>
        </>
     );
}
 
export default Header;