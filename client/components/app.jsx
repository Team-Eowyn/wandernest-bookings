import React from 'react';
import styled from 'styled-components';
import RateCriteria from './RateCriteria.jsx';

const Bookings = styled.div`
  display: grid;
  width: 395px;
  height: 430px
  padding: 4px 16px 0px;
  grid-template: 44px 96px 234px / 1fr
  background-color: white;
  border-style: solid;
  border-color: lightgray;
  border-width: 1px;
  font-family: Arial, Helvetica, sans-serif;
`;

const Availability = styled.p`
  display: grid;
  grid-area: 1 / 1 / span 1 / span 1;
  color: red;
  text-align: center;
  margin: 15px
`;

const CriteriaWrapper = styled.div`
  display: grid:
  grid-area: 2 / 1 / span 1 / span 1;
  grid-template: 44px 42px / 1fr
  margin: 20px 10px;
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
      </Bookings>
    );
  }
}

export default App;
