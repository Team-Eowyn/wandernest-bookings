import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import RateCriteria from './RateCriteria.jsx';

const Wrapper = styled.div`
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

class Bookings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      availability: '',
    };
    this.updateAvailability = this.updateAvailability.bind(this);
  }

  componentDidMount() {
    const url = new URL(window.location.href);
    const getID = url.searchParams.get('id');

    axios.get(`api/bookings/${getID}`)
      .then((response) => {
        const availability = response.data[0].availability;
        this.updateAvailability(availability);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {

      });
  }

  updateAvailability(string) {
    this.setState({
      availability: string,
    });
  }


  render() {
    return (
      <Wrapper>
        <Availability>{this.state.availability}</Availability>
        <CriteriaWrapper>
          <RateCriteria />
        </CriteriaWrapper>
      </Wrapper>
    );
  }
}

export default Bookings;
