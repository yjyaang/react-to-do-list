import React, { useState } from 'react'
import styled from 'styled-components'
import { database } from '../Firebase'
import { doc, deleteDoc, collection, getDocs, setDoc } from "firebase/firestore";

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

const Todos = ({ id, work, setNewTodo, isDone }) => {

    const [isEdit, setIsEdit] = useState("");
    const [editValue, setEditValue] = useState("");
    const usersCollectionRef = collection(database, "todo");
    // 삭제버튼 onClick에 사용되는 함수
    const clickHandler = async () => {
        const todoDoc = doc(database, "todo", id);
        await deleteDoc(todoDoc)
        const data = await getDocs(usersCollectionRef);
        // users에 data안의 자료 추가. 객체에 id 덮어씌우는거
        setNewTodo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    const checkboxHandler = async() => {
        const arr = {
            todo: work,
            isDone: !(isDone)
        }
        await setDoc(doc(database, "todo", id), arr);
        const data = await getDocs(usersCollectionRef);
        // users에 data안의 자료 추가. 객체에 id 덮어씌우는거
        setNewTodo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    // 수정 버튼 누르면 실행되는 함수
    const changeEdit = () => {
        setIsEdit(id);
        setEditValue(work);
    }
    // 확인 버튼 누르면 내용 수정하고 isEdit 비우기
    const editDone = async () => {
        setIsEdit("");
        const arr = {
            todo: editValue,
            isDone: isDone
        }
        await setDoc(doc(database, "todo", id), arr);
        const data = await getDocs(usersCollectionRef);
        // users에 data안의 자료 추가. 객체에 id 덮어씌우는거
        setNewTodo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    // 내용 수정 함수
    const valueChangeHandler = (e) => {
        setEditValue(e.target.value);
    }

    return (
        <MainContainer>
            <div>
                <input type="checkbox" id={id} onChange={checkboxHandler} checked={isDone ? true : false}/>
                <CheckboxLabel className={`${isDone ? "checked" : ""}`} >
                    {isEdit === id ?
                        (<>
                            <input type="text" value={editValue} onChange={valueChangeHandler} />
                            <EditAndDeleteDiv onClick={editDone}>
                                완료
                            </EditAndDeleteDiv>
                        </>)
                        : work}
                </CheckboxLabel>
            </div>
            <EditAndDelete>
                <EditAndDeleteDiv onClick={changeEdit}>
                    수정
                </EditAndDeleteDiv>
                <EditAndDeleteDiv onClick={clickHandler}>
                    <i className="fa-regular fa-trash-can"></i>
                </EditAndDeleteDiv>
            </EditAndDelete>
        </MainContainer>
    )
}

export default Todos