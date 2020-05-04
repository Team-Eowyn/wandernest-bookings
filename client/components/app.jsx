import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  width: 395px;
  height: 425px;
  background-color: lightgray;
  font-family: Arial, Helvetica, sans-serif;
`;

const Bookings = styled.div`
  display: grid;
  grid-template: repeat(5, 1fr) 30px 1fr 1fr 30px / 1fr 1fr;
  background-color: white;
  color: white;
  border-style: ridge;
  border-color: gray;
  border-width: 1px;
`;

const Availability = styled.p`
  display: grid;
  grid-area: 1 / 1 / span 1 / span 2;
  color: red;
  text-align: center;
`;

const CheckIn = styled.button`
  display: grid;
  grid-area: 2 / 1 / span 1 / span 1;
  border-style: solid;
  border-color: lightgray;
  border-width: 1px;
  border-radius: 3px;
  margin: 2px 2px 2px 5px;
`;

const CheckOut = styled.button`
  display: grid;
  grid-area: 2 / 2 / span 1 / span 1;
  border-style: solid;
  border-color: lightgray;
  border-width: 1px;
  border-radius: 3px;
  margin: 2px 5px 2px 2px;
`;
const Guests = styled.button`
  display: grid;
  grid-area: 3 / 1 / span 1 / span 2;
  border-style: solid;
  border-color: lightgray;
  border-width: 1px;
  border-radius: 3px;
  margin: 2px 5px;
`;

const LowestPrice = styled.p`
  display: grid;
  grid-area: 4 / 1 / span 1 / span 2;
  color: gray;
  text-align: center;
`;

const MainOfferSite = styled.div`
  display: grid;
  grid-area: 5 / 1 / span 1 / span 1;
  color: black;
  font-size: 20px;
  margin-left: 2px;
  padding: 15px 5px 15px 5px;
`;

const MainOfferPrice = styled.div`
  display: grid;
  grid-area: 5 / 2 / span 1 / span 1;
  color: black;
  font-size: 20px;
  margin-right: 2px
  text-align: center;
  padding: 15px 5px 15px 5px;
`;

const Cancellation = styled.div`
  display: grid;
  grid-area: 6 / 1 / span 1 / span 2;
  font-size: small;
  color: black;
  padding: 10px;
  margin: 5px 10px 10px 10px;
`;

const ViewDeal = styled.button`
  display: grid;
  grid-area: 7 / 1 / span 1 / span 2;
  background-color: #ffcc00;
  color: black;
  text-align: center;
  padding: 15px 5px 15px 5px;
  border-radius: 15px;
  margin: 5px 10px 5px 10px;
  font-size: 16px;
  font-weight: bold;
`;

const OtherOffers = styled.div`
  display: grid;
  grid-area: 8 / 1 / span 1 / span 2;
  color: gray;
  font-size: 10px;
  grid-template: 1fr 1fr / 1fr 1fr;

`;

const Offer1 = styled.p`
  display-grid:
  grid-area: 1 / 1 / span 1 / span 1;
  margin: 10px;
`;
const Offer2 = styled.p`
  grid-area: 1 / 1 / span 1 / span 1;
  margin: 10px;
`;
const Offer3 = styled.p`
  grid-area: 2 / 1 / span 1 / span 1;
  margin: 10px;
`;
const Offer4 = styled.p`
  grid-area: 2 / 2 / span 1 / span 1;
  margin: 10px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      availability: 'Book now! This hotel is likely to sell out soon!',
    };
  }

  render() {
    return (
      <Container>
        <Bookings>
          <Availability>{this.state.availability}</Availability>
          <CheckIn>Check In</CheckIn>
          <CheckOut>Check Out</CheckOut>
          <Guests>Guests</Guests>
          <LowestPrice>Lowest price we found</LowestPrice>
          <MainOfferSite>WanderNest</MainOfferSite>
          <MainOfferPrice>$305</MainOfferPrice>
          <Cancellation>Free cancellation until 6/10/20</Cancellation>
          <ViewDeal>View Deal</ViewDeal>
          <OtherOffers>
            <Offer1>hotel 1..........</Offer1>
            <Offer2>hotel 2..........</Offer2>
            <Offer3>hotel 3..........</Offer3>
            <Offer4>hotel 4..........</Offer4>
          </OtherOffers>
        </Bookings>
      </Container>
    );
  }
}

export default App;
