var React = require("react");
var ListItem = require("./ListItem.jsx"); // must have .jsx extension, since it isn't default .js
//You need this npm package to do createReactClass
var createReactClass = require('create-react-class');

var ingridients = [{"id": 1, "text": "ham"}, {"id": 2, "text": "cheese"}, {"id": 3, "text": "potatoes"}];

var List = createReactClass({
    render: function() {
        var listItems = ingridients.map(function(item) {
            return <ListItem key={item.id} ingridient={item.text} />;
        });

        return (<ul>{listItems}</ul>);
    }
});

module.exports = List;