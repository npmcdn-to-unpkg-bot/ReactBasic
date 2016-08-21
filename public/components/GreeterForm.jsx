var React = require('react');

var GreeterForm = React.createClass({
  onButtonClick: function (e) {
    e.preventDefault();

    var updates = {},
      name = this.refs.name.value,
      msg = this.refs.msg.value;

     if (name.length > 0 ) {
       this.refs.name.value = '';
       updates.name = name;
     }
     if (msg.length > 0) {
       this.refs.msg.value = '';
       updates.msg = msg;
     }
     this.props.onNewData(updates);
  },
  render: function () {

    return (
      <div>
        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name" placeholder="Enter name"></input><br></br>
          <textarea rows="4" cols="40" ref="msg" placeholder="Enter message"></textarea>
          <button> Submit </button>
        </form>
      </div>
    );
  }
});

module.exports = GreeterForm;
