// import { useState } from "react";


// function QuizApp({currentquest, options, question , handlenext}){
// const [selectedoption , setSelectedoption] = useState();
// const [showresult , setShowresult] = useState(false);
// function checkanswer(){
//     if(selectedoption === "")return;
//     setShowresult(true);
// }

// function nextquestion(){
//    setSelectedoption("");
//    setShowresult(false)
//    handlenext()
// }

// return(
//     <div className="container">
//         <h3>Question : {currentquest +1}</h3>
        
//         <p>{question}</p>

//   {options.map((option, index) => (
//         <p key={index}>{option}</p>
//       ))}
//           <button onClick={handlenext}>Next</button>
//     </div>
// )
// }
// export default QuizApp;