import React, { SFC } from 'react';
import { Upload, UploadProps } from '@hupu/rc-basic';
import styled from 'styled-components';
import * as C from '../../styles/theme';
import clickPng from '../../assets/img/click.png';
import cardPng from '../../assets/img/card.png';
import dragPng from '../../assets/img/drag.png';

type Theme = 'click' | 'card' | 'drag';
type CssProps = {
  theme: Theme;
};

export interface UploadUIProps extends UploadProps {
  theme?: Theme;
  hintMsg?: string;
  showHint?: boolean;
  preview?: boolean;
};

function themeMapToCss (theme: Theme, property: string, tag?: string): string {
  let cssStr = '';

  switch (property) {
  case 'border':
    if (theme === 'click') cssStr = `1px solid ${C.colorGrayd9d9d9}`;
    else if (theme === 'card') cssStr = `1px dashed ${C.colorGrayd9d9d9}`;
    else if (theme === 'drag') cssStr = `1px dashed ${C.colorGrayd9d9d9}`;
    break;
  case 'fz':
    if (theme === 'click') cssStr = '12px';
    else if (theme === 'card') cssStr = '12px';
    else if (theme === 'drag') cssStr = '14px';
    break;
  case 'width':
    if (theme === 'click') cssStr = tag === 'icon' ? '10px' : '80px';
    else if (theme === 'card') cssStr = tag === 'icon' ? '28px' : '96px';
    else if (theme === 'drag') cssStr = tag === 'icon' ? '52px' : '380px';
    break;
  case 'height':
    if (theme === 'click') cssStr = tag === 'icon' ? '10px' : '22px';
    else if (theme === 'card') cssStr = tag === 'icon' ? '28px' : '102px';
    else if (theme === 'drag') cssStr = tag === 'icon' ? '52px' : '194px';
    break;
  case 'ff':
    if (theme === 'click') cssStr = 'HiraginoSansGB-W3';
    else if (theme === 'card') cssStr = 'PingFangSC-Regular';
    else if (theme === 'drag') cssStr = 'HiraginoSansGB-W3';
    break;
  case 'bg':
    if (theme === 'click') cssStr = cssStr = tag === 'icon' ? `url(${clickPng}) no-repeat 0 0/cover` : C.colorwhitefff;
    else if (theme === 'card') cssStr = cssStr = tag === 'icon' ? `url(${cardPng}) no-repeat 0 0/cover` : C.colorGrayfbfbfb;
    else if (theme === 'drag') cssStr = cssStr = tag === 'icon' ? `url(${dragPng}) no-repeat 0 0/cover` : C.colorGrayfbfbfb;
    break;
  case 'top':
    if (theme === 'click') cssStr = cssStr = tag === 'icon' ? '50%' : '50%';
    else if (theme === 'card') cssStr = cssStr = tag === 'icon' ? '28px' : '66px';
    else if (theme === 'drag') cssStr = cssStr = tag === 'icon' ? '41px' : '111px';
    break;
  case 'left':
    if (theme === 'click') cssStr = tag === 'icon' ? '8px' : '10px';
    else if (theme === 'card') cssStr = '50%';
    else if (theme === 'drag') cssStr = '50%';
    break;
  case 'transform':
    if (theme === 'click') cssStr = 'translate(0, -50%)';
    else if (theme === 'card') cssStr = 'translate(-50%, 0)';
    else if (theme === 'drag') cssStr = 'translate(-50%, 0)';
    break;
  }

  return cssStr;
}

const Wrapper = styled.div<CssProps>`
  position: relative;
  border: ${props => themeMapToCss(props.theme, 'border')};
  border-radius: 4px;
  box-sizing: border-box;
  background: ${props => themeMapToCss(props.theme, 'bg')};
  color: ${C.colorGray666};
  width: ${props => themeMapToCss(props.theme, 'width')};
  height: ${props => themeMapToCss(props.theme, 'height')};
  font-size: ${props => themeMapToCss(props.theme, 'fz')};
  font-family: ${props => themeMapToCss(props.theme, 'ff')};
`;

const txt = {
  click: '上传文件',
  card: '上传图片',
  drag: '点击或将文件拖拽到这里上传',
  hint: '支持扩展名：.rar .zip .doc .docx .pdf .jpg...'
};

const Icon = styled.i<CssProps>`
  position: absolute;
  width: ${props => themeMapToCss(props.theme, 'width', 'icon')};
  height: ${props => themeMapToCss(props.theme, 'height', 'icon')};
  top: ${props => themeMapToCss(props.theme, 'top', 'icon')};
  left: ${props => themeMapToCss(props.theme, 'left', 'icon')};
  transform: ${props => themeMapToCss(props.theme, 'transform', 'icon')};
  background: ${props => themeMapToCss(props.theme, 'bg', 'icon')};
`;

const Text = styled.span<CssProps>`
  position: absolute;
  width: 100%;
  top: ${props => themeMapToCss(props.theme, 'top', 'text')};
  left: ${props => themeMapToCss(props.theme, 'left', 'text')};
  transform: ${props => themeMapToCss(props.theme, 'transform', 'icon')};
  text-align: center;
`;

const Hint = styled.span<CssProps>`
  display: ${props => props.theme === 'card' ? 'none': 'block'};
  position: absolute;
  bottom: ${props => props.theme === 'click' ? '-27px' : '40px'};
  left: ${props => props.theme === 'click' ? '0' : '50%'};
  transform: ${props => props.theme === 'click' ? 'translate(0, 0)' : 'translate(-50%, 0)'};
  max-width: 300px;
  color: ${C.colorGray999};
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const StyledUpload = styled(Upload)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  font-size: 0;
  cursor: pointer;
`;

const UploadUI: SFC<UploadUIProps> = props => {
  const { children, theme = 'click', hintMsg, showHint = true, preview = false, ...rest } = props;
  return (<Wrapper
    theme={theme}
  >

    { React.isValidElement(children)
      ? children
      : <>
        <Icon theme={theme} />
        <Text theme={theme}>{ txt[theme] }</Text>
        { showHint && <Hint theme={theme}>{ hintMsg || txt.hint }</Hint> }
      </>
    }

    <StyledUpload
      prefixCls='diana-upload'
      {...rest}
    />
  </Wrapper>);
};

export default UploadUI;