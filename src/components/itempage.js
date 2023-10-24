import details from "./Data";
import "../itempage.css";
import { useNavigate, useParams } from "react-router-dom";
import SideBag from "./SideBag";

const ItemPage = () => {
  // Use the useParams hook to access the `id` parameter from the URL.
  const { id } = useParams();

  // Find the item details based on the `id` parameter.
  const item = details.find((item) => item.id === parseInt(id));

  if (!item) {
    // Handle the case where the item with the given `id` is not found.
    return <div>Item not found</div>;
  }
  return (
    <div className="container mt-5">
      <div className="item-details mt-5 mb-5" id={item.id}>
        <div className="row mb-5">
          <div className="col-4">
            <img
              className="img-fluid"
              src={item.imageUrl}
              alt={item.productName}
            />
          </div>
          <div className="about col">
            <h1 className="item-name">{item.productName}</h1>
            {item.series && <h3 className="item-series">{item.series}</h3>}
            <p className="rating">
              {" "}
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star-half-o" aria-hidden="true"></i>
              {item.rating}
            </p>
            <h4 className="price">${item.price}</h4>
            <p className="item-info">{item.info}</p>
            <button className="bagbtn">Add To Bag</button>
          </div>
        </div>
        <hr />

        <div className="row mt-5">
          <h2>DESCRIPTION</h2>
          <p className="description">{item.description}</p>
        </div>
      </div>
      <SideBag />
    </div>
  );
};

export default ItemPage;
