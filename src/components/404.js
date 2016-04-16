var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Page404 = React.createClass({
   render: function () {
       return (
         <div>
             <h1> <b>404</b> Page Not Found</h1>
             <p>Sorry Nothing Found. Please make sure you have valid URL</p>
             <p><Link to="app">Back to Home</Link></p>
         </div>
       );
   }
});

module.exports = Page404;