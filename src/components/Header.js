function Header() {
  return (
    <header className="bg-purple">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-purple">
          <a className="navbar-brand" href="#">
            <img src="img/img-logo.png" className="img-logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Discover
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Analytics
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Help
                </a>
              </li>
            </ul>
            <a href="#" className="btn bg-purple-100 text-white mr-2">
              Get Started
            </a>
            <a href="#" className="btn bg-sec-custom">
              Login
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
