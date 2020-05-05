import React from 'react';
import styled from 'styled-components';

const Calendar = styled.div`
  height: 300px;
  width: 400px;
  grid-template: 1fr / 1fr  1fr
  background-color: pink;
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
      <Calendar>Calendar goes here</Calendar>
    );
  }
}

export default CalendarModal;
