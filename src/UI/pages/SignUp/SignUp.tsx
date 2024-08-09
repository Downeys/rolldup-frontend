import React from 'react'
import Logo from '../../../assets/images/WorkingLogo.png'
import { useNavWrapper } from '../../../utils/navigate-wrapper/useNavWrapper'
import ErrorIcon from '../../components/icons/ErrorIcon'

export const SignUp = () => {
    const [error, setError] = React.useState('existingEmail')
    const nav = useNavWrapper()

    const errorMessages = {
        existingEmail: "email or username in use please try again"
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        nav('/')
    }

    return (
        <div className='bg-texasGreen flex flex-col justify-center items-center h-screen'>
            <div className='flex flex-row mb-6'>
                <img className='h-10 w-10' src={Logo} alt='RolldUp Logo' />
                <p className='text-white font-primary font-bold text-4xl text-shadow -ml-1 leading-11'>olldUp</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col'>
                    <input className='w-72 py-2 px-4 mx-9 mb-6 rounded font-primary' type='text' placeholder="Username" />
                    <input className='w-72 py-2 px-4 mx-9 mb-6 rounded font-primary' type='text' placeholder="Email" />
                    <input className='w-72 py-2 px-4 mx-9 mb-6 rounded font-primary' type='password' placeholder="Password" />
                    <input className='w-72 py-2 px-4 mx-9 mb-4 rounded font-primary' type='password' placeholder="Confirm Password" />
                    <div className='h-10 mb-3'>
                        {error && <div className='flex flex-col items-center mb-4'>
                            <p className='text-red leading-4'><ErrorIcon /></p>
                            <p className='text-red text-sm font-primary leading-4'>{errorMessages[error]}</p>
                        </div>}
                        <button className='w-72 mx-9 p-2 leading-5 font-bold bg-palm text-white text-lg font-primary border border-white rounded' type='submit'>Sign Up</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUp