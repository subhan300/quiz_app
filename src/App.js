
import React,{useState} from "react"
import './App.css';
import QuizCard from './QuizCard/QuizCard';
import questionCard from "./questions.json"
// import LinearWithValueLabel from "./QuizCard/ProgressBar";
function App() {
  console.log("question card  : ",questionCard)
  // let TotalQustions=questionCard.length

  let userOption=useState("")
  let [counter,setCounter]=useState(0)
  let [score,setScore]=useState(0)
  let [ansResponse,setAnsResponse]=useState("")
  let disabled=useState(true)
  let disabled_options=useState(false)
  // console.log(userOption[0]==questionCard[counter].correct_answer)
  let[percentage,setPercentage]=useState(0)
  console.log(percentage,"%")
  const handleNext=()=>{
 console.log("counter  : ",counter)
 if(counter<2){
  setCounter(counter + 1)
  setAnsResponse("")
  disabled[1](true)
  disabled_options[1](false)
  userOption[1]("")
  
 }
 else{
   console.log("stop the quiz")

   setAnsResponse("")
   disabled[1](true)
   disabled_options[1](true)
   userOption[1]("")
  

  

  

 }

  }


  const AnsChecker=(e)=>{
    console.log(e.val,"=====",questionCard[counter].correct_answer)
    // console.log(e.val==questionCard[counter].correct_answer)
    // console.log("counter>>>>>>>>>>>>>>>>...",counter)
    
    if (e.val==questionCard[counter].correct_answer){

      console.log(percentage,"percentage")
      setScore(score +=10)
      setPercentage((score*100)/30)
      console.log(score,"<<<socre")
      console.log(percentage,"<<<<<<<<<<<<,percentages")

      setAnsResponse("congratulations")
     
  }
  else{

    setAnsResponse("sorry")
  }



  }

  return (
   <div>
      <div class="App ">
        <h1 className="quiz_title">QUIZ APPLICATION</h1>
        <QuizCard disabled_options={disabled_options} disabled={disabled} questionCard={questionCard} counter={counter} userOption={userOption} handleNext={handleNext} AnsChecker={AnsChecker} />
        <h1>your score is: {score}</h1>
        <h1>{ansResponse}</h1>


        {/* <LinearWithValueLabel /> */}

        <div class="progress mt-4  " style={{ width: "80%", margin: "0 auto" }}>
          <div class="progress-bar" role="progressbar" style={{ width: `${percentage}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            {percentage}
          </div>
        </div>


      </div>
   </div>
  );
}

export default App;
