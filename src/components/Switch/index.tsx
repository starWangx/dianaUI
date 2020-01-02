import React, { SFC } from 'react';
import { Switch, SwitchProps } from '@hupu/rc-basic';
import styled, { keyframes } from 'styled-components';
import * as C from '../../styles/theme';

export interface SwitchUIProps extends SwitchProps { };

const switchOn = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1.1);
  }
`;

const switchOff = keyframes`
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const StyledSwitch = styled(Switch)`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: 44px;
  height: 22px;
  line-height: 20px;
  padding: 0;
  vertical-align: middle;
  border-radius: 20px 20px;
  border: 1px solid #ccc;
  background-color: #ccc;
  cursor: pointer;
  transition: all .3s cubic-bezier(0.35, 0, 0.25, 1);

  :after{
    position: absolute;
    width: 18px;
    height: 18px;
    left: 2px;
    top: 1px;
    border-radius: 50% 50%;
    background-color: #fff;
    content: " ";
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
    transform: scale(1);
    transition: left .3s cubic-bezier(0.35, 0, 0.25, 1);
    animation-timing-function: cubic-bezier(0.35, 0, 0.25, 1);
    animation-duration: .3s;
    animation-name: ${switchOff};
  }

  :hover:after {
    transform: scale(1.1);
    animation-name: ${switchOn};
  }

  :focus {
    box-shadow: 0 0 0 2px fade(${C.colorBlue1890ff}, 20%);
    outline: none;
  }

  :focus:hover {
    box-shadow: none;
  }

  & .diana-switch-inner {
    color: #fff;
    font-size: 12px;
    position: absolute;
    left: 24px;
    top: 0;
  }

  &.diana-switch-checked {
    border: 1px solid ${C.colorBlue1A68FF};
    background-color: ${C.colorBlue1A68FF};
    :after{
      left: 22px;
    }
    .diana-switch-inner {
      left: 6px;
    }
  }

  &.diana-switch-disabled {
    cursor: no-drop;
    background: #ccc;
    border-color: #ccc;
    :after{
      background: #9e9e9e;
      animation-name: none;
      cursor: no-drop;
    }
    :hover:after{
      transform: scale(1);
      animation-name: none;
    }
  }
`;

const SwitchUI: SFC<SwitchUIProps> = props => {
  return (
    <StyledSwitch
      { ...props }
      prefixCls='diana-switch'
    />
  );
};

export default SwitchUI;