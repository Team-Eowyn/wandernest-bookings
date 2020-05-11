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
`;

const WeekDay = styled(Day)`
  text-transform: uppercase;
  font-size: 10px;
`;

class LeftCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateObject: `${this.props.year}-${this.props.month}-${this.props.day}`,
      rowStart: 1,
    };
    this.makeRow = this.makeRow.bind(this);
    this.getBlanks = this.getBlanks.bind(this);
  }

  getBlanks() {
    const firstDayOfMonth = moment(this.state.dateObject).startOf('month').format('d');
    const blanks = [];
    while (blanks.length < firstDayOfMonth) {
      blanks.push('');
    }
    return blanks;
  }

  makeRow(start) {
    const days31 = ['01', '03', '05', '07', '08', '10', '12'];
    const days30 = ['04', '06', '09', '11'];
    const week = [];
    let daysThisMonth;
    let remaining;

    if (days31.includes(this.props.month)) {
      daysThisMonth = 31;
    } else if (days30.includes(this.props.month)) {
      daysThisMonth = 30;
    } else {
      daysThisMonth = 28;
    }

    if (start === 1) {
      remaining = 7 - moment(this.state.dateObject).startOf('month').format('d');
    } else if (daysThisMonth - start < 7) {
      remaining = daysThisMonth - start + 1;
    } else {
      remaining = 7;
    }
    let dateInWeek = start;
    while (week.length < remaining) {
      week.push(dateInWeek);
      dateInWeek++;
    }
    return week;
  }

  render() {
    return (
      <div>
        <Wrapper>
          <Header>{moment(this.state.dateObject).format('MMMM')} 2020</Header>
          <CalTable>
            <Week>
              {moment.weekdaysShort().map((day) => {
                return <WeekDay key={day}>{ day }</WeekDay>;
              })}
            </Week>
            <Week>
              {this.getBlanks().map((blank) => <Day>{blank}</Day>)}
              {this.makeRow(1).map((day) => <Day>{ day }</Day>)}
            </Week>
            <Week>
              {this.makeRow(3).map((day) => <Day>{ day }</Day>)}
            </Week>
            <Week>
              {this.makeRow(10).map((day) => <Day>{ day }</Day>)}
            </Week>
            <Week>
              {this.makeRow(17).map((day) => <Day>{ day }</Day>)}
            </Week>
            <Week>
              {this.makeRow(24).map((day) => <Day>{ day }</Day>)}
            </Week>
            <Week>
              {this.makeRow(31).map((day) => <Day>{ day }</Day>)}
            </Week>
          </CalTable>
        </Wrapper>
      </div>
    );
  }
}

export default LeftCalendar;
