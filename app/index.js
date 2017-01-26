var React = require('react')
var ReactDOM = require('react-dom')
var _ = require('lodash')
var ShowList = require('./child.js')
var FriendsContainer = React.createClass({
  render: function(){
    var name = 'Tyler McGinnis'
    var friends = ['Ean Platter', 'Murphy Randall', 'Merrick Christensen']
    return (
      <div>
        <h3> Name: {name} </h3>
        <ShowList names={friends} />
      </div>
    )
  }
});
ReactDOM.render(<FriendsContainer />, document.getElementById('app'));


// var friends = ['Ean Platter', 'Murphy Randall', 'Merrick Christensen'];
// var listItems = friends.map(function(friend){
//   return "<li> " + friend + "</li>";
// });
// console.log(listItems); // ["<li> Ean Platter </li>", "<li> Murphy Randall</li>", "<li> Merrick Christensen </li>"];
