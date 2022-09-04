import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <>
      <Main />
      <Row title="Upcoming" fetchUrl={requests.requestUpcoming} />
      <Row title="Popular" fetchUrl={requests.requestPopular} />
      <Row title="Trending" fetchUrl={requests.requestTrending} />
      <Row title="Top Rated" fetchUrl={requests.requestTopRated} />
      <Row title="Horror" fetchUrl={requests.requestHorror} />
    </>
  );
};

export default Home;
