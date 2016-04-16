$ = jQuery = require('jquery');

var React = require('react');
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList')

var AuthorPage = React.createClass({

    getInitialState: function () {

        return {
          authors: []
        };
    },

    componentWillMount: function () {

      
       $.ajax({
       url: "http://localhost:8080/authors",
       dataType: 'json',
       cache: false,
       success: function(data) {
       this.setState({authors: data});
       }.bind(this),
       error: function(xhr, status, err) {
       console.error(this.props.url, status, err.toString());
       }.bind(this)
       });
     
    },

    render: function () {
        return (
            <div>
                <h1>Authors</h1>
                <AuthorList authors={this.state.authors}/>
            </div>
        );
    }
});

module.exports = AuthorPage;