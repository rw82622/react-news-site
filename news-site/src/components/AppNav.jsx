function AppNav({ navItems, handleNavClick }) {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Hacker News</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navItems.map((item) => (
              <li className="nav-item" key={item.label}>
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#"
                  onClick={() => handleNavClick(item.value)}
                >{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default AppNav;
