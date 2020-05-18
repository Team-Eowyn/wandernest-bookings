/* eslint-disable class-methods-use-this */
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
      weekdayPrice: '0',
      weekendPrice: '0',
      displayPrice: '',
      showCalendar: false,
      showGuests: false,
      checkedIn: false,
      checkedOut: false,
      today: [moment().format('M'), moment().format('D')],
      cancellation: '',
    };
    this.showCalendarModal = this.showCalendarModal.bind(this);
    this.updatePrices = this.updatePrices.bind(this);
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
    this.updateDisplayPrice = this.updateDisplayPrice.bind(this);
    this.checkForWeekendPrice = this.checkForWeekendPrice.bind(this);
    this.makeDateObject = this.makeDateObject.bind(this);
    this.updateCancellation = this.updateCancellation.bind(this);
  }

  componentDidMount() {
    const url = new URL(window.location.href);
    const getID = url.searchParams.get('id');

    axios.get(`api/bookings/${getID}`)
      .then((response) => {
        const weekday = response.data[0].springPrice.weekday;
        const weekend = response.data[0].springPrice.weekend;
        this.updatePrices(`$${Number.parseFloat(weekday).toFixed(2)}`, `$${Number.parseFloat(weekend).toFixed(2)}`);
        this.updateDisplayPrice();
      })
      .catch((error) => {
        console.log(error, 'error on RateCriteria component did mount');
      })
      .finally(() => {

      });
  }

  getWeekdayPrice() {
    return this.state.weekdayPrice;
  }

  getWeekendPrice() {
    return this.state.weekendPrice;
  }

  handleDateClick(e, clickDay, clickMonth) {
    e.preventDefault();
    const dateObject = this.makeDateObject(2020, clickMonth, clickDay);
    const nextDay = moment(dateObject).add(1, 'day').format('DD');
    const nextDayMonth = moment(dateObject).add(1, 'day').format('MM');
    const nextDayObject = `2020-${nextDayMonth}-${nextDay}`;
    const checkinMonth = Number(clickMonth);
    const thisDay = Number(this.state.today[1]);
    const thisMonth = Number(this.state.today[0]);

    if (this.state.checkedOut) {
      this.setState({
        checkedOut: false,
        displayPrice: this.getWeekdayPrice(),
      });
    }

    if (!this.state.checkedIn && (thisMonth < checkinMonth || (thisMonth === checkinMonth && thisDay <= clickDay))) {
      this.setState({
        checkinDay: moment(dateObject).format('ddd'),
        checkinDate: `${moment(dateObject).format('M')}/${moment(dateObject).format('D')}/${moment(dateObject).format('YY')}`,
        checkoutDay: moment(nextDayObject).format('ddd'),
        checkoutDate: `${moment(nextDayObject).format('M')}/${moment(nextDayObject).format('D')}/${moment(nextDayObject).format('YY')}`,
        checkedIn: true,
      });
      new Promise((resolve, reject) => {
        resolve(this.state.checkedIn === true);
      })
        .then(result => {
          this.updateCancellation(this.state.checkinDate);
        });
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
          checkedOut: true,
          checkedIn: false,
        });
        new Promise((resolve, reject) => {
          resolve(this.state.checkedOut === true);
        })
          .then(result => {
            this.updateDisplayPrice();
            this.updateCancellation(this.state.checkinDate);
          });
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

  updatePrices(newWeekday, newWeekend) {
    this.setState({
      weekdayPrice: newWeekday,
      weekendPrice: newWeekend,
    });
  }

  updateDisplayPrice() {
    if (!this.state.checkedOut) {
      this.setState({
        displayPrice: this.getWeekdayPrice(),
      });
    } else if (this.state.checkedOut) {
      this.setState({
        displayPrice: this.checkForWeekendPrice(),
      });
    }
  }

  makeDateObject(year, month, day) {
    let YYYY = typeof year === 'string' ? year : year.toString();
    let MM = typeof month === 'string' ? month : month.toString();
    let DD = typeof day === 'string' ? day : day.toString();

    YYYY = YYYY.length === 4 ? year : `20${year}`;
    MM = MM.length === 2 ? month : `0${month}`;
    DD = DD.length === 2 ? day : `0${day}`;

    return `${YYYY}-${MM}-${DD}`;
  }

  checkForWeekendPrice() {
    const checkinInfo = this.state.checkinDate.split('/');
    const checkoutInfo = this.state.checkoutDate.split('/');
    let year = checkinInfo[2];
    let monthIn = Number(checkinInfo[0]);
    let dayIn = Number(checkinInfo[1]);
    let monthOut = Number(checkoutInfo[0]);
    let dayOut = Number(checkoutInfo[1]);
    const includesWeekend = (element) => ['Fri', 'Sat', 'Sun'].includes(element);
    const daysInRange = [];
    let price;
    let dtObj = this.makeDateObject(year, monthIn, dayIn);
    daysInRange.push(moment(dtObj).format('ddd'));

    if (monthIn === monthOut) {
      for (let i = Number(checkinInfo[1]); i < dayOut; i++) {
        dayIn += 1;
        dtObj = this.makeDateObject(year, monthIn, dayIn);
        daysInRange.push(moment(dtObj).format('ddd'));
      }
      if (daysInRange.some(includesWeekend)) {
        price = this.state.weekendPrice;
      } else {
        price = this.state.weekdayPrice;
      }
    }
    return price;
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

  updateCancellation(date) {
    const dateInfo = date.split('/');
    const year = dateInfo[2];
    const month = dateInfo[0];
    const day = dateInfo[1];
    const newDateObj = this.makeDateObject(year, month, day);

    this.setState({
      cancellation: moment(newDateObj).subtract(7, 'days').format('MMMM Do YYYY'),
    });
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
          showCalendarModal={this.showCalendarModal}
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
          <ViewDeals
            displayPrice={this.state.displayPrice}
            weekendPrice={this.state.displayPrice}
            cancellation={this.state.cancellation}
            checkinDate={this.state.checkinDate}
            makeDateObject={this.makeDateObject}
          />
        </DealsWrapper>
      </div>
    );
  }
}

export default RateCriteria;
