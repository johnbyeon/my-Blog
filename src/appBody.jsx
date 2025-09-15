function AppBody(props){

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
                    </h4>

                    <p>
                        작성일: {props.createDate[index]}
                    </p>
                </div>
            ))}
        </div>
    </>
    )
}

export default AppBody