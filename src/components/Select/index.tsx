import React, {SFC, ReactNode} from 'react';
import {Select, SelectProps, Option} from '@hupu/rc-basic';
import styled ,{ keyframes}from 'styled-components';
import {isType} from 'peeler-js';
import * as C from '../../styles/theme';
import Calendar from '../Calendar';

type Theme = 'basic' | 'calendar' | 'search';
type CssProps = {
  theme: Theme;
};

export interface SelectUIProps extends Partial<SelectProps> {
  theme?: Theme;
  renderOption?: [string, ReactNode];
};

const showOn = keyframes`
  0% {
     opacity: 0
  }
  50% {
     opacity: 0.6
  }
  100% {
    opacity: 1
  }
`;


// function setTop(top = 34){
//   return top;
// }
//
// window.addEventListener('mousemove',function () {
//   let top = 0
//   if(document.querySelector('.hupu-select-focus')){
//     console.log(document.querySelector('.hupu-select-focus').clientHeight);
//     top = (document.querySelector('.hupu-select-focus').clientHeight);
//     setTop(top)
//   }
// });
//


function themeMapToCss(props: SelectUIProps, property: string, tag?: string): string {
  let cssStr = '';
  const  { theme,multiple}  = props;

  switch (property) {
  case 'fz':
    if (theme === 'basic') cssStr = '12px';
    else if (theme === 'calendar') cssStr = '12px';
    else if (theme === 'search') cssStr = '14px';
    break;
  case 'width':
    if (theme === 'basic' || theme === 'search') cssStr = multiple ?  '220px' : '120px';
    else if (theme === 'calendar') cssStr = '220px';
    break;
  case 'height':
    if (theme === 'basic') cssStr = tag === 'icon' ? '10px' : '32px';
    else if (theme === 'calendar') cssStr = tag === 'icon' ? '28px' : '32px';
    else if (theme === 'search') cssStr = tag === 'icon' ? '52px' : '32px';
    break;
  case 'ff':
    if (theme === 'basic') cssStr = 'HiraginoSansGB-W3';
    else if (theme === 'calendar') cssStr = 'PingFangSC-Regular';
    else if (theme === 'search') cssStr = 'HiraginoSansGB-W3';
    break;
  case 'top':
    if (theme === 'basic') cssStr = cssStr = tag === 'icon' ? '50%' : '50%';
    else if (theme === 'calendar') cssStr = cssStr = tag === 'icon' ? '28px' : '66px';
    else if (theme === 'search') cssStr = cssStr = tag === 'icon' ? '41px' : '111px';
    break;
  case 'left':
    if (theme === 'basic') cssStr = tag === 'icon' ? '8px' : '10px';
    else if (theme === 'calendar') cssStr = '50%';
    else if (theme === 'search') cssStr = '50%';
    break;
  case 'transform':
    if (theme === 'basic') cssStr = 'translate(0, -50%)';
    else if (theme === 'calendar') cssStr = 'translate(-50%, 0)';
    else if (theme === 'search') cssStr = 'translate(-50%, 0)';
    break;

  case 'dp':
    if (theme === 'basic') cssStr = 'block';
    else if (theme === 'calendar') cssStr = 'block';
    else if (theme === 'search') cssStr = 'none';
    break;

  case 'option' :
    cssStr = `
  .hupu-select-option{
    width:100%;
    padding:0 10px;
    box-sizing: border-box;
    display:block
    transition: all .3s ease;
    height:30px;
    line-height:30px
  }
  
  .hupu-select-active{
         transition: background .3s ease;
         background:${C.colorBluebae7ff};   
   }`;
  }

  return cssStr;
}



const StyleSelect = styled(Select as any)<any>`
  display:inline-block
  user-select: none;
  position: relative;
  border-radius: 4px;
  box-sizing: border-box;
  position:relative;
  color: ${C.colorGray666};
  width: ${props => themeMapToCss(props, 'width')};
  min-height: ${props => themeMapToCss(props, 'height')};
  font-size: ${props => themeMapToCss(props, 'fz')};
  font-family: ${props => themeMapToCss(props, 'ff')};
  
  background:  ${props => props.disabled ?'#f5f5f5' :''}};
  color:  ${props => props.disabled ?'rgba(0,0,0,0.25)' :''}};
  border:  ${props => props.disabled ?`1px dashed ${C.colorGrayd9d9d9}` :`1px solid ${C.colorGrayd9d9d9}`}};
  &:hover {
   border: ${props => props.disabled ?'' :`solid 1px ${C.colorBlue1890ff};`}; 
   cursor:  ${props => props.disabled ?'not-allowed' :'pointer'};
  }
 .hupu-select{
   &-placeholder {
    color: #bfbfbf
  }
 
  &-wrapper{
    line-height:30px
    padding-left:10px;
    font-size:14px;
    // display: ${props => props.multiple ?'block' :'none'};
  }
 
  &-menu{
    position:absolute;
    width: ${props => themeMapToCss(props, 'width')};
    z-index:100;
    top:34px;
    box-sizing: border-box;
    background:white;
    box-shadow:0px 1px 5px 0px rgba(215,215,215,1);
    
    animation-timing-function: ease;
    animation-duration: .1s;
    animation-name: ${showOn};
    }
  
  &-search-filter{
    position:${props => props.multiple ? 'relative':'absolute'}
    left:${props => props.multiple ? '0':'10px'}
    border-bottom:${props => props.multiple ? 'solid 1px'+C.colorGrayccc:'0'}
    width:${props => props.multiple ? '100%':'100px'}
    overflow:hidden
    top:${props => props.multiple ? '':'-34px'}
    height: ${props => themeMapToCss(props.theme, 'height')};
    input{
        font-size:14px;
        height:28px;
        margin-left:${props => props.multiple ? '20px':''}
        line-height:30px;
        width:95%;
        outline:none;
        border:none;
    font-size: ${props => themeMapToCss(props.theme, 'fz')};
     font-family: ${props => themeMapToCss(props.theme, 'ff')};
    }
  }
  
   &-search-filter:before{
     background: url(
     data:image/png;base64,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    ) no-repeat;
    content:' ';
    position: absolute;
    display:${props => props.multiple ? 'block':'none'};
    left: 5px;
    background-size: 15px 15px;
    top: 8px;
    width: 30px;
    height:30px
  }
  
  
  &-current{
    position:relative
  }
  &-current:after{
     background: url(
       data:image/png;base64,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
    ) no-repeat;
    content:' ';
    position: absolute;
    right: 10px;
    background-size: 15px 15px;
    top: 10px;
    width: 30px;
    height:30px
  }
  &-tag{
    position: relative;
    float: left;
    max-width: 99%;
    margin-right: 4px;
    box-sizing:border-box;
    padding: 0 15px 0 10px;
    overflow: hidden;
    color: rgba(0,0,0,0.65);
    background-color: #fafafa;
    border: 1px solid #e8e8e8;
    border-radius: 2px;
    cursor: default;
    height:22px;
    margin:3px;
    line-height:1.5;
  
    transition: padding .3s cubic-bezier(.645, .045, .355, 1);
  }
  &-select-delete{
   background: url(
    data:image/png;base64,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    ) no-repeat;
    background-size: 13px;
    height: 13px;
    margin-left: 2px;
    top:4px;
    width: 13px;
    position:absolute
  }
  
 &-select-delete:hover{
    cursor: pointer;
   }
 }
  ${props => props.theme !== 'calendar' && themeMapToCss(props.theme, 'option')}
`;

const placeholders = {
  basic: '请选择',
  calendar: '开始时间',
  search: '请输入'
};


const SelectUI: SFC<SelectUIProps> = props => {
  const {children, theme = 'basic', renderOption, placeholder, ...rest} = props;
  const defaultholder = placeholders[theme];
  const isRenderOption = renderOption && isType('array')(renderOption) && renderOption.length > 0;


  return (<StyleSelect
    style={{display:'inline-block'}}
    theme={theme}
    maxCanChoose

    showSearch={theme === 'search'}
    placeholder={placeholder || defaultholder}
    {...rest}
  >

    {theme === 'calendar' ?
      <Option key={1} value={1}>
        <Calendar
          onClick={(date)=>{
            console.log(date);
          }}
          year={2035}
          month={3}
          day={22}
        />
      </Option> : isRenderOption && renderOption!.map((v, k) => {
        if (React.isValidElement(v)) return v;
        return (
          <Option value={v as string} key={`${v}-${k}`}>
            {v}
          </Option>
        );
      })}

  </StyleSelect>);
};

export {Option};
export default SelectUI;