import { Slider, Box } from "@mui/material";
import * as React from "react";

function valuetext(value) {
  return `${value}°C`;
}

function FilterProduct() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="main flex flex-col gap-10 w-[80%] mx-auto my-10">
        <div className="search_bar">
            <input type="text" className="border-[3px] border-red-500" />
        </div>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
    </div>
  );
}

export default FilterProduct;
