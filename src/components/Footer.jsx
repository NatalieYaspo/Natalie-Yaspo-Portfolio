function Footer() {
    return (
    <footer className="footer mt-auto py-3 d-flex w-100 flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="mb-3 mb-md-0">© 2024 Natalie Yaspo</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3"><a className="text-white" href="https://github.com/NatalieYaspo"><i className="bi bi-github" width="24" height="24"></i></a></li>
          <li className="ms-3"><a className="text-white" href="https://www.linkedin.com/in/natalie-yaspo-567a25a8"><i className="bi bi-linkedin" width="24" height="24"></i></a></li>
          <li className="ms-3"><a className="text-white" href="https://stackexchange.com/users/30600440/natalie-yaspo"><i className="bi bi-stack-overflow" width="24" height="24"></i></a></li>
        </ul>
      </footer>
    );
}

export default Footer;