function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg color1">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav elements">
            <li className="nav-item active">
              <button className="btn shadow-none">
                <p className="color2">Home</p>
              </button>
            </li>
            <li className="nav-item">
              <button className="btn shadow-none">
                <p className="color2">Projects</p>
              </button>
            </li>
            <li className="nav-item">
              <button className="btn shadow-none">
                <p className="color2">Contact Me</p>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
