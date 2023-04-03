import Logo from '/src/assets/logo.svg'
import Illustration from '/src/assets/anime.svg'
import { useState } from 'react' 
import { useNavigate } from 'react-router'

const Login = () => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const navigate = useNavigate()
//SUBMIT FORM
const submitDetails = ( e:any ) => {
    e.preventDefault()
    navigate('dashboard')
    
}
  return (
    <div>
        <div className='login'>
            <div className='login__inner'>
                <div className='login__left'>
                    <div>
                         <img src={Logo} className='logo' alt='logoImg' />
                         <img src={Illustration} className='animation' alt='img' />
                    </div>
                </div>
                <form className='login__form' onSubmit={submitDetails}>
                    <div className='login__form-inner'>
                        <div className='login__form-header'>
                            <h1>Welcome!</h1>
                            <p>Enter details to login.</p>
                        </div>
                        <div className='login__form-control'>
                            <input onChange={e => setEmail(e.target.value)} value={email} placeholder='Email' />
                            <input onChange={e => setPassword(e.target.value)} value={password} placeholder='Password' />
                            <p>FORGOT PASSWORD?</p>
                            <button className='btn' type='submit'>LOG IN</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login