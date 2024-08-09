
import Logo from '../../../assets/images/WorkingLogo.png'

export const SplashComponent = () => {

    return (
        <div className='bg-texasGreen flex flex-col justify-center items-center h-screen'>
            <img src={Logo} alt='RolldUp Logo' />
            <p className='text-white font-primary font-bold text-4xl text-shadow'>RolldUp</p>
        </div>
    )
}

export default SplashComponent