import { useState } from "react"
import { useNavigate } from "react-router-dom";
function Register() {
    const navigate=useNavigate();

    const [user, setUser]=useState({
        Name:'',
        Email:'',
        Password:'',
        RepeatPassword:''
    })
    const [errors,setErrors]=useState({});

    const submitData=(e)=>{
        e.preventDefault();

        const newErrors={};
        //conditional statements
        if(user.Name.trim()===""){
            newErrors.NameErr="Your Name is Required"
        } 
        if(user.Email.trim()===""){
            newErrors.EmailErr="Your Email is Required"
        } 
        if(user.Password.trim()===""){
            newErrors.PasswordErr="Your Password is Required"
        }  if(user.RepeatPassword.trim()===""){
            newErrors.RepeatPasswordErr="Your Password is Required"
        }
        else if(user.Password.trim()!== user.RepeatPassword.trim()){
            newErrors.RepeatPasswordErr="Your Password does not match"

        }
        setErrors(newErrors);
        if(Object.keys(newErrors).length===0 ){
            const users= JSON.parse(localStorage.getItem('users'))||[];
            users.push(user);
            localStorage.setItem('users',JSON.stringify(users));
            navigate('/login')
        }
    }

  return (
    <div>
            <section className=' container mt-5'>
 <form action=""  className='rew' onSubmit={submitData} >
 <div className='rod mt-5' style={{maxWidth:'400px',margin:'auto'}}>
     <div className='roo text-center'>
     <h1 className='text-center text-dark'>
         Register  
     </h1>
     </div>
            <div className="form-floating my-3">
            <input type="text" className="form-control" id="floatingInput" placeholder="Name"
                onChange={(e)=>{
                    setUser({...user, Name:e.target.value})
                }}
            />
            <label htmlFor="floatingInput" name="Name">Name</label>
            {errors.NameErr && <span style={{ color:'red' }}>{errors.NameErr}</span> }
            </div>
            <div className="form-floating my-3">
                 <input type="email" className="form-control" id="floatingPassword" placeholder="Email"
                onChange={(e)=>{
                    setUser({...user, Email:e.target.value})
                }}
                />
                  
                  <label htmlFor="floatingPassword" name='Email'>Email</label>
                  {errors.EmailErr && <span style={{ color:'red' }}>{errors.EmailErr}</span> }

                  </div>
             <div className="form-floating">
                 <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
            onChange={(e)=>{
                setUser({...user, Password:e.target.value})
            }}
                />
                  
                  <label htmlFor="floatingPassword" name='Password'>Password</label>
                  {errors.PasswordErr && <span style={{ color:'red' }}>{errors.PasswordErr}</span> }

                  </div>
                  <div className="form-floating mt-3">
                  <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
              onChange={(e)=>{
                setUser({...user, RepeatPassword:e.target.value})
            }}
                  />
                  <label htmlFor="floatingPassword" name='RepeatPassword'>RepeatPassword</label>
                  {errors.RepeatPasswordErr && <span style={{ color:'red' }}>{errors.RepeatPasswordErr}</span> }

                  </div> 
 <div className="col-12 text-center">
     <button className="btn btn-success my-3"  type="submit">Register</button>
   </div>
 </div>
 </form>
 </section>
    </div>
  )
}

export default Register