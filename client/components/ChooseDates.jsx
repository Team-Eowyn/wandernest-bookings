import React from 'react';
import styled from 'styled-components';

const ChooseDatesWrapper = styled.div`
  display: grid;
  grid-area: 1 / 1 / span 1 / span 1;
  height: 49px;
  grid-template: 1fr / 1fr 1fr;
`;

const Checkin = styled.div`
display: grid;
grid-area: 1 / 1 / span 1 / span 1
text-align: left;
border-style: solid;
border-color: lightgray;
border-width: 1px;
border-radius: 5px;
margin: 5px 5px 5px 10px;
`;

const Checkout = styled(Checkin)`
grid-area: 1 / 2 / span 1 / span 1;
margin: 5px 10px 5px 5px;
`;

const ChooseDates = (props) => (
  <div>
    <ChooseDatesWrapper>
      <Checkin>
        <button className="rateCriteria" type="button" onClick={props.showCalendarModal}>
          <p className="rateCriteria">Check In</p>
          <p className="rateCriteria">
            <strong>{props.checkinDay}, {props.checkinDate}
            </strong>
          </p>
        </button>
      </Checkin>
      <Checkout>
        <button className="rateCriteria" type="button">
          <p className="rateCriteria">Check Out</p>
          <p className="rateCriteria">
            <strong>
              {props.checkoutDay}, {props.checkoutDate}
            </strong>
          </p>
        </button>
      </Checkout>
    </ChooseDatesWrapper>
  </div>

);

export default ChooseDates;
