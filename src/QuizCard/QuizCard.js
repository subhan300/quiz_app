
import React from 'react'
// import questionCard from "../questions.json"
import "./QuizCard.css"
function QuizCard({questionCard,counter,userOption,handleNext,AnsChecker,disabled,disabled_options}) {
    // console.log(disabled[0],"disabled")
 
    // console.log(questionCard,"card",counter,"option : ",userOption[0])
    function l(e){
        console.log("e>>>>>>>>>>.",e.val)
        userOption[1](e.val)

        console.log(counter,"option>>>>>>selected  : ",userOption[0])
        disabled[1](false)
        disabled_options[1](true)
        AnsChecker(e)

    }
    return (
        <div >

            
            <div className="common_title">
                category : {questionCard[counter].category}

            </div>
            <br/>
            <div className="common_title">Qustions {counter+1} out of 3</div>
            
            <br />
            <div><p className="question_text">Q{counter+1})&nbsp;{questionCard[counter].question} ?</p></div>

            <br/>

            <ul className="options" style={{display:"flex",flexWrap:"wrap"}}>
           
             {questionCard[counter].options.map(val=>{
                 return(
                   <button className="btn_options" disabled={disabled_options[0]} style={{marginLeft:"1rem",marginTop:"1rem"}}
                      value="subhan" 
                 onClick={()=>{l({val})}}  > <li>{val}</li></button> 
                 )
             })}
               
            </ul>
          
            <div><button  className="next_btn"  disabled={disabled[0]} onClick={()=>handleNext() }>NEXT</button></div>
            
        </div>
    )
}

export default QuizCard
