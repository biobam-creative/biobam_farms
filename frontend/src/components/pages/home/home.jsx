import "./style.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homebackground">
      <div className="row h-100 align-items-center">
        <div className="col-12 text-center ml-8">
          <h1 className="display-2">Welcome to Biobam Farms</h1>
          <p className="tagline">
            We are commited to bring you the best of Agriculture.
          </p>
          <Link className="links m-2" to="/products">
            Check our Products
          </Link>
          <Link className="links m-2" to="/blog">
            Visit our Blog
          </Link>
        </div>

        <div className="row align-items-center">
          <div className="col-sm-lg-6 text-center align-items-center"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
