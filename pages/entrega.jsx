import React from 'react';
import styled from '@emotion/styled';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import FormEnt from '../components/FormEnt';

const RegistroUsu = () => {

    const Flex = styled.div`
        display: flex;
    `;



    return ( 
        <>
            <Flex>
            <Navbar/>

            <FormEnt />
            

            </Flex>

            
            
            

            
            
            
        </>
     );
}
 
export default RegistroUsu;