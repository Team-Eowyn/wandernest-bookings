import React from 'react';
import styled from 'styled-components';
import ViewDeals from './ViewDeals.jsx';
import CalendarModal from './CalendarModal.jsx';
import ChooseDates from './ChooseDates.jsx';
import Guests from './Guests.jsx';

const DealsWrapper = styled.div`
  display: grid:
  grid-area: 3 / 1 / span 1 / span 1;
  grid-template: 25px 44px 22px 50px 61px / 1fr
  margin: 20px 10px;
`;

class RateCriteria extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkinDay: 'Mon',
      checkinDate: '6/10/20',
      checkoutDay: 'Wed',
      checkoutDate: '6/12/20',
      rooms: 1,
      adults: 2,
      children: 0,
      mainPrice: '$350',
      showCalendar: false,
    };
    this.showCalendarModal = this.showCalendarModal.bind(this);
  }

  showCalendarModal(e) {
    e.preventDefault();
    if (!this.state.showCalendar) {
      this.setState({
        showCalendar: true,
      });
    } else {
      this.setState({
        showCalendar: false,
      });
    }
  }

  render() {
    return (
      <div>
        <CalendarModal showCalendar={this.state.showCalendar} />
        <ChooseDates
          checkinDate={this.state.checkinDate}
          checkinDay={this.state.checkinDay}
          checkoutDate={this.state.checkoutDate}
          checkoutDay={this.state.checkoutDay}
          showCalendarModal={this.showCalendarModal}
        />
        <Guests
          rooms={this.state.rooms}
          adults={this.state.adults}
          children={this.state.children}
        />
        <DealsWrapper>
          <ViewDeals mainPrice={this.state.mainPrice} />
        </DealsWrapper>
      </div>
    );
  }
}

export default RateCriteria;
