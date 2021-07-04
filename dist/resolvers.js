"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _sample = require("./sample");

var _Users = _interopRequireDefault(require("./models/Users"));

var resolvers = {
  Query: {
    hello: function hello() {
      return "Hi! Hello Word.";
    },
    saludar: function saludar(_, _ref) {
      var name = _ref.name;
      return "Hola ".concat(name);
    },
    toDoListItems: function toDoListItems() {
      return _sample.ToDoList;
    },
    users: function users() {
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _Users["default"].find();

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  Mutation: {
    createItem: function createItem(_, _ref2) {
      var input = _ref2.input;
      input._id = _sample.ToDoList.length;

      _sample.ToDoList.push(input);

      return input;
    },
    createUser: function createUser(_, _ref3) {
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var input, newUser;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                input = _ref3.input;
                newUser = new _Users["default"](input);
                _context2.next = 4;
                return newUser.save();

              case 4:
                return _context2.abrupt("return", newUser);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    deleteUser: function deleteUser(_, _ref4) {
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var _id;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _id = _ref4._id;
                _context3.next = 3;
                return _Users["default"].findByIdAndDelete(_id);

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    updateUser: function updateUser(_, _ref5) {
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        var _id, input;

        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _id = _ref5._id, input = _ref5.input;
                _context4.next = 3;
                return _Users["default"].findByIdAndUpdate(_id, input, {
                  "new": true
                });

              case 3:
                return _context4.abrupt("return", _context4.sent);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    }
  }
};
exports.resolvers = resolvers;
//# sourceMappingURL=resolvers.js.map