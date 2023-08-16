import Perfil from '../img/users/Perfil.jfif'

// memoria temporaria
const userName = [
    'Lizandro',
    'Tiago',
    'Valdenberg'
]

const setor = "TI"

function UserCard() {
    return (
        <section className='flex bg-gray-700 py-3 px-7 rounded-2xl'>
            <section className='flex flex-col items-center justify-center mr-5'>
                <span className='text-white'>{userName[0]}</span>
                <span className='text-white'>{setor}</span>
            </section>
            <img className='w-12' src={Perfil} alt="Foto de perfil do user" />
        </section>
    )
}

export default UserCard;