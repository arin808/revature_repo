import React, {useState} from 'react'

const Login = () => {
    
    const [state, setState] = useState({
        username: '',   
        password: ''
    })

    function handleSubmit(event: any){
        event.preventDefault();
    }

    function updateUsername(event: any){
        setState({...state, username: event.target.value})
    }

    function updatePassword(event: any){
        setState({...state, password: event.target.value})
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" onChange={updateUsername} />
        <input type="password" placeholder="password" onChange={updatePassword} />\
        <button type="submit">Login</button>
    </form>
  )
}

export default Login