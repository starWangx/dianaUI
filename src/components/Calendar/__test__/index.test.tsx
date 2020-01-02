import * as React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Calendar from '../index';

configure({ adapter: new Adapter() });

describe('Calendar', () => {
  it('renders correctly - shallow', () => {
    const wrapper = shallow(<Calendar
      year={2035}
      month={3}
      day={22}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly - render', () => {
    const wrapper = render(<Calendar
      year={2035}
      month={3}
      day={22}
    />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly - mount', () => {
    const wrapper = mount(<Calendar
      year={2035}
      month={3}
      day={22}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
