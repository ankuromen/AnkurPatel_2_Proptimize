import { useNavigate } from 'react-router-dom';
import '../App.css';

const Home = () => {
  let navigate = useNavigate();

  let handlelogout = () => {
    localStorage.clear('token');
    navigate('/');
  };
return (
    <>
      <nav>
        <nav className="navbar">
          <div className="container">
            <div className="logo">
              HOME PAGE
            </div>
            <div className="nav-elements">
              <button id="logout-btn" onClick={handlelogout}>Logout</button>
            </div>
          </div>
        </nav>
      </nav>
      <h1 id="heading-top"> CONTENT HERE!!</h1>
    </>
  );
};

export default Home;
