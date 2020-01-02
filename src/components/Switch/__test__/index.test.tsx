import * as React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Switch from '../index';

configure({ adapter: new Adapter() });

describe('Switch', () => {
  it('renders correctly - shallow', () => {
    const wrapper = shallow(<Switch />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly - render', () => {
    const wrapper = render(<Switch />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly - mount', () => {
    const wrapper = mount(<Switch />);

    expect(wrapper).toMatchSnapshot();
  });
});
