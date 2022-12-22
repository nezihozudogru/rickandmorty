import React from "react";

type TProps = {
  name: any;
  changeID: any;
  total: any;
};

const InputGroup = ({ name, changeID, total }: TProps) => {
  return (
    <div>
      <select
        className="select select-primary w-full max-w-xs"
        onChange={(e) => changeID(e.target.value)}
        id={name}
      >
        <option value="1">Choose...</option>
        {[...Array.from(Array(total).keys())].map((x, index) => {
          return (
            <option key={index} value={x + 1}>
              {name} - {x + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InputGroup;
