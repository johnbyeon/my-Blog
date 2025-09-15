import {useState} from 'react';
import './App.css';
import Modal from './modal';
import HeadTitle from './headTitle';
import AppBody from './appBody';

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

  const [details,setDetails] = useState([
    '심플한 디자인의 코트로 가을에 잘 어울림',
    '강남 우동의 찐 맛집! 먹어보진 않았음',
    '자바 스터디는 말 만하고 못함'
  ])
  // 자식이 호출할 콜백 함수


  //모달페이지가 보이게/안보이게 작업하기 위한 스테이트
  const [modal,setModal] = useState(false);

  const [currentIndex,setCurrentIndex] = useState(null);
  
  return (
    <>
    <div className='App'>
      <HeadTitle />
      {/* <h4 style={{color:'red',fontSize:'16px'}}>{post}</h4> */}
      
      <AppBody 
      title={title}
      setTitle={setTitle}
      likes={likes}
      setLikes={setLikes}
      createDate={createDate}
      currentIndex={currentIndex}
      setCurrentIndex={setCurrentIndex}
      modal={modal}
      setModal={setModal}
      />

      {/* 상세페이지 나타날 곳 */}

      {modal ? <Modal color='lightblue' 
      createDate={createDate}  
      title={title} 
      currentIndex={currentIndex}
      details={details}
      /> : null}
    </div>
  </>
  )
}



export default App
