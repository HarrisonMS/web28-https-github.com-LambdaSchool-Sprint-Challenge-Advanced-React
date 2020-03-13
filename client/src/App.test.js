import React from 'react';
import ReactDOM from 'react-dom';
import * as rtl from "@testing-library/react";
import App from "./App";
import { PlayerCard }from "./components/PlayerCard";

test('renders PlayerCard component', () => {
  const wrapper = rtl.render(<PlayerCard />);
  console.log(wrapper.debug());
});

test('renders localstorage', () => {
  const wrapper = rtl.render(<useLocalStorage/>);
  console.log(wrapper.debug());
});

test('renders darkmode', () => {
  const wrapper = rtl.render(<useDarkMode/>);
  console.log(wrapper.debug());
});

it('contains Kerr', () => {
  const wrapper = rtl.render(<App />);
  const saysKerr = wrapper.queryAllByText('kerr');
});
