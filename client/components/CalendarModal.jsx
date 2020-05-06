import React from 'react';
import styled from 'styled-components';

const Calendar = styled.div`
  position: absolute;
  z-index: 5;
  height: 300px;
  width: 600px;
  grid-template: 100px / 100px  100px;
  margin-left: 200px;
  margin-top: 15px;
`;

const Left = styled.div`
  height: 300px;
  width: 300px;
  z-index: 5;
  display: grid;
  grid-area: 1 / 1 / span 1 / span 1;
  border-style: solid;
  border-width: 1px;
  border-color: black;
  background-color: white;
  color: black;
`;

const Right = styled(Left)`
grid-area: 1 / 2 / span 1 / span 1;
`;

class CalendarModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      month1: 'May',
      month2: 'June',
    };
  }

  render() {
    if (!this.props.showCalendar) {
      return null;
    }
    return (
      <Calendar>
        <Left>Left side</Left>
        <Right>Right side</Right>
      </Calendar>
    );
  }
}

export default CalendarModal;
