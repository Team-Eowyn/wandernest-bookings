import React from 'react';
import styled from 'styled-components';

const Calendar = styled.div`
  position: absolute;
  display: grid;
  z-index: 5;
  height: 419px;
  width: 597px;
  background-color: whitesmoke;
  margin-left: 200px;
  grid-template: 1fr / 1fr
`;

const Wrapper = styled.div`
  display: grid;
  grid-area: 1 / 1 / span 1 / span 1;
  height: 395px;
  grid-template: 57px 293px 45px / 298px 299px;


`;

const Header = styled.div`
  display: grid;
  grid-area: 1 / 1 / span 1 / span 2;
  color: black;
  text-align: center;
  background-color: whitesmoke;
  margin: 0px 15px;
  padding: 15px 0px 10px 0px;
  border-bottom: 1px solid lightgray;
`;

const HeaderFooterText = styled.p`
  line-height: 0px;
`;

const Left = styled.div`
  display: grid;
  grid-area: 2 / 1 / span 1 / span 1;
  background-color: whitesmoke;
  color: black;
  margin: 12px 0px;
  padding: 0px 16px;

`;

const Right = styled(Left)`
  grid-area: 2 / 2 / span 1 / span 1;
  border-left: 1px solid lightgray;
`;

const Footer = styled.div`
  display: grid;
  grid-area: 3 / 1 / span 1 / span 2;
  background-color: whitesmoke;
  color: gray;
  margin: 0x 15px;
  padding: 16px 0px;
  border-top: 1px solid lightgray;
`;

const Arrow = styled.div`
  position: absolute;
  z-index: 8;
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-right: 30px solid whitesmoke;
  border-bottom: 15px solid transparent;
  margin-left: 175px;
  margin-top: 12px;
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
    <div>
      <Arrow />
      <Calendar>
        <Wrapper>
          <Header>
            <HeaderFooterText>Select a date to continue</HeaderFooterText>
          </Header>
          <Left>Left</Left>
          <Right>Right</Right>
          <Footer>
            <HeaderFooterText>Average daily rates: $240-$350</HeaderFooterText>
          </Footer>
        </Wrapper>
      </Calendar>
    </div>
    );
  }
}

export default CalendarModal;
