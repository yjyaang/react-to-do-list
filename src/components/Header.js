import React from 'react'
import bazzi from '../img/bazzi_200.png'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
`

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 768px;
    /* border-bottom: 1px solid rgba(60, 60, 60, 0.6); */
`
const LogoImg = styled.img`
    width: 3vw;
    height: 3vw;
    margin: 10px;
`

const HeaderDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const IconDiv = styled(HeaderDiv)`
    font-size: 2vh;
`

const Header = () => {
    return (
        <Container>
            <HeaderContainer>
                <HeaderDiv>
                    <LogoImg src={bazzi} className='bazzi' alt='bazzi' />
                    <h2>TO DO LIST</h2>
                </HeaderDiv>
                <IconDiv>
                    <i className="fa-solid fa-bars"></i>
                </IconDiv>
            </HeaderContainer>
        </Container>
    )
}

export default Header