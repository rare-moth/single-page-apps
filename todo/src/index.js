import React from "react";
import ReactDOM from "react-dom";
import Form from './js/components/Form';
import './css/main.scss';

const Index = () => {
  return (
    <div>Hello React!!
        <Form />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));