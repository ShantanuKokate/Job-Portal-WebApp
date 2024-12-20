import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCartAction } from "../actions/cartAction";
export default function CartProduct({ item }) {
  const dispatch = useDispatch();
  const handleRemoveFromCart = (id) => dispatch(removeFromCartAction(id));

  return (
    <div key={item._id} className="col-sm-6 offset-sm-3  mt-4 ">
      <div className="card border-0 mb-3">
        <div className="row g-0">
          {/* <div className="col-md-4">
            <img
              src={`${process.env.REACT_APP_URL}/${item.image}`}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div> */}
          <div className="col-md-12 ">
            <div className=" card-body ">
              <li className="list-group-item">Company Name : {item.brand}</li>
              <li className="list-group-item">Technology : {item.name}</li>
              <li className="list-group-item">Salary Range : {item.price}</li>
              <li className="list-group-item">Vacacy : {item.stock}</li>
              <li className="list-group mt-3">
                <button
                  onClick={(e) => {
                    handleRemoveFromCart(item._id);
                  }}
                  className="btn btn-outline-danger w-100"
                >
                  <i class="bi bi-trash"></i>
                </button>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
