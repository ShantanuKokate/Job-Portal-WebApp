import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { gsap, CSSPlugin, Expo } from "gsap";
import "./../App";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsAction } from "../actions/productAction";
import ProductCard from "../components/ProductCard";
export default function Home() {
  const { reduxProducts } = useSelector((state) => state.products);
  // const myStyle = {
  //   backgroundImage:
  //     "url('https://img.freepik.com/free-photo/blue-abstract-gradient-wave-wallpaper_53876-108364.jpg?w=1060&t=st=1671869653~exp=1671870253~hmac=d3dd93e2121c9e89867a3cc98594f23829577154fb292cb7f0aba7621c8200b6')",
  //   height: "100vh",
  //   // marginTop: "10px",
  //   // fontSize: "50px",
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  // };

  const dispatch = useDispatch();
  useEffect((e) => {
    dispatch(getAllProductsAction());
  }, []);

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const count = setInterval(() => {
      setCounter(
        (counter) => (
          counter < 100 ? counter + 1 : clearInterval(count),
          setCounter(100),
          reveal()
        )
      );
    }, 5);
  });

  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        // console.log("comepled");
      },
    });
    t1.to(".follow", {
      width: "100%",
      duration: 0.7,
      delay: 0.7,
      ease: Expo.easeInOut,
    })
      .to(".hide", {
        opacity: 0,
        duration: 0.3,
      })
      .to(".hide", {
        display: "none",
        duration: 0.3,
      })
      .to(".follow", {
        height: "100%",
        duration: 0,
        delay: 0.2,
        ease: Expo.easeInOut,
      });
    t1.to(".content", {
      width: "100%",
      duration: 0.2,
      delay: 0.2,
      ease: Expo.easeInOut,
    })
      .to(".title-lines", { display: "block", duration: 0.1 })
      .to(".title-lines", { opacity: 1, duration: 0.7, ease: Expo.easeInOut });
  };
  return (
    <>
      <AppContainer>
        <Loading>
          <Follow className="follow"></Follow>
          <ProgressBar
            className="hide"
            style={{ width: counter + "%" }}
          ></ProgressBar>
          <Count className="hide"> {counter} %</Count>
        </Loading>

        <Content className="content ">
          {/* <img
            className="title-lines"
            style={{ width: 1519, height: 600 }}
            src="https://img.freepik.com/free-vector/recruiting-managers-search-talent-employees-team-office-people-holding-poster-hands-with-message-we-are-hiring-flat-vector-illustration-opportunity-vacancy-employment-hr-concept_74855-21278.jpg?w=1380&t=st=1671869109~exp=1671869709~hmac=647aa82e35258f3b408f725ef11256870c7851c5660f592c69d2c1e50ab31d94"
            alt=""
          /> */}
          <img
            className="title-lines"
            style={{ width: 1519, height: 600 }}
            src="https://c0.wallpaperflare.com/preview/560/693/69/business-background-illustration-people.jpg"
            alt=""
          />
        </Content>
      </AppContainer>

      <div>
        <div className="container  ">
          <div className="row ">
            {reduxProducts?.map((singleProduct) => {
              return (
                <div key={singleProduct._id} className="col-sm-4 ">
                  <ProductCard item={singleProduct} />

                  <br />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

const AppContainer = styled.div`
  width: 98.5vw;
  height: 100vh;
  color: #000000;
  position: relative;
  text-align: center;
`;

const Loading = styled.div`
  height: 100%;
  width: 98.5%;
  background-color: #121212;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  /* display: none; */
`;

const Follow = styled.div`
  position: absolute;
  background-color: #f48049;
  height: 2px;
  width: 0;
  left: 0;
  z-index: 2;
`;

const ProgressBar = styled.div`
  position: absolute;
  left: 0;
  height: 2px;
  background-color: #fff;
  transition: 0.4s ease-out;
  width: 0;
`;

const Count = styled.p`
  position: absolute;
  font-size: 130px;
  color: #fff;
  font-weight: 500;
  transform: translateY(-15px);
`;

const Content = styled.div`
  height: 100%;
  width: 0;

  position: absolute;
  left: 0;
  top: 0;
  background-color: #121212;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;

  overflow: hidden;
  color: #fff;

  p {
    text-align: center;
    font-size: 104px;
    font-weight: 500;
    margin: 0;

    opacity: 0;
    display: none;
  }
`;
