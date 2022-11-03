const SideBar = ({children}) => {
    return ( 
        <div className="admin">
      <div className="px-0 bg-light">
        <div className="d-flex">
          <div className="d-flex align-items-center " id="navbar">
            {" "}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar-items"
              aria-controls="navbarSupportedContent"
              aria-expanded="true"
              aria-label="Toggle navigation"
            >
              {" "}
              <span className="fas fa-bars" />{" "}
            </button>{" "}
            <a className="text-decoration-none fs14 ps-2" href="#">
              ACQUIRED<span className="fs13 pe-2">.com</span>
            </a>{" "}
          </div>
          <div id="navbar2" className="d-flex justify-content-end pe-4">
            {" "}
            <span className="far fa-user-circle " />{" "}
          </div>
        </div>
        <div className="d-md-flex">
          <ul id="navbar-items" className="p-0">
            <li>
              {" "}
              <span className="fas fa-th-list" />{" "}
              <span className="ps-3 name">Users</span>{" "}
            </li>
            <li>
              {" "}
              <span className="fas fa-chart-line" />{" "}
              <span className="ps-3 name">Facilities</span>{" "}
            </li>
            <li>
              {" "}
              <span className="fas fa-clipboard-check" />{" "}
              <span className="ps-3 name">Vacines</span>{" "}
            </li>
            <li>
              {" "}
              <span className="fas fa-suitcase-rolling" />{" "}
              <span className="ps-3 name">frauds</span>{" "}
            </li>
            <li>
              {" "}
              <span className="fas fa-calendar-alt" />{" "}
              <span className="ps-3 name">account</span>{" "}
            </li>
            <li>
              {" "}
              <span className="fas fa-comment-alt" />{" "}
              <span className="ps-3 name">reqests</span>{" "}
            </li>
            <li>
              {" "}
              <span className="fas fa-store-alt" />{" "}
              <span className="ps-3 name">merchants</span>{" "}
            </li>
          </ul>
          {children}
        </div>
      </div>
    </div>
     );
}
 
export default SideBar;