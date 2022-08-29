import Link from "next/link"


export const MainNavBar=({active})=>{
      return(
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container  ">
         <Link href="/">
         <a className="navbar-brand fs-3 fw-3 ms-5" >
            Covid.
          </a>
         </Link>
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
              <li className={"nav-item pe-3 "} >
               <Link href="/">
               <a className={"nav-link text-black "+active } aria-current="page" >
                  Home
                </a>
               </Link>
              </li>
             
              <li className="nav-item pe-3 dropdown">
                <a
                  className="nav-link text-black "
                  
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
              
              {/* <li className="nav-item pe-3">
                <a className="nav-link text-black" aria-current="page" href="#">
                  Symptoms
                </a>
              </li> */}
              <li className="nav-item pe-3 dropdown">
                <a
                  className="nav-link text-black "
                  
                >
                  Get Vacine
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                   <Link href={"/register"} >
                   <a className="dropdown-item" href="">
                     Register
                    </a>
                   </Link>
                  </li>
                  <li>
                    <Link href={"login"}>
                    <a className="dropdown-item" href="#">
                     Login
                    </a>
                    </Link>
                  </li>
                
                </ul>
              </li>
              <li className="nav-item pe-3">
                <a className="nav-link text-black" aria-current="page" href="#">
                  About Us
                </a>
              </li>

              <li className="nav-item pe-3">
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

export const Footer=()=>{
  return(<div className="footer">
  <div className="container-fluid mx-auto">
<div className="row justify-content-center top-part">
  <div className="col-md-6 text-center center-content">
    <div className="d-flex-inline">
      <h3 className="footer-heading text-white">Start a Project with itCraft</h3>
    </div>
    <div className="d-flex-inline">
      <p className="text-white">
        We are based in Warsaw, Bydgoszcz &amp; Torun in Poland but we are
        Google Cloud Partner we can arrange a meeting at Google Campus in
        Warsaw or in London. We are also present in Norway. Below you will
        find all the contact details you need.
      </p>
    </div>
    <div className="d-flex-inline pt-2">
      <button className="btn-pink btn text-white">ESTIMATE PROJECT</button>
    </div>
  </div>
</div>
<div className="row">
  <div className="line mb-3 mx-auto" />
  <div className="d-md-flex px-5 justify-content-around bd-highlight col-md-12 pt-5 pb-5 mb-3">
    <div className="p-2 flex-fill bd-highlight mb-5 mb-md-0">
      <h3 className="text-white">itCraft</h3>
      <small className="text-white">Copyright © 2019</small>
    </div>
    <div className="p-2 flex-fill bd-highlight mb-3 mb-md-0">
      <h5 className="places text-white">BYDGOCZCZ</h5>
      <p className="mb-0 text-white">Bydgoszcz Centrum Burnesa</p>
      <p className="mb-0 text-white">ul Pzzenmdcwa 25, ibsura 24,</p>
      <p className="mb-0 text-white">B5-7GB Bydgosrdz, Poland</p>
    </div>
    <div className="p-2 flex-fill bd-highlight mb-3 mb-md-0">
      <h5 className="places text-white">TORUN</h5>
      <p className="mb-0 text-white">ul Reyana 2-4</p>
      <p className="mb-0 text-white">A0-100 Torun,</p>
      <p className="mb-0 text-white">Poland</p>
    </div>
    <div className="p-2 flex-fill bd-highlight mb-3 mb-md-0">
      <h5 className="places text-white">WARSAW</h5>
      <p className="mb-0 text-white">Brain Embassy</p>
      <p className="mb-0 text-white">Alaya Jerasublisuble RS123</p>
      <p className="mb-0 text-white">02-222 Warsawa</p>
    </div>
    <div className="p-2 flex-fill bd-highlight mb-3 mb-md-0">
      <h5 className="places text-white">LONDON</h5>
      <p className="mb-0 text-white">Google Campus</p>
      <p className="mb-0 text-white">4-5 Barnhill, Shaneditch</p>
      <p className="mb-0 text-white">London EC2A 4BK</p>
    </div>
    <div className="p-2 flex-fill bd-highlight mb-3 mb-md-0">
      <h5 className="places text-white">NORWAY</h5>
      <p className="mb-0 text-white">Kristiansand</p>
    </div>
  </div>
  <div className="line mb-3 mx-auto" />
</div>
<div className="row bottom-part">
  <div className="d-lg-flex justify-content-between bd-highlight col-md-12 mb-5 px-5">
    <div className="p-2 align-self-center flex-fill bd-highlight">
      <div className="fa fa-facebook px-2" />
      <div className="fa fa-linkedin px-2" />
      <div className="fa fa-twitter px-2" />
      <div className="fa fa-instagram px-2" />
    </div>
    <div className="p-2 row flex-fill bd-highlight justify-content-left">
      <div className="p-2 d-lg-flex">
        <div className="p-2 flex-fill d-flex bd-highlight text-white">Services</div>
        <div className="p-2 flex-fill d-flex bd-highlight text-white">Portfolio</div>
        <div className="p-2 flex-fill d-flex bd-highlight text-white">Pricing</div>
        <div className="p-2 flex-fill d-flex bd-highlight text-white">Testimonials</div>
        <div className="p-2 flex-fill d-flex bd-highlight text-white">Team</div>
        <div className="p-2 flex-fill d-flex bd-highlight text-white">Blog</div>
        <div className="p-2 flex-fill d-flex bd-highlight text-white">Carrer</div>
        <div className="p-2 flex-fill d-flex bd-highlight text-white">How we work</div>
        <div className="p-2 flex-fill d-flex bd-highlight text-white">Manifesto</div>
      </div>
    </div>
    <div className="p-2 align-self-center flex-fill bd-highlight">
      <div className="fa fa-mobile px-2 grey-text">
        &nbsp;&nbsp;<span id="contact text-white">888-777-666</span>
      </div>
      <div className="fa fa-envelope-o px-2 grey-text text-white">
        &nbsp;&nbsp;info@itcraft.in
      </div>
    </div>
  </div>
</div>
</div>

</div>)
}