function AppNav({ navItems, handleNavClick }) {

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Hacker News</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            {navItems.map((item) => (
              <li class="nav-item">
                <a
                  key={item.label}
                  class="nav-link"
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
