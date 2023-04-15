import logo from "../../public/logo.png";
const Navbar = ({ onClickExample, onClickNew }) => {
  return (
    <>
      <ul className="menu-item-list">
        <li>
          <a className="active brand" href="/">
            <img src={logo} className="logo" />
          </a>
        </li>
        <li style={{ marginRight: "1rem" }}>
          <ul className="right-menu-items">
            <li>
              <button className="example-btn" onClick={onClickExample}>
                Try Example
              </button>
            </li>
            <li>
              <button className="example-btn" onClick={onClickNew}>
                New CodeME
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
