import React from 'react';
import styled from '@emotion/styled';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import FormFac from '../components/FormFac';

const RegistroUsu = () => {

    const Flex = styled.div`
        display: flex;
    `;



    return ( 
        <>
            <Flex>
            <Navbar/>

            <FormFac />
            

            </Flex>

            
            
            

            
            
            
        </>
     );
}
 
export default RegistroUsu;