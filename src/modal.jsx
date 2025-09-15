function Modal(props){
  return (
      <div className='modal' 
      style={{background: props.color}}>
        <h4>{props.title[props.currentIndex]}</h4>
        <p>{props.createDate[props.currentIndex]}</p>
        <p>{props.details[props.currentIndex]}</p>
      </div>
  )
}


export default Modal