var React = require('react')
var ReactDOM = require('react-dom')
var HelloUser = React.createClass({
  render: function(){
    return (
      <div>
        Hello {this.props.name}
      </div>
    )
  }
});
ReactDOM.render(<HelloUser name="Bill"/>, document.getElementById('app'));
