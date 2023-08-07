import myImage from './images/plane.svg';
import './navbar.css'


function Navbar() {
  return (
    <>
      <nav className="navbar">
       
        <div className="left">
        TRAVEL <img src={myImage} alt="Plane" />
        </div>
        <div className="right">
          <div className='a1'>Home</div>
          <div className='a1'>Services</div>
          <div className='a1'>Products</div>
          <button>Sign UP</button>
          <div></div>
        </div>

      </nav>
    </>
  );
}

export default Navbar;