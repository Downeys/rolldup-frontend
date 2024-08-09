
import Logo from '../../../assets/images/WorkingLogo.png'

export const SavingComponent = () => {

    return (
        <div className='bg-texasGreen flex flex-col justify-center items-center h-screen'>
            <img src={Logo} alt='RolldUp Logo' />
            <p className='text-white font-primary font-bold text-4xl text-shadow'>Saving...</p>
        </div>
    )
}

export default SavingComponent