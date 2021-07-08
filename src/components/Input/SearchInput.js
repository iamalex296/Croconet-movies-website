import React from "react";

import classes from "./SearchInput.module.css";

const SearchInput = () => {
  return (
    <div>
      <input className={classes.input} placeholder="ფილმების ძიება..." />
    </div>
  );
};

export default SearchInput;
