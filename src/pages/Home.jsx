import React from 'react'
import Header from '../components/Header'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Row rowId = '1'title="Upcoming" fetchURL={requests.requestUpcoming}></Row>
      <Row rowId = '2'title="Popular" fetchURL={requests.requestPopular}></Row>
      <Row rowId = '3'title="Trending" fetchURL={requests.requestTrending}></Row>
      <Row rowId = '4'title="Top Rated" fetchURL={requests.requestTopRated}></Row>
      <Row rowId = '5'title="Horror" fetchURL={requests.requestHorror}></Row>
    </div>
  )
}

export default Home