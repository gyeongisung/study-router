import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  // console.log(location);
  const state = location.state;
  // 1. state 값이 없는 경우에 대한 처리
  // let fromData = "/";
  // if (state) {
  //     fromData = state.from ? state.from : "/";
  // }

  return (
    <div className="card card-body">
      <h2>Home</h2>
    </div>
  );
};

export default Home;
