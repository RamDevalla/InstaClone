import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import M from "materialize-css"


const SignIn = () => {
   const navigate = useNavigate()
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const handleUserData  = ()=>{
    const  regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
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
      fetch("/signin", {
         method : "post",
         headers:{
            "Content-Type" : "application/json",
         },
         body : JSON.stringify({
            email, 
            password
         })
      }).then(res=>res.json()).then(userdata=>{
         console.log(userdata)
         if(userdata.error){
            M.toast({html: userdata.error, classes:"#ef5350 red lighten-1"})
         }  else{
            localStorage.setItem("jwt", userdata.token)
            localStorage.setItem("user", JSON.stringify(userdata.user))

            M.toast({html : "Successfully SignedIn", classes:"#81c784 green lighten-2"})
            navigate('/home')
         }
      }).catch(err=>{console.log(err)})
   }
   return (
      <div className="my-card">
         <div className="card card-auth input-field">
            <div>
               <h2> InstaClone </h2>
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
                  onClick={()=>handleUserData()}>
                  LOGIN
               </button>
            </div>
            <p>
               <Link to='/signup'> Dont Have an Account ? </Link>
            </p>

         </div>
      </div>

   )
}

export default SignIn;