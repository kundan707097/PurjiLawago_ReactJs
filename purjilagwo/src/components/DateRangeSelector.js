import React, { useEffect, useState } from 'react'

import { Box, Typography } from '@mui/material'
import { Menu } from '@mui/base/Menu';
import { Dropdown } from '@mui/base/Dropdown';
import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton';
import { styled } from '@mui/material/styles';
import { CalendarHeatMap, ChevronDown } from '@carbon/icons-react'
import { DateRangePicker } from 'react-date-range';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const DateRangeSelector = ({setDateRange}) => {

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

  //just for displaying the date range

  useEffect(() => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const startFormattedDate = new Intl.DateTimeFormat('en-US', options).format(startDate);
    const endFormattedDate = new Intl.DateTimeFormat('en-US', options).format(endDate);
    setTodayDate(startFormattedDate + " - " + endFormattedDate);
  }, [handleSelect]);


  // useEffect for setting the date range in the parent component
  useEffect(() => {
    setDateRange({startDate: startDate, endDate: endDate})
  }, [endDate])
  
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