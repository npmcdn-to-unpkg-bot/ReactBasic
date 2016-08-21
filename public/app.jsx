var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

var firstName = "Priya",
  msg = "This is a react component.";

ReactDOM.render(
  <Greeter name={firstName} msg={msg}/>,
  document.getElementById('app')
);
