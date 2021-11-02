import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = (props) => {
	const [show,setShow] = useState(false)
	const {title,info} = props
	const handleClick = () =>{
		setShow(!show)
	}
  return(
  	<article className = "question">
     <header>
     <h4>{title}</h4>
     <button className = 'btn' onClick = {handleClick}>
      {show?<AiOutlineMinus/>:<AiOutlinePlus/>}
     </button>
     </header>
     {show?info:<p></p>}
  	</article>
  	);
};

export default Question;
