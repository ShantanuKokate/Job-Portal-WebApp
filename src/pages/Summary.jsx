import React from "react";
import { useSelector } from "react-redux";
export default function Summary({ history }) {
  const { cartItem } = useSelector((state) => state.cart);
  return (
    <div className="container">
      <ul className="list-group mt-5">
        <li className="list-group-item">
          <div className="d-flex justify-content-between align-items-center">
            {/* <h2>{`${item.name}`}</h2> */}
            <h2>{`Recruiter Seen`}</h2>
            {/* <h2>{`Seen`}</h2> */}
            <h2>{`Approve`}</h2>
            <h2>{`Reject`}</h2>
            <h2>{`Next Process`}</h2>
          </div>
        </li>
        {cartItem.map((item) => {
          return (
            <>
              <li className="list-group-item">
                <div className="d-flex justify-content-between align-items-center">
                  <input
                    style={{ height: 30, width: 30 }}
                    type="checkbox"
                    checked
                  />
                  <input style={{ height: 30, width: 30 }} type="checkbox" />
                  <input style={{ height: 30, width: 30 }} type="checkbox" />
                  <input style={{ height: 30, width: 30 }} type="checkbox" />
                </div>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}
