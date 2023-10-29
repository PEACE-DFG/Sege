import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Log() {

  const navigate= useNavigate()

  const [user,setUser]=useState({
    email:'',
    password:''
  })
  
  const [error,setError]=useState('');

  const handleChange=(e)=>{
    const {name,value}= e.target;
    setUser((prevUser)=>({
      ...prevUser,
      [name]:value
    }));
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(localStorage.getItem('users')){
      const users=JSON.parse(localStorage.getItem('users'));
      const matchedUser= users.find(
        (u)=> u.Email=== user.email  && u.Password=== user.password
      );

      if(matchedUser){
        //Suucessful login
        alert('You have been logged In')
        navigate('/')
      }else{
        //Invalid Login
        setError('Invalid Login Details')
      }
    }else{
      //No registered user

      setError("You have not yet registered,Please do so")
    }
  }
  
  return (
    <div>
    <section className="container mt-5">
    <form className="row mt-5"  onSubmit={handleSubmit}>
      <div className="col-md-6 mx-auto">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title text-center">Login</h3>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="text" className="form-control" id="email" name="email" value={user.email}  onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" name="password" value={user.password}  onChange={handleChange} />
            </div>
            {/* errors to display here */}
            {
              error && <div className="alert alert-danger"> {error}</div>
            }

            <div className="text-center">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
            <div className="text-center mt-3">
              {/* <p>Don't have an account? <Link to="/Registers" className='text-success'>Register here</Link></p> */}
            </div>
          </div>
        </div>
      </div>
    </form>
  </section>
    </div>
  )
}

export default Log