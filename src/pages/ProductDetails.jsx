import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProductsAction } from "../actions/productAction";
import { cartAction } from "../actions/cartAction";
export default function ProductDetails({ history }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { reduxSingleProduct } = useSelector((state) => state.products);

  const handleAddToCart = () => {
    dispatch(cartAction({ ...reduxSingleProduct }));
    history.push("/");
  };
  useEffect(() => {
    dispatch(getSingleProductsAction(id));
  }, []);

  return (
    <div className="bg-dark">
      <div className="container bg-secondary">
        <div className="row">
          <div className="col-sm-6 offset-3">
            <div className="card">
              {reduxSingleProduct?.image && (
                <img
                  src={`${process.env.REACT_APP_URL}/${reduxSingleProduct.image}`}
                  className="img-fluid"
                  alt=""
                />
              )}
              <div className="card-body ">
                <ul className="list-group">
                  <li className="list-group-item">
                    Technology :{reduxSingleProduct?.name}
                  </li>
                  <li className="list-group-item">
                    Company Name :{reduxSingleProduct?.brand}
                  </li>
                  <li className="list-group-item">
                    Salary :{reduxSingleProduct?.price}
                  </li>
                  <li className="list-group-item">
                    Vacancy :{reduxSingleProduct?.stock}
                  </li>
                  <li className="list-group-item">
                    Discription :{reduxSingleProduct?.description}
                  </li>
                </ul>
                {/* {reduxSingleProduct?.stock > 0 ? (
                <div>
                  <div className="d-flex justify-content-center mt-4">
                    <button onClick={decrement} className="btn btn-dark">
                      -
                    </button>
                    <span className="mx-4">{count}</span>
                    <button onClick={increement} className="btn btn-dark">
                      +
                    </button>
                  </div>
                 
                </div>
              ) : (
                <p className="mt-4 text-muted">Outoff Stock</p>
              )} */}
                {/* <button
                className="btn btn-dark mt-4 w-100 btn-lg"
                onClick={handleAddToCart}
              >
                Save The Job
              </button> */}
                <button
                  className="btn btn-dark mt-4 w-100 btn-lg"
                  onClick={handleAddToCart}
                >
                  Apply The JOB
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
