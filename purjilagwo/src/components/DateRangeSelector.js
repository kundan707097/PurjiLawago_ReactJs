import React, { useEffect, useState } from 'react'

import { Box, Typography } from '@mui/material'
import { Menu } from '@mui/base/Menu';
import { Dropdown } from '@mui/base/Dropdown';
import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton';
import { MenuItem as BaseMenuItem, menuItemClasses } from '@mui/base/MenuItem';
import { styled } from '@mui/material/styles';
import { CalendarHeatMap, ChevronDown } from '@carbon/icons-react'
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { MobileDateRangePicker } from '@mui/x-date-pickers-pro/MobileDateRangePicker';
import { DesktopDateRangePicker } from '@mui/x-date-pickers-pro/DesktopDateRangePicker';
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';
import { pickersLayoutClasses } from '@mui/x-date-pickers/PickersLayout';
import { DateRangePicker } from 'react-date-range';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const DateRangeSelector = () => {

  const [todayDate, setTodayDate] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }

  const handleSelect = (date) => {
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
  }

  console.log(startDate)
  useEffect(() => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const startFormattedDate = new Intl.DateTimeFormat('en-US', options).format(startDate);
    const endFormattedDate = new Intl.DateTimeFormat('en-US', options).format(endDate);
    setTodayDate(startFormattedDate + " - " + endFormattedDate);
  }, [handleSelect]);

  return (
    <>
      <Dropdown>
        <MenuButton sx={{ width: "100%" }}>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>

            <CalendarHeatMap style={{ width: '22px', height: "22px", color: "white", }} />
          </Box>
          <Typography sx={{ color: "white", ml: { xs: 0, sm: 1 }, fontSize: { xs: "14px", md: "16px" } }}>{todayDate}</Typography>
          <ChevronDown style={{ width: '25px', color: "white" }} />

        </MenuButton>
        <Menu slots={{ listbox: Listbox }}>
          {/* <Box sx={{ width: "100%" }}>
            <MenuItem >Today</MenuItem>
            <MenuItem>
              Yesterday
            </MenuItem>
            <MenuItem>Last 7 day</MenuItem>
            <MenuItem>Last 30 day</MenuItem>
            <MenuItem>Last 90 day</MenuItem>
            <MenuItem>
              Custom Date
            </MenuItem>

          </Box> */}
          {/* <Box sx={{ bgcolor: "green" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <StaticDateRangePicker
                    defaultValue={[dayjs('2022-04-17'), dayjs('2022-04-21')]}
                    sx={{
                      [`.${pickersLayoutClasses.contentWrapper}`]: {
                        alignItems: 'center',
                      },
                    }}
                  />
            </LocalizationProvider>
          </Box> */}
          <Box sx={{width: {xs: "23rem", sm:"100%"}}}>
            <DateRangePicker
              ranges={[selectionRange]}
              onChange={handleSelect}
              // maxDate={new Date()}
            />

          </Box>

        </Menu>

      </Dropdown>

    </>
  )
}

const Listbox = styled('ul')(
  ({ theme }) => `
    box-sizing: border-box;
    padding: 6px;
    margin: 12px 0;
    // min-width: 200px;
    border-radius: 12px;
    overflow: auto;
    outline: 0px;
    background: white;
    border: 1px solid #DAE2ED;
    color: #1C2025;
    box-shadow: 0px 4px 4px #DAE2ED;
    z-index: 1;
    // postion: absolute;
    // left:40px;
    display: flex;
    width: 100%;
  
    .closed & {
      opacity: 0;
      transform: scale(0.95, 0.8);
      transition: opacity 200ms ease-in, transform 200ms ease-in;
    }
    
    .open & {
      opacity: 1;
      transform: scale(1, 1);
      transition: opacity 100ms ease-out, transform 100ms cubic-bezier(0.43, 0.29, 0.37, 1.48);
    }
  
    .placement-top & {
      transform-origin: bottom;
    }
  
    .placement-bottom & {
      transform-origin: top;
    }
    `,
);

const MenuItem = styled(BaseMenuItem)(
  ({ theme }) => `
    list-style: none;
    padding: 8px;
    border-radius: 8px;
    cursor: default;
    user-select: none;
    font-family: "Nunito Sans", "Plaster", sans-serif;
    cursor: pointer;
    &:last-of-type {
      border-bottom: none;
    }
  
    &.${menuItemClasses.focusVisible} {
      outline: 3px solid #99CCF3;
      background-color: #E5EAF2;
      color: #1C2025;
    }
  
    &.${menuItemClasses.disabled} {
      color: #B0B8C4;
    }
  
    &:hover:not(.${menuItemClasses.disabled}) {
      background-color: #F0F7FF;
      color: #003A75;
    }
    `,
);

const MenuButton = styled(BaseMenuButton)(
  ({ theme }) => `
    display: flex;
    align-items: center;
    border: none;
    transition: all 200ms ease;
    cursor: pointer;
    background: #42A5F5;
    color: #00B69B;
    margin: auto 0;
    //margin-right: 12px;
    font-family: "Nunito Sans", "Plaster", sans-serif;
    justify-content: center;
    `,
);


export default DateRangeSelector