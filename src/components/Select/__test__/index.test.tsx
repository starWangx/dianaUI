import * as React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Select from '../index';

configure({ adapter: new Adapter() });

describe('Select', () => {
  it('renders correctly - shallow', () => {
    const wrapper = shallow(<Select />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly - render', () => {
    const wrapper = render(<Select />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly - mount', () => {
    const wrapper = mount(<Select />);

    expect(wrapper).toMatchSnapshot();
  });
});
