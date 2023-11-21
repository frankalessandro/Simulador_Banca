import './AsesorView.css'
import Logo from '../../Assets/Logos/ClearBank LogoOnly.svg'
import personIcon from '../../Assets/Icons/personIcon.svg'

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
                            <p>Productos bancarios</p>
                        </div>
                        <div className="sideBar--main--product">
                            <p>Cuentas Bancarias</p>
                            <div className="sideBar--main--product--dropmenu">
                                <p>Cuenta Ahorro</p>
                                <p>Cuenta Corriente</p>
                            </div>
                        </div>

                    </main>
                    <footer className='sideBar--footer'>
                        <div className="sideBar--footer--content">
                            <p>Salir</p>
                        </div>
                    </footer>
                </section>

                <section className='topBar--container'>

                    <div className="topBar--user">
                        <img className='topBar--user--icon' src={personIcon} alt="" />
                        <span className='topBar--span--user'>Bienvenido, Asesor</span>
                    </div>

                </section>
            </div>

        </>
    )
}
