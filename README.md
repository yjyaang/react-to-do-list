# React To Do App

React와 Firebase를 사용해 To Do앱을 만들었습니다.
<br/>
<br/>

## 구현한 기능

### Create(추가)

'할 일 추가하기' 버튼을 누른 후, input 창에 할 일을 입력하고 '추가하기' 버튼을 누르면 Firebase database에 할 일이 추가됩니다. 

### Read(조회)

Firebase database에서 데이터를 조회해 화면에 나타냅니다.
추가, 수정, 삭제한 내용이 database에 적용되고, 이 database를 조회하기 때문에 추가, 수정, 삭제가 바로 업데이트됩니다.

### Update(수정)

할 일 목록에서 '수정' 버튼을 누르면 할 일 목록이 input창으로 바뀌고, 확인 버튼을 누르면 수정한 내용이 database에 적용됩니다.

### Delete(삭제)

할 일 목록에서 쓰레기통 아이콘을 누르면 database에서 해당 내용이 삭제되고, 이는 화면에 바로 반영됩니다.
