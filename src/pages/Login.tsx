import Logo from '/src/assets/logo.svg'
import Illustration from '/src/assets/anime.svg'
import { useNavigate } from 'react-router'
import { useAppContext } from '../context/AppContext'
import { useEffect } from 'react'

const Login = () => {
    const { firstName, lastName, setFirstName, setLastName } = useAppContext()

    const navigate = useNavigate()
    //SUBMIT FORM
    const submitDetails = (e: any) => {
        e.preventDefault()
        navigate('dashboard')

    }
    //TOGGLE BUTTON
    // const toggleButton = () => {
    //     if (togglePassword === 'password') {
    //         setTogglePassword('text')
    //     }
    //     else {
    //         setTogglePassword('password')
    //     }

    // }

    const handleFirstName = (event: any) => {
        const value = event.target.value;
        setFirstName(value);
        localStorage.setItem('firstName', value);
    };

    const handleLastName = (event: any) => {
        const value = event.target.value;
        setLastName(value);
        localStorage.setItem('lastName', value);
    };
    return (

        <div className='login'>
            <div className='login__left'>
                <div>
                    <img src={Logo} className='logo' alt='logoImg' />
                    <img src={Illustration} className='animation' alt='img' />
                </div>
            </div>
            <section className='login__form'>
                <form className='login__form-inner' onSubmit={submitDetails}>
                    <div className='login__form-header'>
                        <h1>Welcome!</h1>
                        <p>Enter details to proceed.</p>
                    </div>
                    <div className='login__form-control'>
                        <div>
                            <div>
                                <label style={{ paddingBottom: '1rem', fontSize: '.8em' }}>First Name</label>
                                <input onChange={handleFirstName} required placeholder='Enter First Name' style={{ width: '100%', marginTop: '.6rem' }} />
                            </div>

                            <div style={{ display: 'block' }}>
                                <label style={{ paddingBottom: '1rem', fontSize: '.8em' }}>Last Name</label>
                                <input type='text' onChange={handleLastName} style={{ width: '100%', position: 'relative', marginTop: '.6rem' }} required placeholder='Enter Last Name' />
                            </div>

                            {/* <input type={togglePassword} style={{width: '100%', position: 'relative'}} required onChange={e => setPassword(e.target.value)}  value={password} placeholder='Password' />
                            <p onClick={toggleButton} style={{position : 'absolute',top:'18px', right:'2%', fontWeight:'400', fontSize:'10px', cursor:'pointer'}}>SHOW</p> */}
                        </div>
                        {/* <p>FORGOT PASSWORD?</p> */}
                        <button className='btn' type='submit'>PROCEED</button>
                    </div>
                </form>
            </section>
        </div>

    )
}

export default Login