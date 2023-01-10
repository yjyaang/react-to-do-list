import React, { useState } from 'react'
import styled from 'styled-components'

// 나열되어야 할 요소: 할 일 이름, 체크박스, 수정 버튼, 삭제 버튼

const MainContainer = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    width: 100vw;
    max-width: 768px;
    font-size: 2vh;
    padding: 10px;
    border-bottom: 1px solid rgba(60, 60, 60, 0.6);
`

const CheckboxLabel = styled.label`
    margin: 10px;
    &.checked {
        color: rgb(100, 100, 100);
        text-decoration-line: line-through;
    }
`

const EditAndDelete = styled.div`
    display: flex;
`

const EditAndDeleteDiv = styled.button`
    margin: 0 20px;
    background-color: transparent;
    border: none;
    font-family: GmarketSansMedium;
    font-size: 1.5vh;
    cursor: pointer;
`

const Todos = ({id, work, todo, setTodo}) => {

    const[isChecked, setIsChecked] = useState(false);

    const clickHandler = () => {
        setTodo(todo.filter(el => el.id !== id))
    }

    const checkboxHandler = () => {
        setIsChecked(!isChecked);
    }
    return (
        <MainContainer>
            <div>
                <input type="checkbox" id={id} onChange={checkboxHandler}/>
                <CheckboxLabel for={id} className={`${isChecked ? "checked" : ""}`}>{work}</CheckboxLabel>
            </div>
            <EditAndDelete>
                <EditAndDeleteDiv>
                    수정
                </EditAndDeleteDiv>
                <EditAndDeleteDiv onClick={clickHandler}>
                <i class="fa-regular fa-trash-can"></i>
                </EditAndDeleteDiv>
            </EditAndDelete>
        </MainContainer>
    )
}

export default Todos