import React from 'react';
import styled from 'styled-components';

const Checkin = styled.button`
  display: grid;
  grid-area: 1 / 1 / span 1 / span 1
  border-style: solid;
  border-color: lightgray;
  border-width: 1px;
  border-radius: 3px;
  margin: 2px 2px 2px 5px;
`;

const Checkout = styled.button`
  display: grid;
  grid-area: 1 / 2 / span 1 / span 1;
  border-style: solid;
  border-color: lightgray;
  border-width: 1px;
  border-radius: 3px;
  margin: 2px 5px 2px 2px;
`;


const ChooseDates = (props) => (
  <div>
    <Checkin>Check in</Checkin>
    <Checkout>Check out</Checkout>
  </div>
);

export default ChooseDates;
