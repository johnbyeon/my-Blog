import { useState } from "react";

function AppBody(props){

  //타이틀 저장용 state
  const [newTitle,setNewTitle] = useState('');

  //내용 저장용 state 
  const [newContent, setNewContent] = useState('');  
  function handleTitle(index){
      if(!props.modal){
        props.setModal(true);

        props.setCurrentIndex(index);
      
      }else if(props.currentIndex == index){
        props.setModal(false);
        props.setCurrentIndex(null);
      }else {
        props.setCurrentIndex(index);
      }
  }
  //오늘날짜를 생성해 주는 함수
  function getCurrentDate(){
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth()+1).padStart(2,'0');
    const day = String(today.getDate()).padStart(2,'0');
    console.log(`${year}-${month}-${day}`);
    return `${year}-${month}-${day}`;
  }

  //글등록 함수만들기
  function addPost(){
      if(newTitle.trim() === ''){
        alert('제목이 비어있어요');
        return;
      }
      if(newContent.trim() === ''){
        alert('내용이 비어있어요');
        return;
      }
      //타이틀과 내용을 각 배열에 추가
      props.setTitle([newTitle, ...props.title]);
      props.setDetails([newContent, ...props.details])
      //오늘 날짜 생성후 날짜 배열에도 추가
      props.setCreateDate([getCurrentDate(), ...props.createDate]);
      props.setLikes([0, ...props.likes]);
      setNewTitle('');
      setNewContent('');
  }
  function deletePost(e,index){
    e.stopPropagation();
  props.setTitle(props.title.filter((_, i) => i !== index));
  props.setDetails(props.details.filter((_, i) => i !== index));
  props.setCreateDate(props.createDate.filter((_, i) => i !== index));
  props.setLikes(props.likes.filter((_, i) => i !== index));
  }
   //좋아요 처리함수
  function addLikes(num,e){
    e.stopPropagation();
    const newLikes = [... props.likes];
    newLikes[num] = newLikes[num] + 1;
    props.setLikes(newLikes);
  }
    return (
    <>
    <button onClick={() => {
        const sortTitle = [...props.title].sort();
        props.setTitle(sortTitle);
        }}>글 정렬하기</button><div className="list">
            {props.title.map((item, index) => (
                <div key={index}>
                    <h4 onClick={() => handleTitle(index)}>{item}
                    {/* 이벤트 버블링 전이 막기 */}
                    <span onClick={(e) => addLikes(index,e)}>
                    👍
                    </span>{props.likes[index]}
                    &nbsp;
                    <span onClick={(e)=>deletePost(e,index)}>❌</span>
                    </h4>

                    <p>
                        작성일: {props.createDate[index]}
                    </p>
                </div>
            ))}
        </div>
        <input onChange={(e)=>{setNewTitle(e.target.value)}} 
        value={newTitle}
        type="text" placeholder="글 제목을 입력하세요"/>
        <br />
        <input onChange={(e)=>{setNewContent(e.target.value)}} 
        value={newContent}type="text" placeholder="내용을 입력하세요"/>
        <button onClick={addPost}>등록하기</button>
    </>
    )
}

export default AppBody