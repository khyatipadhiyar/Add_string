import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import App from './App';

afterEach(cleanup)

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Technical/i);
  expect(linkElement).toBeInTheDocument();
});


test('checking empty string', () => {
  const {getByTestId,getByText}=render(<App />);
  const inputField =  getByTestId('inputData') ;
  const btn = getByTestId('btn');
  const labsum = getByTestId('labsum');

  fireEvent.click(btn);

  const result = getByText("sum = 0")
  expect(result).toBeInTheDocument();
});

test('checking input string as 1',()=>{
  const {getByTestId,getByText}=render(<App />);
  const inputField =  getByTestId('inputData') ;
  const btn = getByTestId('btn');

  fireEvent.change(inputField,{target:{value:"1"}});
  fireEvent.click(btn);
  
  const result = getByText("sum = 1")
  expect(result).toBeInTheDocument();
});