import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

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
  background-color: #f2b203;
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
    this.updateOtherSites = this.updateOtherSites.bind(this);
    this.getOtherSite = this.getOtherSite.bind(this);
  }

  componentDidMount() {
    const url = new URL(window.location.href);
    const getID = url.searchParams.get('id');

    axios.get(`api/bookings/${getID}`)
      .then((response) => {
        const otherSites = response.data[0].otherSites;
        this.updateOtherSites(otherSites);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {

      });
  }

  getOtherSite(n) {
    const site = this.state.otherSites[n];
    if (!site) {
      return '';
    }
    return `${site}........................`;
  }

  updateOtherSites(newSites) {
    this.setState({
      otherSites: newSites,
    });
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
          <Offer1>{this.getOtherSite(0)}</Offer1>
          <Offer2>{this.getOtherSite(1)}</Offer2>
          <Offer3>{this.getOtherSite(2)}</Offer3>
          <Offer4>{this.getOtherSite(3)}</Offer4>
        </OtherOffers>
      </div>
    );
  }
}

export default ViewDeals;
