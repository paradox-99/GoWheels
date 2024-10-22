import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import moment from 'moment';
import { useState } from 'react';
import { fromJSON } from 'postcss';
import { ThemeProvider } from '@mui/material';
import { customTheme2 } from '../theme/Theme';

const TimePicker = ({getTime}) => {

  const [fromDate, setFromDate] = useState();
  const [fromTime, setFromTime] = useState();
  const [untilDate, setUntilDate] = useState();
  const [untilTime, setUntilTime] = useState();
  const currentTime = moment();

  const getFromDateAndTime = (e) => {
    ;
    const fromDate = e.format('YYYY-MM-DD');
    setFromDate(fromDate);
    const fromTime = e.format('HH:mm');
    setFromTime(fromTime);
    submit();
  }

  const getUntilDateAndTime = (e) => {
    const untilDate = e.format('YYYY-MM-DD');
    setUntilDate(untilDate);
    const untilTime = e.format('HH:mm');
    setUntilTime(untilTime);
    submit();
  }

  const submit = () => {
    if (fromDate && fromJSON && untilDate && untilTime){
      const time = {fromDate, fromTime, untilDate, untilTime};
      getTime(time);
    }
  }

  return (
    <div className="flex flex-col md:flex-row gap-3 justify-between items-center">
      <ThemeProvider theme={customTheme2}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DemoContainer components={['DateTimePicker']}>
          <DateTimePicker label="From" name='fromDate&Time' onChange={getFromDateAndTime} minDate={currentTime} maxDate={moment(currentTime.clone().add(6, "months"))} />
        </DemoContainer>
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DemoContainer components={['DateTimePicker']}>
          <DateTimePicker label="Until" name='untilDate&Time' onChange={getUntilDateAndTime} minDate={currentTime} maxDate={moment(currentTime.clone().add(6, "months"))} />
        </DemoContainer>
      </LocalizationProvider>
      </ThemeProvider>
    </div>
  );
};

export default TimePicker;