import React, { SFC, ReactNode } from 'react';
import { Button, ButtonProps } from '@hupu/rc-basic';  // 引入公共组件库
import styled from 'styled-components'; // styled-components

// 主题颜色
import * as C from '../../styles/theme';

// 可控属性
type Size = 'small' | 'large' | 'default';
type Theme = 'primary' | 'default' | 'icon' | 'menu';

// 组件主题传参
type CssProps = { 
  disabled: boolean | void;
  size: Size;
  theme: Theme;
 };

export interface ButtonUIProps extends ButtonProps { 
  size?: Size;
  theme?: Theme;
  disabled?: boolean;
 };

function themeMapToCss (theme: Theme, property: string, tag?: string): string { 
  let cssStr = '';

  switch (property) { 
  case 'border':
    if ( theme === 'primary' ) cssStr = `1px solid ${ C.colorBlue1A68FF }`;
    else if ( theme === 'default' ) cssStr = `1px solid ${ C.colorBlue1A68FF }`;
    else if ( theme === 'icon' ) cssStr = `1px solid ${ C.colorGrayd9d9d9 }`;
    else if ( theme === 'menu' ) cssStr = `1px solid ${ C.colorGrayd9d9d9 }`;
    break;
  case 'color':
    if ( theme === 'primary' ) cssStr =`${ C.colorwhitefff }`;
    else if ( theme === 'default' ) cssStr =`${ C.colorBlue1A68FF }`;
    else if ( theme === 'icon' ) cssStr =`${ C.colorGray666 }`;
    else if ( theme === 'menu' ) cssStr =`${ C.colorGray666 }`;
    break;
  case 'bg':
    if ( theme === 'primary' ) cssStr = `${ C.colorBlue1A68FF }`;
    else if ( theme === 'default' ) cssStr = `${ C.colorwhitefff }`;
    else if ( theme === 'icon' ) cssStr = `${ C.colorwhitefff }`;
    else if ( theme === 'menu' ) cssStr = `${ C.colorwhitefff }`;
    break;
  }

  return cssStr;
}


function sizeMapToCss (size: Size, property: string): string { 
  let cssStr = '';

  switch ( property) { 
  case 'width':
    if ( size === 'small' ) cssStr = '60px';
    else if ( size === 'default' ) cssStr = '80px';
    else if ( size === 'large' ) cssStr = '85px';
    break;
  case 'height':
    if ( size === 'small' ) cssStr = '30px';
    else if ( size === 'default' ) cssStr = '34px';
    else if ( size === 'large' ) cssStr = '42px';
    break;
  case 'lineheight':
    if ( size === 'small' ) cssStr = '28px';
    else if ( size === 'default' ) cssStr = '32px';
    else if ( size === 'large' ) cssStr = '40px';
    break;
  case 'fz':
    if ( size === 'small' ) cssStr = '12px';
    else if ( size === 'default' ) cssStr = '14px';
    else if ( size === 'large' ) cssStr = '16px';
    break;
  }

  return cssStr;
}

const Wrapper = styled.div<CssProps>`
  display: inline-block;
  border-radius: 4px;
  box-sizing: border-box;
  text-align:center;
  font-family: PingFangSC-Regular;

  cursor: ${ props => props.disabled ? 'not-allowed' :'pointer' };
  background: ${ props => props.disabled ? `${ C.colorGrayf7f7f7 }` : themeMapToCss( props.theme, 'bg') };
  border: ${ props => props.disabled ? `${ C.colorGrayd9d9d9 }` : themeMapToCss( props.theme, 'border' ) };    
  color: ${ props => props.disabled ? `${ C.colorGrayccc }`: themeMapToCss( props.theme, 'color' ) };

  width: ${ props => sizeMapToCss( props.size, 'width' ) };
  height: ${ props => sizeMapToCss( props.size, 'height' ) };    
  line-height: ${ props => sizeMapToCss( props.size, 'lineheight'  ) };   
  font-size: ${ props => sizeMapToCss( props.theme, 'fz' ) }; 
`;

const StyledButton = styled(Button)<ButtonUIProps>``;

const ButtonUI: SFC<ButtonUIProps> = props => { 
  const {  children, size = 'default', theme , disabled, ...rest  } = props;

  return (
    <Wrapper
      disabled={ disabled }
      theme={ theme }
      size={ size }
    >
      <StyledButton
        {  ...rest  }
      >
        {  children  }
      </StyledButton>
    </Wrapper>
  );
};

export default ButtonUI;