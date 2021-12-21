import "./style.css";

const Card = ({ price, onCartClick, onLike, data, image, title }) => {
  let likeClass = "icon fa  fa-heart";
  if (!data.liked) likeClass += "-o";
  return (
    <div className="card m-2">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {price} <br />
        </p>
        <i onClick={() => onLike(data)} className={likeClass}></i>
        <i
          onClick={() => onCartClick(data)}
          className="fa fa-shopping-cart icon cart-icon"
        ></i>
      </div>
    </div>
  );
};

export default Card;
