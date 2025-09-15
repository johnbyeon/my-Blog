import {useState} from 'react';
import './App.css';
import Modal from './modal';


function App() {
  let post = '강남제육맛집';
  const [title, setTitle] = useState([
    '남자코트추천',
    '강남우동맛집',
    '자바스터디'
  ]);
  const [createDate,setCreateDate] = useState([
    '2025-5-1',
    '2025-6-1',
    '2025-7-1'
  ])
  const [likes,setLikes] = useState([
    0,
    0,
    0
  ]);
  const [status,setStatus] = useState(0);

  const [details,setDetails] = useState([
    '심플한 디자인의 코트로 가을에 잘 어울림',
    '강남 우동의 찐 맛집! 먹어보진 않았음',
    '자바 스터디는 말 만하고 못함'
  ])
  //좋아요 처리함수
  function addLikes(num){
    const newLikes = [...likes];
    newLikes[num] = newLikes[num] + 1;
    setLikes(newLikes);
  }

  function chageTitle(){
    if(status == 0){
      const status1 = 1;
      setStatus(status1);
      const newTitle = [... title];
      newTitle[0] = '여자코트추천';
      setTitle(newTitle);
    }else if(status == 1){
      const status1 = 0;
      setStatus(status1);
      newTitle[0] = '남자코트추천';
      setTitle(newTitle);
    }

  }
  //모달페이지가 보이게/안보이게 작업하기 위한 스테이트
  const [modal,setModal] = useState(false);
<<<<<<< HEAD
  const [modalStatus,setModalStatus] = useState(null);
=======
  const [currentIndex,setCurrentIndex] = useState(null);
>>>>>>> 77cafb2 (모달 props 전달)
  function handleTitle(index){

      if(!modal){
        setModal(true);
<<<<<<< HEAD
        setModalStatus(index);
      
      }else if(modalStatus == index){
        setModal(false);
        setModalStatus(null);
      }else {
         setModalStatus(index);
=======
        setCurrentIndex(index);
      
      }else if(currentIndex == index){
        setModal(false);
        setModalStatus(null);
      }else {
         setCurrentIndex(index);
>>>>>>> 77cafb2 (모달 props 전달)
      }
  }
  return (
    <div className='App'>
      <div className='black-bg'>
          react + vite로 만드는 블로그
      </div>
      {/* <h4 style={{color:'red',fontSize:'16px'}}>{post}</h4> */}
      <button onClick={()=>chageTitle()}>글 정렬하기</button>
      <div className="list"> 

     {title.map((item, index) => (
          <div key={index}>
            <h4 onClick={()=>handleTitle(index)}>{item}
              <span onClick={()=>addLikes(index)}>
                👍
              </span>{likes[index]}
            </h4>
            <button onClick={()=>chageTitle(index)}>
              변경
            </button>
            <p>
              작성일: {createDate[index]}
            </p>
          </div>
      ))}
      </div>
      {/* 상세페이지 나타날 곳 */}
      
<<<<<<< HEAD
      {modal ? <Modal /> : null}
=======
      {modal ? <Modal color='lightblue' 
      createDate={createDate}  
      title={title} 
      currentIndex={currentIndex}
      details={details}
      /> : null}
>>>>>>> 77cafb2 (모달 props 전달)
    </div>
  )
}



export default App
