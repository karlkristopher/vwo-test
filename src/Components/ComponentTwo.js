import React from "react";
import { Link } from "react-router-dom";

function ComponentTwo() {
  return (
    <div>
      <h1>Test - ComponentTwo</h1>
      <button class="Component_Two_Class">ComponentTwo Button</button>
      <div>
        <Link to="/">Switch Component</Link>
      </div>
    </div>
  );
}

export default ComponentTwo;
