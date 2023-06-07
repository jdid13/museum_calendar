import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
    return (
        <header>
            <nav>
                <div className="header-logo-container">
                    <Image
                      src="/MC-logo.svg"
                      alt='profile picture' 
                      className='header-pp-img'
                      width={80}
                      height={80} />
                    <span className="header-logo-title">Museum Calendar</span>
                </div>

                <div className='nav-list'>
                    <Link className='nav-item' href='/'>Accueil</Link>
                    <Link className='nav-item' href='/events'>Expositions</Link>
                    <Link className='nav-item' href='/about-us'>Musées</Link>
                </div>
            </nav>
        </header>
    )
}