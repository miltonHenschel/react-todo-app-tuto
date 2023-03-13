import { Link, Route, Routes } from 'react-router-dom';

import Home from '../routes/Home';
import About from '../routes/About';
import Profile from '../routes/Profile';
import Login from '../routes/Login';
import NotMatch from '../routes/NotMatch';
import AboutApp from '../routes/AboutApp';
import AboutDev from '../routes/AboutDev';
import Contact from '../routes/Contact';

import '../styles/app.css';

function TodoApp() {
  return (
    <>
      <nav className="nav-bgcolor">
        <ul className="nav-container">
          <li className="nav-child">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-child">
            <Link className="nav-link" to="about">
              About
            </Link>
          </li>
          <li className="nav-child">
            <Link className="nav-link" to="profile">
              Profile
            </Link>
          </li>
          <li className="nav-child">
            <Link className="nav-link" to="login">
              Login
            </Link>
          </li>
          <li className="nav-child">
            <Link className="nav-link" to="contact">
              Contact
            </Link>
          </li>
          <li className="nav-child">
            <Link className="nav-link" to="../">
              <span>&larr;</span>
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="about-app" element={<AboutApp />} />
          <Route path="about-dev" element={<AboutDev />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<Contact />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </>
  );
}

export default TodoApp;
