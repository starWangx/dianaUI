import * as React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../index';

configure({ adapter: new Adapter() });

describe('Button', () => {
  it('renders correctly - shallow', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly - render', () => {
    const wrapper = render(<Button />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly - mount', () => {
    const wrapper = mount(<Button />);

    expect(wrapper).toMatchSnapshot();
  });
});
