
import { useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaShoppingCart, FaUser, FaSignOutAlt, FaUsers } from "react-icons/fa";
import logo from "../../assets/logo.jpeg";
import { CgProfile } from "react-icons/cg";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../slices/usersApiSlice";
import { logout } from "../../slices/authSlice";
import { resetCart } from "../../slices/cartSlice";
import SearchBox from "../../components/SearchBox";
import { Badge } from "antd";
import "./Header.css";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
       dispatch(resetCart());
      navigate("/login");
    } catch (error) {
      console.log("Error...", error);
    }
  };

  return (
    <header className="header">
      <Navbar
        variant="black"
        expand="lg"
        collapesonselect="true"
        className="navbar navbar-expand-lg  mt-0"
      >
        <Container fluid>
          <LinkContainer to="/"        style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
            <Navbar.Brand
       
            >
              <div>
                <img src={logo} width="108px" alt="lubick"  style={{marginRight:"100px", marginLeft:"15px"}}/>
              </div>

            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor:"white", height:"34px", width:"40px" }}/>

          <Navbar.Collapse id="basic-navbar-nav" style={{marginRight:"15px"}}>
            <SearchBox />
            <Nav className="ms-auto">

              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/about">
                <Nav.Link>About Us</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/policy">
                <Nav.Link>Our Policy</Nav.Link>
              </LinkContainer>
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="adminmenu">

                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>
                      <FaShoppingCart />
                      Orders
                    </NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to="/admin/productlist">
                    <NavDropdown.Item>
                      <BsGrid3X3GapFill />
                      Products
                    </NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>
                      <FaUsers />
                      Users
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}

              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>
                      <CgProfile />
                      Profile
                    </NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    <FaSignOutAlt />
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <FaUser /> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}

              <LinkContainer to="/cart">
                <Nav.Link>
                  Cart
                  <Badge count= {cartItems.reduce((a, c) => a + c.qty, 0)} showZero offset={[10, -5]}>
                    <span style={{ color: "transparent" }}>.</span>
                  </Badge>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
