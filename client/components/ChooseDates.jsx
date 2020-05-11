import React from 'react';
import styled from 'styled-components';
import { FaCalendarAlt } from 'react-icons/fa';

const ChooseDatesWrapper = styled.div`
  display: grid;
  grid-template: 44px / 192px 192px;
  margin: 5px;
`;

const Checkin = styled.button`
display: grid;
grid-area: 1 / 1 / span 1 / span 1
text-align: left;
border-style: solid;
border-color: lightgray;
border-width: 1px;
border-radius: 5px;
padding: 0px;

margin: 0px 2px 0px 5px;
`;

const Checkout = styled(Checkin)`
grid-area: 1 / 2 / span 1 / span 1;
margin: 0px 5px 0px 2px;
`;

const ButtonWrapper = styled.div`
  display: grid;
  grid-template: 24px 20px / 10px 30px 145px;
`;

const GreenTab = styled.div`
  display: grid;
  grid-area: 1 / 1 / span 2 / span 1;
  background-color: green;
`;

const RedTab = styled(GreenTab)`
  background-color: red;
`;

const CalIcon = styled.div`
  display: grid;
  grid-area: 1 / 2 / span 2 / span 1;
  text-align: left;
  padding: 15px 0px 15px 5px;
  font-size: 16px;
`;

const Text = styled.span`
  display: grid;
  grid-area: 1 / 3 / span 1 / span 1;
  text-align: left;
  padding-top: 8px;
`;

const Date = styled.span`
  display: grid;
  grid-area: 2 / 3 / span 1 / span 1;
  font-weight: bold;
  text-align: left;
  padding-bottom: 5px;
`;


const ChooseDates = (props) => (
  <div>
    <ChooseDatesWrapper>
      <Checkin type="button" onClick={props.showCalendarModal}>
        <ButtonWrapper>
          <GreenTab />
          <CalIcon><FaCalendarAlt /></CalIcon>
          <Text>Check in</Text>
          <Date>{props.checkinDay}, {props.checkinDate}</Date>
        </ButtonWrapper>
      </Checkin>
      <Checkout type="button" onClick={props.showCalendarModal}>
        <ButtonWrapper>
          <RedTab />
          <CalIcon><FaCalendarAlt /></CalIcon>
          <Text>Check out</Text>
          <Date>{props.checkoutDay}, {props.checkoutDate}</Date>
        </ButtonWrapper>
      </Checkout>
    </ChooseDatesWrapper>
  </div>

);

export default ChooseDates;
