
import styles from "./Navbar.module.css";
import { BiLogOutCircle } from "react-icons/bi";
import { useNavigate } from "react-router";


const Navbar = () => {

  const navigate = useNavigate()
    const logoutHandler = () => {
        navigate('/')
        localStorage.clear()
    }


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className={`container-fluid ${styles.navbar_main_container}`}>
        <text className={styles.heading}>My Expense Tracker</text>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${styles.navbar_end_view}`} id="navbarSupportedContent">
                   
          <button
            className={`btn btn-outline-success ${styles.cart_button}`}
            type="submit"
            onClick={logoutHandler}
          >
            <BiLogOutCircle color={'white'} size={25} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

