

export const MainNavBar=()=>{
      return(
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container  ">
          <a className="navbar-brand fs-3 fw-3 ms-5" href="#">
            Covid.
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-4 mb-2 mb-lg-0">
              <li className="nav-item pe-5">
                <a className="nav-link text-black" aria-current="page" href="#">
                  Home
                </a>
              </li>
             
              <li className="nav-item pe-5 dropdown">
                <a
                  className="nav-link "
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Preventions
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Stay At home
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                     Keep Social Distancing
                    </a>
                  </li>
                  
                  <li>
                    <a className="dropdown-item" href="#">
                    Wear FaceMask
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Wash Your Hands
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              
              <li className="nav-item pe-5">
                <a className="nav-link text-black" aria-current="page" href="#">
                  Symptoms
                </a>
              </li>
              <li className="nav-item pe-5">
                <a className="nav-link text-black" aria-current="page" href="#">
                  Get Vercine
                </a>
              </li>

              <li className="nav-item pe-5">
                <a className="nav-link text-black" aria-current="page" href="#">
                  About Us
                </a>
              </li>

              <li className="nav-item pe-5">
                <a className="nav-link text-black" aria-current="page" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
      
      )
}