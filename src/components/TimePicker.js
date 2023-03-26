import React, { useState } from "react";
import { Calendar } from "primereact/calendar";

function TimePicker() {
  const [datetime24h, setDateTime24h] = useState(null);

  return (
    <div>
      <label htmlFor="timepicker">Time Picker</label>
      <div className="card flex mt-2">
        <Calendar
          // inputId="time-24h"
          id="timeonly"
          value={datetime24h}
          onChange={(e) => setDateTime24h(e.value)}
          timeOnly
          hourFormat="24"
        />
        {/* <label htmlFor="time-24h">Time Picker</label> */}
      </div>
    </div>
  );
}

export default TimePicker;
