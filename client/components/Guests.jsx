import React from 'react';
import styled from 'styled-components';
import { FaUserFriends } from 'react-icons/fa';


const GuestsButton = styled.button`
  height: 44px;
  width: 375px;
  text-align: left;
  border-style: solid;
  border-color: lightgray;
  border-width: 1px;
  border-radius: 5px;
  margin: 10px;
  padding: 0px;
`;

const ButtonWrapper = styled.div`
  display: grid;
  grid-template: 24px 20px / 35px 340px;
`;

const CalIcon = styled.div`
  display: grid;
  grid-area: 1 / 1 / span 2 / span 1;
  text-align: left;
  padding: 15px 0px 15px 10px;
  font-size: 16px;
`;

const Text = styled.div`
  display: grid;
  grid-area: 1 / 2 / span 1 / span 1;
  text-align: left;
  padding-top: 8px;
`;

const GuestSelection = styled.span`
  display: grid;
  grid-area: 2 / 2 / span 1 / span 1;
  font-weight: bold;
  text-align: left;
  padding-bottom: 5px;
`;

const Guests = (props) => (
  <div>
    <GuestsButton onClick={props.showGuestsModal}>
      <ButtonWrapper>
        <CalIcon><FaUserFriends /></CalIcon>
        <Text>Guests</Text>
        <GuestSelection>
          {props.rooms} rooms, {props.adults} adults, {props.children} children
        </GuestSelection>
      </ButtonWrapper>
    </GuestsButton>
  </div>
);

export default Guests;
