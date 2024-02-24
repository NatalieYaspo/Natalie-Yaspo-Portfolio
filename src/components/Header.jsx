import Nav from './NavTabs';

function Header() {
    return (
        <header className="d-flex flex-wrap justify-content-center w-100 py-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <span className="fs-1">Natalie Yaspo</span>
            </a>
            <Nav className="col-6 col-md-4" />
        </header>
    )
}


export default Header;