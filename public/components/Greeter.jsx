var React = require('react');
var ReactDOM = require('react-dom');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      msg: 'Sample React component'
    }
  },
  getInitialState: function () {
    return {
      name: this.props.name,
      msg: this.props.msg
    }
  },
  handleData: function (updates) {
    this.setState(updates);
  },
  render: function () {
    var name = this.state.name,
      msg = this.state.msg;

    return (
      <div>
        <GreeterMessage name={name} msg={msg}/>
        <GreeterForm onNewData={this.handleData}/>
      </div>
    );
  }
});

module.exports = Greeter;
