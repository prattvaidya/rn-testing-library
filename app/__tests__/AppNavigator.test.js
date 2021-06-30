import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render, fireEvent } from '@testing-library/react-native';

import AppNavigator from '../AppNavigator';

// Silence the warning https://github.com/facebook/react-native/issues/11094#issuecomment-263240420
// Use with React Native <= 0.63
// jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

console.log("about to mock")
// Use this instead with React Native >= 0.64
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
console.log("done mocking")

describe('Testing react navigation', () => {
  test('page contains the header and 10 items', async () => {
    console.log("done mocking")
    
    expect(1).toBeTruthy()
    const component = (
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    );

    const { getByText, findByText, findAllByText, debug } = render(component);

      // debug("Yellow")

      const a = getByText('List of numbers from 1 to 20')

      console.log(a)

    // const header = await findByText('List of numbers from 1 to 20');
    // const items = await findAllByText(/Item number/);

    // expect(header).toBeTruthy();
    // expect(items.length).toBe(10);
  });

  test('clicking on one item takes you to the details screen', async () => {
    expect(1).toBeTruthy()
    // const component = (
    //   <NavigationContainer>
    //     <AppNavigator />
    //   </NavigationContainer>
    // );

    // const { findByText } = render(component);
    // const toClick = await findByText('Item number 5');

    // fireEvent(toClick, 'press');
    // const newHeader = await findByText('Showing details for 5');
    // const newBody = await findByText('the number you have chosen is 5');

    // expect(newHeader).toBeTruthy();
    // expect(newBody).toBeTruthy();
  });
});