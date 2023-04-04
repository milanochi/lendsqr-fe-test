import Logo from '/src/assets/logo.svg'
import Illustration from '/src/assets/anime.svg'
import { useState } from 'react' 
import { useNavigate } from 'react-router'

const Login = () => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [togglePassword, setTogglePassword] = useState('text')
const navigate = useNavigate()
//SUBMIT FORM
const submitDetails = ( e:any ) => {
    e.preventDefault()
    navigate('dashboard')
    
}
//TOGGLE BUTTON
const toggleButton = () => {
    if(togglePassword === 'text') {
        setTogglePassword('password')
    }
    else {
        setTogglePassword('text')
    }

}

  return (
    
        <div className='login'>
                <div className='login__left'>
                    <div>
                         <img src={Logo} className='logo' alt='logoImg' />
                         <img src={Illustration} className='animation' alt='img' />
                    </div>
                </div>
                <section className='login__form' onSubmit={submitDetails}>
                    <form className='login__form-inner'>
                        <div className='login__form-header'>
                            <h1>Welcome!</h1>
                            <p>Enter details to login.</p>
                        </div>
                        <div className='login__form-control'>
                            <input onChange={e => setEmail(e.target.value)} required value={email} placeholder='Email' />
                            <div style={{position:'relative'}} >
                            <input type={togglePassword} style={{width: '100%', position: 'relative'}} onChange={e => setPassword(e.target.value)}  value={password} placeholder='Password' />
                            <p onClick={toggleButton} style={{position : 'absolute',top:'16px', right:'2%', fontWeight:'400', fontSize:'10px', cursor:'pointer'}}>SHOW</p>
                            </div>
                            <p>FORGOT PASSWORD?</p>
                            <button className='btn' type='submit'>LOG IN</button>
                        </div>
                    </form>
                </section>
            </div>
     
  )
}

export default Login