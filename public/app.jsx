var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: "React",
      message: "This is from a component."
    };
  },
  render: function () {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message + '??'}</p>
      </div>
    );
  }
});

var firstName = 'Zac';
var question = 'How are you today?';

ReactDOM.render(
  <Greeter name={firstName} message={question}/>,
  document.getElementById('app')
);
