import React from 'react';
import styled from 'styled-components';

const LowestPrice = styled.p`
  display: grid;
  grid-area: 1 / 1 / span 1 / span 1;
  color: gray;
  text-align: center;
  height: 25px;
`;

const MainOfferSite = styled.div`
  display: grid;
  grid-area: 2 / 1 / span 1 / span 1;
  grid-template: 1fr / 3fr 1fr;
  color: black;
  font-size: 20px;
  height: 44px;
`;

const Cancellation = styled.div`
  display: grid;
  grid-area: 3 / 1 / span 1 / span 1;
  font-size: small;
  color: black;
  height: 22px;
`;

const ViewDealWrapper = styled.div`
  display: grid;
  grid-area: 4 / 1 / span 1 / span 1;
  height: 50px;
`;

const ViewDealButton = styled.button`
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
  grid-area: 5 / 1 / span 1 / span 1;
  color: gray;
  font-size: 10px;
  grid-template: 1fr 1fr / 1fr 1fr;
  height: 61px;
 `;

class ViewDeals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      otherSites: [],
      otherPrices: 'n/a',
    };
  }

  render() {
    return (
      <div>
        <LowestPrice>Lowest price we found</LowestPrice>
        <MainOfferSite>Main Offer</MainOfferSite>
        <Cancellation>Free cancellation until 6/1/20</Cancellation>
        <ViewDealWrapper>
          <ViewDealButton>View Deal</ViewDealButton>
        </ViewDealWrapper>
        <OtherOffers>other offers here</OtherOffers>
      </div>
    );
  }
}

export default ViewDeals;
