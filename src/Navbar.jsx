import React from 'react'

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="links">FASTEST</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="linksnavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto ">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="links">PRODUKTS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="links">MAINTENANCE</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="links">SUPPORT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="links">ABOUT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="links">CONTACT</a>
        </li>
      
      
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar