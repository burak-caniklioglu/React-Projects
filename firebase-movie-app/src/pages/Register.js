import React, { useState } from "react";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  }
  return (
    <div className="d-flex justify-content-center">
      <div className="form-image">
        <img src={'https://picsum.photos/800/800'} alt=''/>
      </div>
      <div className="register-form">
        <h1 className="form-title display-3">Register</h1>
        <form id="register" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="first-name" className="form-label">First Name</label>
            <input 
            type="text" 
            className="form-control"
            id="first-name"
            placeholder="Enter your first name.."
            onChange={(e)=> setFirstName(e.target.value)} 
            value={firstName}/>
          </div>
          <div className="mb-3">
            <label htmlFor="last-name" className="form-label">Last Name</label>
            <input 
            type="text" 
            className="form-control"
            id="last-name"
            placeholder="Enter your last name.." 
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}/>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">e-mail</label>
            <input 
            type="text" 
            className="form-control"
            id="email"
            placeholder="Enter your email address.."
            onChange={(e) => setEmail(e.target.value)} 
            value={email}/>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">password</label>
            <input 
            type="text" 
            className="form-control"
            id="password"
            placeholder="Enter your password.." 
            onChange={(e) => setPassword(e.target.value)}
            value={password}/>
          </div>
          <input type="submit" className ='btn btn-primary form-control' value="Register" />
        </form>
      </div>
    </div>
  )
};

export default Register;
