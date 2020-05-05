import React from 'react';
import styled from 'styled-components';

const LowestPrice = styled.p`
  display: grid;
  grid-area: 1 / 1 / span 1 / span 1;
  height: 25px;
  font-size: 18px;
  color: gray;
  text-align: center;
  margin: 10px;
  padding-top: 5px;
`;

const MainOffer = styled.div`
  display: grid;
  grid-area: 2 / 1 / span 1 / span 1;
  height: 44px;
  grid-template: 1fr / 3fr 1fr;
  color: black;
  font-size: 20px;
  margin: 10px;
`;
const MainOfferSite = styled.p`
  display: grid;
  grid-area: 1 / 1 / span 1 / span 1;
`;

const MainOfferPrice = styled.p`
  display: grid;
  grid-area: 1 / 2 / span 1 / span 1;
`;

const Cancellation = styled.div`
  display: grid;
  grid-area: 3 / 1 / span 1 / span 1;
  height: 22px;
  font-size: small;
  color: black;
  margin: 10px;
`;

const ViewDealWrapper = styled.div`
  display: grid;
  grid-area: 4 / 1 / span 1 / span 1;
  height: 50px;
  grid-template: 1fr / 1fr
`;

const ViewDealButton = styled.button`
  grid-area: 1 / 1 / span 1 / span 1;
  background-color: #ffcc00;
  color: black;
  text-align: center;
  padding: 12px 5px 12px 5px;
  border-radius: 13px;
  margin: 5px 10px 5px 10px;
  font-size: 16px;
`;

const OtherOffers = styled.div`
  display: grid;
  grid-area: 5 / 1 / span 1 / span 1;
  height: 61px;
  margin: 10px;
  color: gray;
  font-size: 10px;
  grid-template: 1fr 1fr / 1fr 1fr;
 `;

const Offer1 = styled.p`
  display: grid;
  grid-area: 1 / 1 / span 1 / span 1;
  margin: 10px;
`;
const Offer2 = styled(Offer1)`
  grid-area: 1 / 2 / span 1 / span 1;
`;
const Offer3 = styled(Offer1)`
  grid-area: 2 / 1 / span 1 / span 1;
`;
const Offer4 = styled(Offer1)`
  grid-area: 2 / 2 / span 1 / span 1;
`;

class ViewDeals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      otherSites: [],
    };
  }

  render() {
    return (
      <div>
        <LowestPrice>Lowest price we found</LowestPrice>
        <MainOffer>
          <MainOfferSite>WanderNest</MainOfferSite>
          <MainOfferPrice>{this.props.mainPrice}</MainOfferPrice>
        </MainOffer>
        <Cancellation>Free cancellation until 6/1/20</Cancellation>
        <ViewDealWrapper>
          <ViewDealButton>View Deal</ViewDealButton>
        </ViewDealWrapper>
        <OtherOffers>
          <Offer1>first site...................</Offer1>
          <Offer2>second site..................</Offer2>
          <Offer3>third site...................</Offer3>
          <Offer4>fourth site....................</Offer4>
        </OtherOffers>
      </div>
    );
  }
}

export default ViewDeals;
