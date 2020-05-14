import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import moment from 'moment';
import ViewDeals from './ViewDeals.jsx';
import CalendarModal from './CalendarModal.jsx';
import ChooseDates from './ChooseDates.jsx';
import Guests from './Guests.jsx';
import GuestsModal from './GuestsModal.jsx';

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
      month: moment().format('MM'),
      day: moment().format('DD'),
      year: moment().format('YYYY'),
      checkinDay: moment().format('ddd'),
      checkinDate: `${moment().format('M')}/${moment().format('D')}/${moment().format('YY')}`,
      checkoutDay: moment().add(1, 'day').format('ddd'),
      checkoutDate: `${moment().add(1, 'day').format('M')}/${moment().add(1, 'day').format('D')}/${moment().add(1, 'day').format('YY')}`,
      rooms: 1,
      adults: 2,
      children: 0,
      mainPrice: '0',
      showCalendar: false,
      showGuests: false,
      checkedIn: false,
      today: [moment().format('M'), moment().format('D')],
    };
    this.showCalendarModal = this.showCalendarModal.bind(this);
    this.updateMainPrice = this.updateMainPrice.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleDateClick = this.handleDateClick.bind(this);
    this.showGuestsModal = this.showGuestsModal.bind(this);
    this.decreaseRooms = this.decreaseRooms.bind(this);
    this.increaseRooms = this.increaseRooms.bind(this);
    this.decreaseAdults = this.decreaseAdults.bind(this);
    this.increaseAdults = this.increaseAdults.bind(this);
    this.decreaseChildren = this.decreaseChildren.bind(this);
    this.increaseChildren = this.increaseChildren.bind(this);
  }

  componentDidMount() {
    const url = new URL(window.location.href);
    const getID = url.searchParams.get('id');

    axios.get(`api/bookings/${getID}`)
      .then((response) => {
        const mainPrice = response.data[0].springPrice.weekday;
        this.updateMainPrice(`$${mainPrice}`);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {

      });
  }

  handleDateClick(e, clickDay, clickMonth) {
    e.preventDefault();
    const strDay = clickDay.toString();
    const newDate = strDay.length === 1 ? `0${strDay}` : `${strDay}`;
    const dateObject = `2020-${clickMonth}-${newDate}`;
    const nextDay = (clickDay + 1).toString();
    const nextDayObject = `2020-${clickMonth}-${nextDay}`;
    const checkinMonth = Number(clickMonth);
    const thisDay = Number(this.state.today[1]);
    const thisMonth = Number(this.state.today[0]);
    console.log(thisDay, thisMonth);

    if (!this.state.checkedIn && (thisMonth < checkinMonth || (thisMonth === checkinMonth && thisDay <= clickDay))) {
      this.setState({
        checkinDay: moment(dateObject).format('ddd'),
        checkinDate: `${moment(dateObject).format('M')}/${moment(dateObject).format('D')}/${moment(dateObject).format('YY')}`,
        checkoutDay: moment(nextDayObject).format('ddd'),
        checkoutDate: `${moment(nextDayObject).format('M')}/${moment(nextDayObject).format('D')}/${moment(nextDayObject).format('YY')}`,
      });
      this.state.checkedIn = true;
    } else {
      const checkedInArray = this.state.checkinDate.split('/');
      const monthNum = Number(checkedInArray[0]);
      const dayNum = Number(checkedInArray[1]);
      const checkoutMonth = Number(clickMonth);
      // allow only dates after checkin to be clicked:
      if ((checkoutMonth === monthNum && clickDay > dayNum) || checkoutMonth > monthNum) {
        this.setState({
          checkoutDay: moment(dateObject).format('ddd'),
          checkoutDate: `${moment(dateObject).format('M')}/${moment(dateObject).format('D')}/${moment(dateObject).format('YY')}`,
        });

        this.state.checkedIn = false;
      }
    }
  }

  showGuestsModal(e) {
    e.preventDefault();
    if (!this.state.showGuests) {
      this.setState({
        showCalendar: false,
        showGuests: true,
      });
    } else {
      this.setState({
        showGuests: false,
      });
    }
  }

  handleNextClick(e) {
    e.preventDefault();
    let newMonth = Number(this.state.month) + 1;
    this.setState({
      month: `0${newMonth}`,
    });
  }

  handlePrevClick(e) {
    e.preventDefault();
    let newMonth = Number(this.state.month) - 1;
    this.setState({
      month: `0${newMonth}`,
    });
  }

  updateMainPrice(newPrice) {
    this.setState({
      mainPrice: newPrice,
    });
  }

  showCalendarModal(e) {
    e.preventDefault();
    if (!this.state.showCalendar) {

      this.setState({
        showGuests: false,
        showCalendar: true,
      });
    } else {
      this.setState({
        showCalendar: false,
      });
    }
  }

  decreaseRooms(e) {
    e.preventDefault();
    if (this.state.rooms > 1) {
      let current = this.state.rooms;
      this.setState({
        rooms: current - 1,
      });
    }
  }

  increaseRooms(e) {
    e.preventDefault();
    if (this.state.rooms < 10) {
      let current = this.state.rooms;
      this.setState({
        rooms: current + 1,
      });
    }
  }

  decreaseAdults(e) {
    e.preventDefault();
    if (this.state.adults > 1) {
      let current = this.state.adults;
      this.setState({
        adults: current - 1,
      });
    }
  }

  increaseAdults(e) {
    e.preventDefault();
    if (this.state.adults < 15) {
      let current = this.state.adults;
      this.setState({
        adults: current + 1,
      });
    }
  }

  decreaseChildren(e) {
    e.preventDefault();
    if (this.state.children > 0) {
      let current = this.state.children;
      this.setState({
        children: current - 1,
      });
    }
  }

  increaseChildren(e) {
    e.preventDefault();
    if (this.state.children < 10) {
      let current = this.state.children;
      this.setState({
        children: current + 1,
      });
    }
  }

  render() {
    return (
      <div>
        <GuestsModal
          rooms={this.state.rooms}
          adults={this.state.adults}
          children={this.state.children}
          showGuests={this.state.showGuests}
          showGuestsModal={this.showGuestsModal}
          decreaseRooms={this.decreaseRooms}
          increaseRooms={this.increaseRooms}
          decreaseAdults={this.decreaseAdults}
          increaseAdults={this.increaseAdults}
          decreaseChildren={this.decreaseChildren}
          increaseChildren={this.increaseChildren}
        />
        <CalendarModal
          showCalendar={this.state.showCalendar}
          day={this.state.day}
          month={this.state.month}
          year={this.state.year}
          handleNextClick={this.handleNextClick}
          handlePrevClick={this.handlePrevClick}
          handleDateClick={this.handleDateClick}
          checkedIn={this.state.checkedIn}
        />
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
          showGuestsModal={this.showGuestsModal}
        />
        <DealsWrapper>
          <ViewDeals mainPrice={this.state.mainPrice} />
        </DealsWrapper>
      </div>
    );
  }
}

export default RateCriteria;
