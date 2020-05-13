import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Wrapper = styled.div`
  display: grid;
  height: 293px;
  width: 267px;
  grid-template: 46px 247px / 267px
`;

const Header = styled.span`
  display: grid;
  grid-area: 1 / 1 / span 1 / span 1;
  text-align: center;
  font-weight: bold;
  padding: 10px 0px;
  grid-template: 46px / 17px 250px;
`;

const MonthTitle = styled.span`
  display: grid;
  grid-area: 1 / 2 / span 1 / span 1;
  padding-top: 3px;
`;

const NextButton = styled.span`
  display: grid;
  grid-area: 1 / 1 / span 1 / span 1;
`;

const CalTable = styled.table`
  display: grid;
  grid-area: 2 / 1 / span 1 / span 1;
`;

const Week = styled.tr`
  height: 36px;
`;

const Day = styled.td`
  font-weight: normal;
  width: 34px;
  font-size: 11px;
  height: 36px;
  text-align: center;
  &:hover {
    background-color: darkturquoise;
    color: white;
  }
`;

const WeekDay = styled.td`
  height: 36px;
  text-align: center;
  font-weight: normal;
  width: 34px;
  text-transform: uppercase;
  font-size: 10px;
`;

class LeftCalendar extends React.Component {
  constructor(props) {
    super(props);

    this.makeRows = this.makeRows.bind(this);
    this.getBlanks = this.getBlanks.bind(this);
  }

  getBlanks() {
    const firstDayOfMonth = moment(`${this.props.year}-${this.props.month}-${this.props.day}`).startOf('month').format('d');
    let blanks = [];
    while (blanks.length < firstDayOfMonth) {
      blanks.push('');
    }
    return blanks;
  }

  makeRows() {
    const month = [];
    const days31 = ['01', '03', '05', '07', '08', '10', '12'];
    const days30 = ['04', '06', '09', '11'];
    let daysThisMonth;

    if (days31.includes(this.props.month)) {
      daysThisMonth = 31;
    } else if (days30.includes(this.props.month)) {
      daysThisMonth = 30;
    } else {
      daysThisMonth = 28;
    }

    let currentDate = 1;
    const makeNextRow = (date) => {
      const currentWeek = [];

      if (daysThisMonth - date < 7) {
        let remaining = daysThisMonth - date + 1;
        while (currentWeek.length < remaining) {
          currentWeek.push(date);
          date++;
        }
        month.push(currentWeek);
        return;
      }
      if (date === 1) {
        let blanks = this.getBlanks();
        blanks.map(blank => currentWeek.push(blank));
      }
      while (currentWeek.length < 7) {
        currentWeek.push(date);
        date++;
      }
      month.push(currentWeek);
      makeNextRow(date);
    };
    makeNextRow(currentDate);

    return month;
  }

  render() {
    return (
      <div>
        <Wrapper>
          <Header>
            <MonthTitle>{moment(`${this.props.year}-${this.props.month}-${this.props.day}`).format('MMMM')} 2020</MonthTitle>
            <NextButton>
              <button type="button" className="next" onClick={this.props.handlePrevClick}>{'<'}</button>
            </NextButton>
          </Header>
          <CalTable>
            <Week>
              {moment.weekdaysShort().map((day) => {
                return <WeekDay key={day}>{ day }</WeekDay>;
              })}
            </Week>
            {this.makeRows().map((week) => {
              return (
                <Week>
                  {week.map((day) => {
                    return <Day onClick={(e) => { this.props.handleDateClick(e, day, this.props.month); }}>{ day }</Day>;
                  })}
                </Week>
              );
            })}
          </CalTable>
        </Wrapper>
      </div>
    );
  }
}

export default LeftCalendar;
