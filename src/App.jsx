// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>

      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <span className="fs-1">Natalie Yaspo</span>
        </a>
        <Nav className="col-6 col-md-4" />
      </header>


      <main className="mx-3">
        <Outlet />
      </main>


      <footer className="footer mt-auto py-3 d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="mb-3 mb-md-0 text-body-secondary">© 2024 Natalie Yaspo</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3"><a className="text-body-secondary" href="https://github.com/NatalieYaspo"><i className="bi bi-github" width="24" height="24"></i></a></li>
          <li className="ms-3"><a className="text-body-secondary" href="https://www.linkedin.com/in/natalie-yaspo-567a25a8"><i className="bi bi-linkedin" width="24" height="24"></i></a></li>
          <li className="ms-3"><a className="text-body-secondary" href="https://stackexchange.com/users/30600440/natalie-yaspo"><i className="bi bi-stack-overflow" width="24" height="24"></i></a></li>
        </ul>
      </footer>

    </>
  );
}

export default App;