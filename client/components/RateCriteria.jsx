import React from 'react';
import styled from 'styled-components';

const ChooseDates = styled.div`
  display: grid;
  grid-area: 1 / 1 / span 1 / span 2;
  height: 49px;
  grid-template: 1fr / 1fr 1fr;
`;

const GuestsWrapper = styled.div`
  display: grid;
  grid-area: 2 / 1 / span 1 / span 2;
  height: 47px;
`;


class RateCriteria extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkin: 'Mon',
      checkout: 'Wed',
      rooms: 1,
      adults: 2,
      children: 0,
    };
  }

  render() {
    return (
      <div>
        <ChooseDates>Choose dates</ChooseDates>
        <GuestsWrapper>Select Guests</GuestsWrapper>
      </div>
    );
  }
}

export default RateCriteria;
