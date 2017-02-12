var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;

// functional stateless component
function Prompt (props) {
  return (
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
      <h1>{props.header}</h1>
      <div className="col-sm-12">
        <form onSubmit={props.onSubmitUser}>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Github Username"
              onChange={props.onUpdateUser}
              value={props.username}
              type="text" />
          </div>
          <div className="form-group col-sm-4 col-sm-offset-4">
            <button className="btn btn-block btn-success" type="submit">
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

Prompt.Proptypes = {
    router: React.PropTypes.object.isRequired,
    onUpdateUser: React.PropTypes.func.isRequired,
    onSubmitUser: React.PropTypes.func.isRequired,
    header: React.PropTypes.string.isRequired
  }

module.exports = Prompt;
