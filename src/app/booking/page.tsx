import DateReserve from "@/components/DateReserve";
import { TextField, Select, MenuItem, Button, FormControl, InputLabel } from "@mui/material";

export default function BookingPage() {
  return (
    <main className="w-full flex flex-col items-center !mt-[75px] space-y-6">
        <div className="text-xl font-medium">New Reservation</div>

        <div className="flex flex-col w-full max-w-[400px] space-y-5">
            
            <TextField 
                variant="standard" 
                name="Name-Lastname"
                label="Name-Lastname"
                fullWidth
            />
            
            <TextField 
                variant="standard" 
                name="Contact-Number"
                label="Contact-Number"
                fullWidth
            />

            {/* Wrapped Select in FormControl for proper standard variant styling */}
            <FormControl variant="standard" fullWidth>
                <InputLabel id="venue-label">Venue</InputLabel>
                <Select
                    labelId="venue-label"
                    name="venue"
                    id="venue"
                    defaultValue=""
                    className="text-left"
                >
                    <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                    <MenuItem value="Spark">Spark Space</MenuItem>
                    <MenuItem value="GrandTable">The Grand Table</MenuItem>
                </Select>
            </FormControl>

            <DateReserve />

            <Button 
                variant="contained" 
                name="Book Venue" 
                className="bg-blue-600 hover:bg-blue-700 !mt-8"
                fullWidth
            >
                Book Venue
            </Button>
            
        </div>
    </main>
  );
}