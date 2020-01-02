import React, { SFC } from 'react';
import { Calendar, CalendarChange } from '@hupu/rc-basic';
import styled from 'styled-components';
import { getTs } from 'peeler-js';
import { colorBlue1A68FF, colorGraye9e9e9, colorGray666, colorGray999, colorGrayf7f7f7, colorBluebae7ff, colorGrayccc } from '../../styles/theme';

type Active = {
  year?: number;
  month?: number;
  day: number;
}
export interface CalendarUIProps {
  active?: Active;
  disabilities?: Active[];
  year?: number;
  month?: number;
  day?: number;
  onClick?: (date: Date) => void;
};

const StyledCalendar = styled.div`
  width: 232px;
  height: 270px;
  background: #FFFFFF;
  border: 1px solid #D9D9D9;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.20);
  border-radius: 4px;
  text-align: center;
  color: ${colorGray666};
  box-sizing: border-box;
  padding: 0 2px;
  font-size: 12px;
`;


const StyleHeader = styled.div`
  width: 100%;
  height: 34px;
  line-height: 34px;
  font-size: 16px;
  border-bottom: 1px solid #E9E9E9;
`;

const StyleWeek = styled.div`
  font-weight: normal;
  font-size: 14px;
`;

type Cell = {
  current?: boolean;
  active?: boolean;
  disabled?: boolean;
}
const StyledCell = styled.span<Cell>`
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  vertical-align: middle;
  font-size: 12px;
  font-family: HelveticaNeue;
  color: ${props => props.disabled ? colorGrayccc : props.current ? colorBlue1A68FF : colorGray666};
  cursor: ${props => !props.disabled ? 'pointer' : 'no-drop'};
  background: ${props => props.disabled ? colorGrayf7f7f7 : props.active && colorBluebae7ff};
  border: ${props => props.current && `1px solid ${colorBlue1A68FF}`};
  border-radius: 2px;
  :hover {
    background: ${props => !props.disabled && colorBlue1A68FF};
    border-radius: 2px;
    color: ${props => !props.disabled && '#FFFFFF'};
  };
  margin: 2px 4px;
`;

const StyleFooter = styled.div`
  width: 100%;
  height: 38px;
  line-height: 38px;
  border-top: 1px solid ${colorGraye9e9e9};
  cursor: pointer;
  color: ${colorBlue1A68FF};
`;

function genDate () {
  const date = new Date(getTs());
  return [date.getFullYear(), date.getMonth() + 1, date.getDate()];
}

function getRangedivide7(dates: Date[]): Date[][] {
  return dates.reduce((acc: Date[][], cur: Date): Date[][] => {

    const last = acc[acc.length - 1];
    if(last.length < 7) {
      last.push(cur);
      return acc;
    }
    acc.push([cur]);
    return acc;
  }, [[]]);
} 

const CalendarUIRender = (calendarUIProps: CalendarUIProps) => (calendarChange: CalendarChange): React.ReactElement => {
  const weeks = ['日',  '一', '二', '三', '四', '五', '六'];

  const CalendarUI: SFC<CalendarUIProps> = props => {
    const { active, disabilities = [], year, month, day, onClick } = props;

    const [ yeartemp, monthtemp, daytemp ] = genDate();
 
    const date = new Date(year || yeartemp, (month || monthtemp) - 1, day || daytemp);

    const { getDays } = calendarChange;

    const { current, range } = getDays(date);

    const [newYear, newMonth] = [current.getFullYear(), current.getMonth() + 1];

    const rangedivide7 = getRangedivide7(range);

    const activeDay = active ? new Date(active.year || newYear, (active.month || newMonth) - 1, active.day): false;

    const disabilitiesDate = disabilities.map(a => new Date(a.year || newYear, (a.month || newMonth) - 1, a.day));
    return (
      <StyledCalendar>
        <StyleHeader>{`${current.getFullYear()}年 ${current.getMonth() + 1}月`}</StyleHeader>
        <table>
          <thead>
            <tr>{weeks.map(week => (
              <th key={week}>{<StyleWeek>{week}</StyleWeek>}</th>)
            )}</tr>
          </thead>
          <tbody>
            {rangedivide7.map((days, index) => (
              <tr key={index}>{days.map((day) => (
                <td key={day.valueOf()}>{(
                  <StyledCell
                    onClick={()=> onClick && onClick(day)}
                    current={day.valueOf() === current.valueOf()}
                    active={activeDay && activeDay.valueOf() === day.valueOf()}
                    disabled={disabilitiesDate.some(x => x.valueOf() === day.valueOf())}
                  >
                    {day.getDate()}
                  </StyledCell>
                )}</td>)
              )}</tr>
            ))}
          </tbody>
        </table>
        <StyleFooter>
          今天
        </StyleFooter>
      </StyledCalendar>
    );
  };

  return <CalendarUI {...calendarUIProps} />;
};

const CalendarUI: SFC<CalendarUIProps> = props => {
  return <Calendar render={CalendarUIRender(props)} />;
};

export default CalendarUI;