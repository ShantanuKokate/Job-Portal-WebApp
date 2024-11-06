import React from "react";
import "./../App";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function ProductCard({ item }) {
  return (
    <Link
      to={`/product-details/${item._id}`}
      style={{ textDecoration: "none" }}
    >
      <div className="card mt-3 bg-secondary">
        <div className="card-body border-4 border-secondary">
          <ul className="list-group  ">
            <li className=" cursur-pointer  list-unstyled text-decoration-none text-white">
              {" "}
              <strong>Technology:</strong> {item.name}
            </li>
            <li className=" cursur-pointer list-unstyled text-decoration-none text-white">
              {" "}
              <strong>Company:</strong> {item.brand}
            </li>
            <li className=" cursur-pointer list-unstyled text-decoration-none text-white">
              {" "}
              <strong>Salary:</strong> {item.price}
            </li>
            <li className=" cursur-pointer list-unstyled text-decoration-none text-white">
              {" "}
              <strong>Vacancy:</strong> {item.stock}
            </li>
            <li className=" cursur-pointer list-unstyled text-decoration-none text-white">
              {" "}
              <strong>Role:</strong> {item.internship}
            </li>
          </ul>

          <button className="m-3 bg-info border-0 hover-zoom  ">
            Click Here
          </button>
        </div>
      </div>

      {/* <div class="container">
        <div class="leftSide">
          <div class="header">
            <div class="userimg">
              <img src="./favicon.ico" class="cover" alt="" />
            </div>
            <ul class="nav-icons">
              <li>
                <span class="material-symbols-outlined">edit</span>
              </li>
            </ul>
          </div>

          <div class="search_chat">
            <div>
              <input type="text" placeholder="Search or start new Chat" />

              <i>
                <span class="material-symbols-outlined">search</span>
              </i>
            </div>
          </div>

          <div class="chatlist">
            <div class="block active">
              <div class="imgbx">
                <img src="./logo192.png" class="cover" alt="" />
              </div>
              <div class="details">
                <div class="listHead">
                  <h4>Muhmub shayad</h4>
                  <p class="time">10:50</p>
                </div>
                <div class="message_p">
                  <p>How to make Whatsapp clone using html and css only</p>
                </div>
              </div>
            </div>
            <div class="block unread">
              <div class="imgbx">
                <img src="./favicon.ico" class="cover" alt="" />
              </div>
              <div class="details">
                <div class="listHead">
                  <h4>Amol Rathod</h4>
                  <p class="time">9:50</p>
                </div>
                <div class="message_p">
                  <p>hi i am amol rathod </p>
                  <b>1</b>
                </div>
              </div>
            </div>
            <div class="block ">
              <div class="imgbx">
                <img src="./logo192.png" class="cover" alt="" />
              </div>
              <div class="details">
                <div class="listHead">
                  <h4>Muhmub shayad</h4>
                  <p class="time">10:50</p>
                </div>
                <div class="message_p">
                  <p>How to make Whatsapp clone using html and css only</p>
                </div>
              </div>
            </div>
            <div class="block ">
              <div class="imgbx">
                <img src="./logo192.png" class="cover" alt="" />
              </div>
              <div class="details">
                <div class="listHead">
                  <h4>Muhmub shayad</h4>
                  <p class="time">10:50</p>
                </div>
                <div class="message_p">
                  <p>How to make Whatsapp clone using html and css only</p>
                </div>
              </div>
            </div>
            <div class="block ">
              <div class="imgbx">
                <img src="./logo192.png" class="cover" alt="" />
              </div>
              <div class="details">
                <div class="listHead">
                  <h4>Muhmub shayad</h4>
                  <p class="time">10:50</p>
                </div>
                <div class="message_p">
                  <p>How to make Whatsapp clone using html and css only</p>
                </div>
              </div>
            </div>
            <div class="block ">
              <div class="imgbx">
                <img src="./logo192.png" class="cover" alt="" />
              </div>
              <div class="details">
                <div class="listHead">
                  <h4>Muhmub shayad</h4>
                  <p class="time">10:50</p>
                </div>
                <div class="message_p">
                  <p>How to make Whatsapp clone using html and css only</p>
                </div>
              </div>
            </div>
            <div class="block ">
              <div class="imgbx">
                <img src="./logo192.png" class="cover" alt="" />
              </div>
              <div class="details">
                <div class="listHead">
                  <h4>Muhmub shayad</h4>
                  <p class="time">10:50</p>
                </div>
                <div class="message_p">
                  <p>How to make Whatsapp clone using html and css only</p>
                </div>
              </div>
            </div>
            <div class="block ">
              <div class="imgbx">
                <img src="./logo192.png" class="cover" alt="" />
              </div>
              <div class="details">
                <div class="listHead">
                  <h4>Muhmub shayad</h4>
                  <p class="time">10:50</p>
                </div>
                <div class="message_p">
                  <p>How to make Whatsapp clone using html and css only</p>
                </div>
              </div>
            </div>
            <div class="block ">
              <div class="imgbx">
                <img src="./logo192.png" class="cover" alt="" />
              </div>
              <div class="details">
                <div class="listHead">
                  <h4>Muhmub shayad</h4>
                  <p class="time">10:50</p>
                </div>
                <div class="message_p">
                  <p>How to make Whatsapp clone using html and css only</p>
                </div>
              </div>
            </div>
            <div class="block ">
              <div class="imgbx">
                <img src="./logo192.png" class="cover" alt="" />
              </div>
              <div class="details">
                <div class="listHead">
                  <h4>Muhmub shayad</h4>
                  <p class="time">10:50</p>
                </div>
                <div class="message_p">
                  <p>How to make Whatsapp clone using html and css only</p>
                </div>
              </div>
            </div>
            <div class="block unread">
              <div class="imgbx">
                <img src="./favicon.ico" class="cover" alt="" />
              </div>
              <div class="details">
                <div class="listHead">
                  <h4>Amol Rathod</h4>
                  <p class="time">9:50</p>
                </div>
                <div class="message_p">
                  <p>hi i am amol rathod </p>
                  <b>1</b>
                </div>
              </div>
            </div>
            <div class="block ">
              <div class="imgbx">
                <img src="./logo192.png" class="cover" alt="" />
              </div>
              <div class="details">
                <div class="listHead">
                  <h4>Muhmub shayad</h4>
                  <p class="time">10:50</p>
                </div>
                <div class="message_p">
                  <p>How to make Whatsapp clone using html and css only</p>
                </div>
              </div>
            </div>
            <div class="block unread">
              <div class="imgbx">
                <img src="./favicon.ico" class="cover" alt="" />
              </div>
              <div class="details">
                <div class="listHead">
                  <h4>Amol Rathod</h4>
                  <p class="time">9:50</p>
                </div>
                <div class="message_p">
                  <p>hi i am amol rathod </p>
                  <b>1</b>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="rightSide">
          <div class="header">
            <div class="imgText">
              <div class="userimg">
                <img src="./favicon.ico" alt="" class="cover" />
              </div>
              <h4>
                muhammad Shayan <br />
                <span>online</span>
              </h4>
            </div>
            <ul class="nav-icons">
              <li>
                <span class="material-symbols-outlined">search</span>
              </li>
              <li>
                <span class="material-symbols-outlined">more_vert</span>
              </li>
            </ul>
          </div>

          <div class="chatlist">
            <div class="chatBox">
              <div class="message my_message">
                <p>
                  HI <br />
                  <span>12:50</span>
                </p>
              </div>
              <div class="message frnd_message">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                  non! <br />
                  <span>12:50</span>
                </p>
              </div>
              <div class="message my_message">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                  non! <br />
                  <span>12:50</span>
                </p>
              </div>
              <div class="message frnd_message">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                  non! <br />
                  <span>12:50</span>
                </p>
              </div>
              <div class="message my_message">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                  non! <br />
                  <span>12:50</span>
                </p>
              </div>
              <div class="message frnd_message">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                  non! <br />
                  <span>12:50</span>
                </p>
              </div>
              <div class="message my_message">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                  non! <br />
                  <span>12:50</span>
                </p>
              </div>
              <div class="message my_message">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                  non! <br />
                  <span>12:50</span>
                </p>
              </div>
              <div class="message frnd_message">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                  non! <br />
                  <span>12:50</span>
                </p>
              </div>
              <div class="message my_message">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                  non! <br />
                  <span>12:50</span>
                </p>
              </div>
              <div class="message my_message">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                  non! <br />
                  <span>12:50</span>
                </p>
              </div>
              <div class="message frnd_message">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                  non! <br />
                  <span>12:50</span>
                </p>
              </div>
              <div class="message my_message">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                  non! <br />
                  <span>12:50</span>
                </p>
              </div>
              <div class="message my_message">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                  non! <br />
                  <span>12:50</span>
                </p>
              </div>
              <div class="message frnd_message">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                  non! <br />
                  <span>12:50</span>
                </p>
              </div>
              <div class="message my_message">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                  non! <br />
                  <span>12:50</span>
                </p>
              </div>
              <div class="message my_message">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                  non! <br />
                  <span>12:50</span>
                </p>
              </div>
              <div class="message frnd_message">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                  non! <br />
                  <span>12:50</span>
                </p>
              </div>
              <div class="message my_message">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                  non! <br />
                  <span>12:50</span>
                </p>
              </div>
            </div>
          </div>

          <div class="chatbox_input">
            <div class="search_chat">
              <div>
                <input type="text" placeholder="Search or start new Chat" />

                <i>
                  <span class="material-symbols-outlined">mic</span>
                </i>
              </div>
              <div class="aline">
                <span class="material-symbols-outlined send-icon">
                  attach_file
                </span>
                <span class="material-symbols-outlined send-icon">
                  camera_enhance
                </span>
                <span class="material-symbols-outlined send-icon">
                  child_care
                </span>
                <span class="material-symbols-outlined send-icon">send</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </Link>
  );
}
