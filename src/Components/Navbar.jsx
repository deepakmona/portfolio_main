import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-#0a192f bg-#0a192f">
      <div className="container-fluid">
        <a style={{color:"White"}} className="navbar-brand" href="/">Portfolio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse start" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a style={{color:"White"}} className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a style={{color:"White"}} className="nav-link active" aria-current="page" href="/">About</a>
            </li>
            <li className="nav-item">
              <a style={{color:"White"}} className="nav-link active" aria-current="page" href="/">Projects</a>
            </li>
            <li className="nav-item">
              <a style={{color:"White"}} className="nav-link active" aria-current="page" href="/">Education</a>
            </li>
            <li className="nav-item">
              <a style={{color:"White"}} className="nav-link active" aria-current="page" href="/">Contact</a>
            </li>
            <li className="nav-item">
            <a style={{color:"White"}} className="nav-link active" aria-current="page" href="/">Resume</a>
            </li>
                      
            <li className="nav-item">
            <a style={{color:"White"}} className="nav-link active" aria-current="page" href="/">Resume</a>
            </li>
                      
            <li className="nav-item">
            <a style={{color:"White"}} className="nav-link active" aria-current="page" href="/">Resume</a>
            </li>
                      
          </ul>
         
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
