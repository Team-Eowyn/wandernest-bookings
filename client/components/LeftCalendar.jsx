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

const WeekDay = styled.th`
  font-weight: normal;
  width: 34px;
  text-transform: uppercase;
  font-size: 10px;
`;

class LeftCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.firstDayOfMonth = this.firstDayOfMonth.bind(this);
    this.findMonth = this.findMonth.bind(this);
  }

  firstDayOfMonth() {
    return moment(this.props.firstDay).startOf('month').format('d');
  }

  findMonth() {
    return moment().month(this.props.month).format('MMMM');
  }

  render() {
    return (
      <div>
        <Wrapper>
          <Header>{this.findMonth()} 2020</Header>
          <CalTable>
            <thead>
              <tr>
                {moment.weekdaysShort().map((day) => {
                  return <WeekDay key={day}>{ day }</WeekDay>;
                })}
              </tr>
              <tr>{this.firstDayOfMonth()}</tr>
            </thead>
          </CalTable>
        </Wrapper>
      </div>
    );
  }
}

export default LeftCalendar;
