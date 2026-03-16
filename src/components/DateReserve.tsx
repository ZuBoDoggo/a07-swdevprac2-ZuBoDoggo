"use client";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function DateReserve() {
  return (
    <form className="w-[400px] flex flex-col space-y-6 bg-white p-8 rounded-xl shadow-md">
      <div className="w-full pt-2">
        <div className="text-gray-600 text-sm mb-2 text-left">Reservation Date</div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker 
            className="bg-white"
            sx={{ width: '100%' }}
          />
        </LocalizationProvider>
      </div>
    </form>
  );
}