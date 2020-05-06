import React from 'react';
import styled from 'styled-components';

const GuestsWrapper = styled.div`
  display: grid;
  grid-area: 2 / 1 / span 1 / span 1;
  height: 47px;
  text-align: left;
  border-style: solid;
  border-color: lightgray;
  border-width: 1px;
  border-radius: 5px;
  margin: 5px 10px;
`;

// const Guests = styled.div`
//   display: grid;
//   grid-area: 1 / 1 / span 1 / span 1;
//   text-align: left;
//   border-style: solid;
//   border-color: lightgray;
//   border-width: 1px;
//   border-radius: 5px;
//   margin: 5px 10px;
// `;

const Guests = (props) => (
  <div>
    <GuestsWrapper>
      <button className="rateCriteria" type="button">
        <p className="rateCriteria">Guests</p>
        <p className="rateCriteria">
          <strong>{props.rooms} rooms, {props.adults} adults, {props.children} children</strong>
        </p>
      </button>
    </GuestsWrapper>
  </div>
);

export default Guests;
