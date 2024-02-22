// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <div className="navbar container bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="row">
          <h1 className="col-md-8 text-light">Natalie Yaspo</h1>
          <Nav className="col-6 col-md-4" />
        </div>
      </div>
      <main className="mx-3">
        <Outlet />
      </main>
      <footer>
        <div className="container">
        <div className="row">
          <a className="col-6 col-md-4" href="https://github.com/NatalieYaspo"><i className="bi bi-github"></i></a>
          <a className="col-6 col-md-4" href="https://www.linkedin.com/in/natalie-yaspo-567a25a8"><i className="bi bi-linkedin"></i></a>
          <a className="col-6 col-md-4" href="https://stackexchange.com/users/30600440/natalie-yaspo"><i className="bi bi-stack-overflow"></i></a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
