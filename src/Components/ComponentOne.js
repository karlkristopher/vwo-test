import React from "react";

import { Link } from "react-router-dom";

function ComponentOne() {
  return (
    <div>
      <h1>Test - ComponentOne</h1>
      <button class="Component_One_Class">ComponentOne Button</button>
      <div>
        <Link to="/second">Switch Component</Link>
      </div>
    </div>
  );
}

export default ComponentOne;
