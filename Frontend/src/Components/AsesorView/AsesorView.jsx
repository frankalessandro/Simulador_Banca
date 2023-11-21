import './AsesorView.css'
import Logo from '../../Assets/Logos/ClearBank LogoOnly.svg'
import personIcon from '../../Assets/Icons/personIcon.svg'
import messageIcon from '../../Assets/Icons/messageIcon.svg'
import notificationIcon from '../../Assets/Icons/notificationIcon.svg'

export const AsesorView = () => {
    return (
        <>
            <div className="asesorView--container">

                <section className='sideBar--container'>
                    <header className='sideBar--header'>
                        <div className="sideBar--header--topLogo">
                            <img src={Logo} alt="Logo" />
                        </div>
                    </header>
                    <main className='sideBar--main'>
                        <div className="sideBar--main--tittle">
                            <span className='sideBar--main--tiitle--content'>Productos bancarios</span>
                        </div>
                        <div className="sideBar--main--product">
                            <ul>
                                <li>Cuentas Bancarias</li>
                                <div className="sideBar--main--product--dropmenu">
                                    <span>Cuenta Ahorro</span>
                                    <span>Cuenta Corriente</span>
                                </div>
                                <li>CDT</li>
                                <li>Tarjetas de credito</li>
                            </ul>
                        </div>

                    </main>
                    <footer className='sideBar--footer'>
                        <div className="sideBar--footer--content">
                            <span>Salir</span>
                        </div>
                    </footer>
                </section>

                <section className='topBar--container'>

                    <div className="topBar--user">
                        <img className='topBar--user--icon' src={personIcon} alt="" />
                        <span className='topBar--span--user'>Bienvenido, Asesor</span>
                    </div>
                    <div className="topBar--actions">
                        <img className='topBar--actions--content' src={notificationIcon} alt="" />
                        <img className='topBar--actions--content' src={messageIcon} alt="" />
                    </div>
                </section>
            </div>

        </>
    )
}
