"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _expressGraphql = require("express-graphql");

var _schema = _interopRequireDefault(require("./schema"));

var _database = require("./database");

var port = process.env.PORT || 4000;
var app = (0, _express["default"])();
(0, _database.connect)();
app.get('/', function (req, res) {
  res.json({
    message: "Hello Word!"
  });
});
app.use('/graphql', (0, _expressGraphql.graphqlHTTP)({
  graphiql: true,
  schema: _schema["default"]
}));
app.listen(port, function () {});
//# sourceMappingURL=index.js.map