import "./styles.css";

const NavBaracrtBadge = ({ number }) => {
  return (
    <div className="icon-wrapper">
      <i className="fa fa-shopping-cart nav-item"></i>
      <span className="badge">{number}</span>
    </div>
  );
};

export default NavBaracrtBadge;
