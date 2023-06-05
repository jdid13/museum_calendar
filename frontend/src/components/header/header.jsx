export const Header = () => {
    return (
        <header>
            <nav>
                <div className="header-logo-container">
                    <Image
                      src='../public/'
                      alt='profile picture' 
                      className='header-pp-img'/>
                    <span className="header-logo-title">Museum Calendar</span>
                </div>

                <div className='nav-list'>
                    <a className='nav-item' href='/'>Accueil</a>
                    <a className='nav-item' href='/events'>Expositions</a>
                    <a className='nav-item' href='/about-us'>Musées</a>
                </div>
            </nav>
        </header>
    )
}