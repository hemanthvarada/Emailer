import './App.css';
import {useState} from "react"
import axios from "axios"

function App() {
  const [email, setEmail]= useState("") ; 
  const sendEmail= async(e)=>{
    e.preventDefault()

    const data={
      email 
    }
    const response = await  axios.post("http://localhost:4000/api/sendmail", data); 
    console.log(response.data); 

  }  // This Arrow function is called after the submit buton is pressed. 
  return (
    <div className="--center-all  --bg-primary --100vh ">
       
      <div className=" --p3 --card  --flex-center --bg-light --dir-column "> 

       <h1 className='--width-100 --mb' >Try out the Emailer, Which will send a Email! </h1>
       
       <div className="--width-500px --flex-center ">
       <form  onSubmit={sendEmail} className="--form-control">
        <input type="email" value={email} 
         placeholder="Email"
         onChange = {(e)=>setEmail(e.target.value)}
        />
        <button type="submit" className='--btn --btn-primary --50px'>
          Send Email
        </button>
      </form>
      </div>

      </div>

    </div>
  );
}

export default App;
