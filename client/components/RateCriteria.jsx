import React from 'react';
import styled from 'styled-components';
import ViewDeals from './ViewDeals.jsx';
import CalendarModal from './CalendarModal.jsx';

const ChooseDates = styled.div`
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

const GuestsWrapper = styled.div`
  display: grid;
  grid-area: 2 / 1 / span 1 / span 1;
  height: 47px;
  grid-template: 1fr / 1fr
`;

const Guests = styled(Checkin)`
  grid-area: 1 / 1 / span 1 / span 1;
  margin: 5px 10px;
`;

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
        <ChooseDates>
          <Checkin>
            <button className="rateCriteria" type="button" onClick={this.showCalendarModal}>
              <p className="rateCriteria">Check In</p>
              <p className="rateCriteria">
                <strong>{this.state.checkinDay}, {this.state.checkinDate}
                </strong>
              </p>
            </button>
          </Checkin>
          <CalendarModal showCalendar={this.state.showCalendar} />
          <Checkout>
            <button className="rateCriteria" type="button">
              <p className="rateCriteria">Check Out</p>
              <p className="rateCriteria">
                <strong>
                  {this.state.checkoutDay}, {this.state.checkoutDate}
                </strong>
              </p>
            </button>
          </Checkout>
        </ChooseDates>
        <GuestsWrapper>
          <Guests>
            <button className="rateCriteria" type="button">
              <p className="rateCriteria">Guests</p>
              <p className="rateCriteria">
                <strong>
                  {this.state.rooms} rooms, {this.state.adults} adults, {this.state.children} children
                </strong>
              </p>
            </button>
          </Guests>
        </GuestsWrapper>
        <DealsWrapper>
          <ViewDeals mainPrice={this.state.mainPrice} />
        </DealsWrapper>
      </div>
    );
  }
}

export default RateCriteria;
