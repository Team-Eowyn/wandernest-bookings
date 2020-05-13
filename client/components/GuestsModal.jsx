import React from 'react';
import styled from 'styled-components';
import { FaBed } from 'react-icons/fa';
import { FaUserFriends } from 'react-icons/fa';
import { FaChild } from 'react-icons/fa';

const GuestsModalWrapper = styled.div`
  position: absolute;
  display: grid;
  z-index: 10;
  height: 206px;
  width: 256px;
  background-color: whitesmoke;
  padding: 32px 16px 16px 16px;
  margin-left: 400px;
  margin-top: 0px;
  grid-template: 56px 55px 55px 40px / 50px 85px 121px;
`;

const Arrow = styled.div`
  position: absolute;
  z-index: 8;
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-right: 30px solid whitesmoke;
  border-bottom: 15px solid transparent;
  margin-left: 375px;
  margin-top: 65px;
`;

const CloseModal = styled.button`
  position: absolute;
  z-index: 15;
  width: 15px;
  heigth: 15px;
  margin-left: 665px;
  background-color: transparent;
  border-color: transparent;
  margin-top: 5px;
  font-weight: bold;
`;

const RoomsIcon = styled.div`
  display: grid;
  grid-area: 1 / 1 / span 1 / span 1;
  font-size: 18px;
  padding: 17px 0px 17px 10px;
`;

const AdultsIcon = styled(RoomsIcon)`
  grid-area: 2 / 1 / span 1 / span 1;
`;

const ChildrenIcon = styled(RoomsIcon)`
  grid-area: 3 / 1 / span 1 / span 1;
`;

const Rooms = styled.div`
  display: grid;
  grid-area: 1 / 2 / span 1 / span 1;
  text-align: left;
  font-size: 12px;
  padding: 20px 0px;
`;

const Adults = styled(Rooms)`
  grid-area: 2 / 2 / span 1 / span 1;
`;

const Children = styled(Rooms)`
  grid-area: 3 / 2 / span 1 / span 1;
`;

const Update = styled.button`
  display: grid;
  grid-area: 4 / 1 / span 1 / span 3;
  background-color: black;
  color: white;
  padding: 10px 0px;
  border-radius: 2px;
  font-size: 12px;
`;

const RoomChanges = styled.div`
  display: grid;
  grid-area: 1 / 3 / span 1 /span 1;
  padding: 10px 0xp;
  grid-template: 56px / 35px 51px 35px;
`;

const RoomDecrease = styled.button`
  display: grid;
  grid-area: 1 / 1 / span 1 / span 1;
  font-size: 20px;
  background-color: transparent;
  border-color: lightgray;
  margin: 10px 0px;
`;

const RoomQuantity = styled.span`
  display: grid;
  grid-area: 1 / 2 / span 1 / span 1;
  font-size: 14px;
  background-color: transparent;
  border-style: solid;
  border-width: 1px;
  border-left: none;
  border-right: none;
  border-color: lightgray;
  margin: 10px 0px;
  text-align: center;
  padding-top: 10px;
`;

const RoomIncrease = styled(RoomDecrease)`
  grid-area: 1 / 3 / span 1 / span 1;
`;

const AdultChanges = styled(RoomChanges)`
  grid-area: 2 / 3 / span 1 / span 1;
  grid-template: 55px / 35px 51px 35px;
`;

const AdultDecrease = styled(RoomDecrease)`
  grid-area: 1 / 1 / span 1 / span 1;
`;

const AdultQuantity = styled(RoomQuantity)`
  grid-area: 1 / 2 / span 1 / span 1;
`;

const AdultIncrease = styled(RoomDecrease)`
  grid-area: 1 / 3 / span 1 / span 1;
`;

const ChildrenChanges = styled(RoomChanges)`
  grid-area: 3 / 3 / span 1 / span 1;
  grid-template: 55px / 35px 51px 35px;
`;

const ChildDecrease = styled(RoomDecrease)`
  grid-area: 1 / 1 / span 1 / span 1;
`;

const ChildQuantity = styled(RoomQuantity)`
  grid-area: 1 / 2 / span 1 / span 1;
`;

const ChildIncrease = styled(RoomDecrease)`
  grid-area: 1 / 3 / span 1 / span 1;
`;

const GuestsModal = (props) => {
  if (!props.showGuests) {
    return null;
  }
  return (
    <div>
      <CloseModal onClick={props.showGuestsModal}>X</CloseModal>
      <Arrow />
      <GuestsModalWrapper>
        <Rooms>Rooms</Rooms>
        <RoomsIcon><FaBed /></RoomsIcon>
        <RoomChanges>
          <RoomDecrease onClick={props.decreaseRooms}>-</RoomDecrease>
          <RoomQuantity>{props.rooms}</RoomQuantity>
          <RoomIncrease onClick={props.increaseRooms}>+</RoomIncrease>
        </RoomChanges>
        <Adults>Adults</Adults>
        <AdultsIcon><FaUserFriends /></AdultsIcon>
        <AdultChanges>
          <AdultDecrease onClick={props.decreaseAdults}>-</AdultDecrease>
          <AdultQuantity>{props.adults}</AdultQuantity>
          <AdultIncrease onClick={props.increaseAdults}>+</AdultIncrease>
        </AdultChanges>
        <Children>Children</Children>
        <ChildrenIcon><FaChild /></ChildrenIcon>
        <ChildrenChanges>
          <ChildDecrease onClick={props.decreaseChildren}>-</ChildDecrease>
          <ChildQuantity>{props.children}</ChildQuantity>
          <ChildIncrease onClick={props.increaseChildren}>+</ChildIncrease>
        </ChildrenChanges>
        <Update onClick={props.showGuestsModal}>Update</Update>
      </GuestsModalWrapper>
    </div>
  );
};

export default GuestsModal;
