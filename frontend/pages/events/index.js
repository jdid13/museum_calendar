const EventsPage = () => {
    return <div>
        <header>
            <nav>
                <div className="header-logo-container">
                    <img />
                    <span className="header-logo-title">Nadir Benadda</span>
                </div>

                <div>
                    <a href='/'> Home </a>
                    <a href='/events'> Events </a>
                    <a href='/about-us'> About Us </a>
                </div>
            </nav>
        </header>
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
    </div>
}

export default EventsPage;

