import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import M from "materialize-css"


const SignUp = () =>{
   const navigate = useNavigate()
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const handleUserData  = ()=>{
    let  regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
    const regexPswd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/

      if(!regexEmail.test(email)){
         M.toast({html : "Enter Valid Email ", classes:"#e53935 red darken-1"});
         return;
      }
      if(!regexPswd.test(password)){
         M.toast({html :`Password should contain 8 to 15 characters which contain at least one lowercase letter,
             one uppercase letter, one numeric digit, and one special character  `, classes:"#e53935 red darken-1"});
         return;
      }
      fetch("/signup", {
         method : "post",
         headers:{
            "Content-Type" : "application/json"
         },
         body : JSON.stringify({
            name,
            email, 
            password
         })
      }).then(res=>res.json()).then(userdata=>{
         if(userdata.error){
            M.toast({html: userdata.error, classes:"#ef5350 red lighten-1"})
         }  else{
            M.toast({html : userdata.message, classes:"#81c784 green lighten-2"})
            navigate('/signin')
         }
      }).catch(err=>{console.log(err)})
   }

 return(
   <div className="my-card">
   <div className="card card-auth input-field">
      <div>
         <h2> InstaClone </h2>
         <input
            type="text"
            placeholder="Name"
            value ={name}
            onChange={(e)=>setName(e.target.value)}
         />
         <input
            type="text"
            placeholder="email"
            value ={email}
            onChange={(e)=>setEmail(e.target.value)}
         />
         <input
            type="text"
            placeholder="password"
            value ={password}
            onChange={(e)=>setPassword(e.target.value)}
         />
         <button className="btn waves-effect waves-light #ffa726 orange darken-1" 
                  onClick={()=>handleUserData()}
         >
            SignUp
         </button>
      </div>
      <p>
         <Link to='/signin'> Already Have an Account ? </Link>
      </p>

   </div>
</div>
 )
}

export default SignUp;