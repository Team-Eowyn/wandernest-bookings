import React from 'react';
import styled from 'styled-components';
import RateCriteria from './RateCriteria.jsx';
import ViewDeals from './ViewDeals.jsx';

const Bookings = styled.div`
  display: grid;
  width: 395px;
  height: 430px
  padding: 4px 16px 0px;
  grid-template: 44px 96px 234px / 1fr
  background-color: white;
  border-style: ridge;
  border-color: lightgray;
  border-width: 1px;
`;

const Availability = styled.p`
  display: grid;
  grid-area: 1 / 1 / span 1 / span 1;
  color: red;
  text-align: center;
`;

const CriteriaWrapper = styled.div`
  display: grid:
  grid-area: 2 / 1 / span 1 / span 1;
  grid-template: 44px 42px / 1fr;
`;

const DealsWrapper = styled.div`
  display: grid:
  grid-area: 3 / 1 / span 1 / span 1;
  grid-template: 25px 44px 22px 50px 61px / 1fr
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
      <Bookings>
        <Availability>{this.state.availability}</Availability>
        <CriteriaWrapper>
          <RateCriteria />
        </CriteriaWrapper>
        <DealsWrapper>
          <ViewDeals />
        </DealsWrapper>
      </Bookings>
    );
  }
}

export default App;
