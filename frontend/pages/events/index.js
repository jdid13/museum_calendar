import { Header } from '../../src/components/header/header'
import { Footer } from '../../src/components/footer/footer';

const EventsPage = () => {
    return <div>
        <Header/>
        <main>
            <h1>Event page</h1>
            
            <div>
                <a href=''>
                    <img />
                    <h2>Events in London</h2>
                </a>

                <a href=''>
                    <img />
                    <h2>Events in San Francisco</h2>
                </a>

                <a href=''>
                    <img />
                    <h2>Events in Barcelona</h2>
                </a>
            </div>
        </main>
        <Footer />
    </div>
}

export default EventsPage;

