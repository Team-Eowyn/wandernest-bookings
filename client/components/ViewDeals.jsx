import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Tripadvisor } from '@styled-icons/fa-brands';
import moment from 'moment';

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
  grid-template: 25px / 40px 260px 75px;
  color: black;
  font-size: 20px;
  margin: 10px;
`;

const MainOfferIcon = styled(Tripadvisor)`
  display: grid:
  grid-area: 1 / 1 / span 1 / span 1;
  padding-top: 20px;
  padding-left: 5px;
  border-radius: 0px;
  color: black;
  font-weight: bold;
`;

const MainOfferSite = styled.p`
  display: grid;
  grid-area: 1 / 2 / span 1 / span 1;
`;

const MainOfferPrice = styled.p`
  display: grid;
  grid-area: 1 / 3 / span 1 / span 1;
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
    return `${site}........................N/A`;
  }

  updateOtherSites(newSites) {
    this.setState({
      otherSites: newSites,
    });
  }

  render() {
    const dateInfo = this.props.checkinDate.split('/');
    const year = dateInfo[2];
    const month = dateInfo[0];
    const day = dateInfo[1];
    const newDateObj = this.props.makeDateObject(year, month, day);
    const oneWeekLater = moment().add(7, 'days');
    let cancelIntro;
    let cancelDate;

    if (moment(newDateObj).isAfter(oneWeekLater)) {
      cancelIntro = 'Free cancellation until';
      cancelDate = this.props.cancellation
    } else {
      cancelIntro = 'This is a short-notice booking';
      cancelDate = '';
    }

    return (
      <div>
        <LowestPrice>Lowest price we found</LowestPrice>
        <MainOffer>
          <MainOfferIcon size='25px'></MainOfferIcon>
          <MainOfferSite>WanderNest</MainOfferSite>
          <MainOfferPrice>{this.props.displayPrice}</MainOfferPrice>
        </MainOffer>
        <Cancellation>{`${cancelIntro} ${cancelDate}`}</Cancellation>
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
