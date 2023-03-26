import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
import { addLocale } from "primereact/api";

function DatePicker() {
  const [date, setDate] = useState(null);

  addLocale("th", {
    firstDayOfWeek: 1,
    dayNames: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัส", "ศุกร์", "เสาร์"],
    dayNamesShort: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"],
    dayNamesMin: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"],
    monthNames: [
      "มกราคม",
      "กุมภาพันธ์",
      "มีนาคม",
      "เมษายน",
      "พฤษภาคม",
      "มิถุนายน",
      "กรกฏาคม",
      "สิงหาคม",
      "กันยายน",
      "ตุลาคม",
      "พฤศจิกายน",
      "ธันวาคม",
    ],
    monthNamesShort: [
      "มค",
      "กพ",
      "มีค",
      "มย",
      "พค",
      "มิย",
      "กค",
      "สค",
      "กย",
      "ตค",
      "พย",
      "ธค",
    ],
    today: "วันนี้",
    clear: "ล้าง",
  });
  const changeYear = (date) => {
    console.log(date);
    if (date) {
      console.log("date is not nullll");
      var d = date.getDate();
      var m = date.getMonth();
      var y = date.getFullYear() + 543;
      setDate(new Date(y, m, d, 0, 0, 0));
    }
  };

  return (
    <div>
      <label htmlFor="datepicker">Date Picker</label>

      <div className="card flex mt-2">
        <Calendar
          // inputId="date-picker"
          value={date}
          onChange={(e) => changeYear(e.value)}
          showButtonBar
          dateFormat={"dd/mm/yy"}
          locale="th"
        />
        {/* <label htmlFor="date-picker">Date Picker</label> */}
      </div>
    </div>
  );
}

export default DatePicker;
