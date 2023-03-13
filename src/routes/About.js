import { Link, Outlet } from 'react-router-dom';
import { useState, useRef } from 'react';
import useOnClickOutside from '../useOnClickOutside';

function About() {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, dropdown, () => setDropdown(false));

  return (
    <>
      <nav>
        <ul className="nav-container">
          <li className="nav-child" ref={ref}>
            <button
              className="nav-link"
              type="button"
              onClick={() => setDropdown((prev) => !prev)}
            >
              About
              {' '}
              <span>&#8595;</span>
            </button>
            {dropdown && (
              <ul className="nav-container">
                <li className="nav-child">
                  <Link className="nav-link" to="about-app">
                    App
                  </Link>
                </li>
                <li className="nav-child">
                  <Link className="nav-link" to="about-dev">
                    Developer
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
        <Outlet />
      </nav>
    </>
  );
}

export default About;
