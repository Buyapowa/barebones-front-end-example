import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


describe("test x component", 
  ()=> {
    test("render the title of component", ()=>{
      const wrapper = shallow(<App/>);
      expect(wrapper.find("h1").text()).toContain("This is counter app")
    })
  }
)