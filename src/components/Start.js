import React from 'react'
import bazzi from '../img/bazzi_cut.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StartContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;
    width: 100%;
    max-width: 768px;
`

const StartImg = styled.img`
    width: 30vh;
    height: 30vh;
`

const StartContent = styled.div`
    font-size: 2vh;
    white-space: pre-wrap;
    text-align: center;
`

const titleContent = '^\n시작하려면\n배찌를 눌러주세요'

const Start = () => {
    return (
        <StartContainer>
            <h1>TO DO LIST</h1>
            <div>
                <Link to='/main'><StartImg src={bazzi} alt='bazzi' /></Link>
                <StartContent>{titleContent}</StartContent>
            </div>
        </StartContainer>
    )
}

export default Start