import React, { useEffect, useReducer, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import WOW from "wowjs";
function Header() {
  const [sidebar, setSidebar] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);


  /*---------header top Sticky event----------*/
  const handleStickyHeader = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

 
  /*---------menu button event----------*/
  const handleSidbarMenu = () => {
    if (sidebar === false || sidebar === 0) {
      setSidebar(1);
    } else {
      setSidebar(false);
    }
  };

/*---------add event scroll top----------*/
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  /*---------Using reducer mange the active or inactive menu----------*/
  const initialState = { activeMenu: "" };
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "homeOne":
        return { activeMenu: "homeOne" };
      case "service":
        return { activeMenu: "service" };
      case "project":
        return { activeMenu: "project" };
      case "blog":
        return { activeMenu: "blog" };
      case "page":
        return { activeMenu: "page" };
      default:
        return { activeMenu: "" };
    }
  }

  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
    window.addEventListener("scroll", handleStickyHeader);
    return () => {
      window.removeEventListener("scroll", () => handleStickyHeader);
    };
  }, []);

  return (
    <>
      <header
        className={`${"header-area position_top"} ${isSticky ? "sticky" : ""}`}
        ref={ref}
      >
        <div className="site-logo">
          <div className="logo">
            <Link to={"/"} onClick={scrollTop}>
              <img
                src={process.env.PUBLIC_URL + "/img/logo.png"}
                alt="logo-img"
              />
            </Link>
          </div>
        </div>
        <div className="main-menu">
          <nav className={sidebar === 1 ? "main-nav slidenav" : "main-nav"}>
            <div className="mobile-menu-logo">
              <Link to={"/"} onClick={scrollTop}>
                <img
                  src={process.env.PUBLIC_URL + "img/logo-dark.png"}
                  alt="images"
                />
              </Link>
              <div className="remove" onClick={handleSidbarMenu}>
                <i className="bi bi-plus-lg" />
              </div>
            </div>
            <ul>
              <li
                className="has-child active"
                onClick={() => dispatch({ type: "homeOne" })}
              >
                <Link
                  to={`${process.env.PUBLIC_URL}`}
                  className={state.activeMenu === "homeOne" ? "active" : ""}
                >
                  Home
                </Link>
              </li>
              <li>
                <NavLink
                  to={`${process.env.PUBLIC_URL}/about`}
                  onClick={scrollTop}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <Link to={`${process.env.PUBLIC_URL}/project`} onClick={() => dispatch({ type: "project" })}>
                  Projects
                </Link>
              </li>
              
              
              <li>
                <NavLink
                  to={`${process.env.PUBLIC_URL}/contact`}
                  onClick={scrollTop}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className="get-qoute d-flex justify-content-center d-lg-none d-block pt-50">
                    <div className="cmn-btn">
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                        <Link to={`${process.env.PUBLIC_URL}/contact`} onClick={scrollTop}>Get A Quote</Link>
                    </div>
                </div>
          </nav>
        </div>
        
        <div className="nav-right">
          <div className="get-qoute">
            <div className="cmn-btn">
              <div className="line-1" />
              <div className="line-2" />
              <Link
                to={`${process.env.PUBLIC_URL}/contact`}
                onClick={scrollTop}
              >
                Get A Quote
              </Link>
            </div>
          </div>
          <div className="mobile-menu">
            <Link to="#" onClick={handleSidbarMenu} className={"cross-btn"}>
              <span className="cross-top" />
              <span className="cross-middle" />
              <span className="cross-bottom" />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
