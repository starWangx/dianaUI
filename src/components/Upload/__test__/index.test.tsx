import * as React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Upload from '../index';

configure({ adapter: new Adapter() });

describe('Upload', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <Upload 
        action='http://all-backend.hupu.com/admin/upload'
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('pass theme parameter', () => {
    const wrapper = mount(<Upload
      theme='card'
      action='http://all-backend.hupu.com/admin/upload'
    />);

    expect(wrapper.props().theme).toEqual('card');
  });

  it('pass preview parameter', () => {
    const wrapper = mount(<Upload
      preview={true}
      action='http://all-backend.hupu.com/admin/upload'
    />);

    expect(wrapper.props().preview).toEqual(true);
  });

  it('pass hintMsg parameter', () => {
    const wrapper = mount(<Upload
      hintMsg='test message'
      action='http://all-backend.hupu.com/admin/upload'
    />);

    expect(wrapper.props().hintMsg).toEqual('test message');
  });

  it('pass showHint parameter', () => {
    const wrapper = mount(<Upload
      showHint={false}
      action='http://all-backend.hupu.com/admin/upload'
    />);

    expect(wrapper.props().showHint).toEqual(false);
  });
});
