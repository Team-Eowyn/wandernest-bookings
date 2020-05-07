import React from 'react';
import renderer from 'react-test-renderer';
import RateCriteria from '../client/components/RateCriteria.jsx';

it('renders correctly', () => {
  const tree = renderer
    .create(<RateCriteria></RateCriteria>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('if set to false, showCalendar property changes to true on click', () => {
  const component = renderer.create(
    <RateCriteria></RateCriteria>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.showCalendarModal();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.showCalendarModal();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
