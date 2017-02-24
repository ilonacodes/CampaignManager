import React from "react";

export const Filter = ({filter, onChange}) =>
    <input className="form-control"
           type="text"
           placeholder="Filter"
           value={filter}
           onChange={onChange}/>;

