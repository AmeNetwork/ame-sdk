"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _web = _interopRequireDefault(require("web3"));
var _AmeWorld = _interopRequireDefault(require("../abi/AmeWorld.json"));
var _AmeComponent = _interopRequireDefault(require("../abi/AmeComponent.json"));
var _typesArray = _interopRequireDefault(require("./typesArray"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var AmeWeb3 = /*#__PURE__*/function () {
  function AmeWeb3(provider, ameAddress) {
    _classCallCheck(this, AmeWeb3);
    this.web3 = new _web["default"](provider);
    this.AmeWorld = new this.web3.eth.Contract(_AmeWorld["default"], ameAddress);
  }

  //Query the details of a component
  return _createClass(AmeWeb3, [{
    key: "queryComponent",
    value: function () {
      var _queryComponent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_componentAddress) {
        var componentContract, options, componentObj, _iterator, _step, methodType, methodNames, _iterator2, _step2, methodName, dataType;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              componentContract = new this.web3.eth.Contract(_AmeComponent["default"], _componentAddress);
              _context.next = 3;
              return componentContract.methods.options().call();
            case 3:
              options = _context.sent;
              componentObj = {
                address: _componentAddress,
                methods: []
              };
              _iterator = _createForOfIteratorHelper(options);
              _context.prev = 6;
              _iterator.s();
            case 8:
              if ((_step = _iterator.n()).done) {
                _context.next = 37;
                break;
              }
              methodType = _step.value;
              methodType = parseInt(methodType);
              _context.next = 13;
              return componentContract.methods.getMethods(methodType).call();
            case 13:
              methodNames = _context.sent;
              _iterator2 = _createForOfIteratorHelper(methodNames);
              _context.prev = 15;
              _iterator2.s();
            case 17:
              if ((_step2 = _iterator2.n()).done) {
                _context.next = 27;
                break;
              }
              methodName = _step2.value;
              _context.next = 21;
              return componentContract.methods.getMethodReqAndRes(methodName).call();
            case 21:
              dataType = _context.sent;
              dataType[0] = dataType[0].map(function (num) {
                return _typesArray["default"][Number(num)];
              });
              dataType[1] = dataType[1].map(function (num) {
                return _typesArray["default"][Number(num)];
              });
              componentObj.methods.push({
                methodName: methodName,
                methodType: methodType,
                dataType: dataType
              });
            case 25:
              _context.next = 17;
              break;
            case 27:
              _context.next = 32;
              break;
            case 29:
              _context.prev = 29;
              _context.t0 = _context["catch"](15);
              _iterator2.e(_context.t0);
            case 32:
              _context.prev = 32;
              _iterator2.f();
              return _context.finish(32);
            case 35:
              _context.next = 8;
              break;
            case 37:
              _context.next = 42;
              break;
            case 39:
              _context.prev = 39;
              _context.t1 = _context["catch"](6);
              _iterator.e(_context.t1);
            case 42:
              _context.prev = 42;
              _iterator.f();
              return _context.finish(42);
            case 45:
              return _context.abrupt("return", componentObj);
            case 46:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[6, 39, 42, 45], [15, 29, 32, 35]]);
      }));
      function queryComponent(_x) {
        return _queryComponent.apply(this, arguments);
      }
      return queryComponent;
    }() //Query the components owned by an address
  }, {
    key: "queryAccount",
    value: function () {
      var _queryAccount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_accountAddress) {
        var components, componentObjs, _iterator3, _step3, componentItem, componentObj;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.AmeWorld.methods.getComponents(_accountAddress).call();
            case 2:
              components = _context2.sent;
              componentObjs = [];
              _iterator3 = _createForOfIteratorHelper(components);
              _context2.prev = 5;
              _iterator3.s();
            case 7:
              if ((_step3 = _iterator3.n()).done) {
                _context2.next = 15;
                break;
              }
              componentItem = _step3.value;
              _context2.next = 11;
              return this.queryComponent(componentItem);
            case 11:
              componentObj = _context2.sent;
              componentObjs.push(componentObj);
            case 13:
              _context2.next = 7;
              break;
            case 15:
              _context2.next = 20;
              break;
            case 17:
              _context2.prev = 17;
              _context2.t0 = _context2["catch"](5);
              _iterator3.e(_context2.t0);
            case 20:
              _context2.prev = 20;
              _iterator3.f();
              return _context2.finish(20);
            case 23:
              return _context2.abrupt("return", componentObjs);
            case 24:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[5, 17, 20, 23]]);
      }));
      function queryAccount(_x2) {
        return _queryAccount.apply(this, arguments);
      }
      return queryAccount;
    }() //Send Get request
  }, {
    key: "sendGetRequest",
    value: function () {
      var _sendGetRequest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_componentAddress, _methodName, _requestParams) {
        var componentContract, responseData;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              componentContract = new this.web3.eth.Contract(_AmeComponent["default"], _componentAddress);
              _context3.next = 3;
              return componentContract.methods.get(_methodName, _requestParams).call();
            case 3:
              responseData = _context3.sent;
              return _context3.abrupt("return", responseData);
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function sendGetRequest(_x3, _x4, _x5) {
        return _sendGetRequest.apply(this, arguments);
      }
      return sendGetRequest;
    }() //Send Post request
  }, {
    key: "sendPostRequestWeb3js",
    value: function () {
      var _sendPostRequestWeb3js = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(_componentAddress, _methodName, _requestParams, _from, _value) {
        var componentContract, gasPrice, gas, txResult;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              componentContract = new this.web3.eth.Contract(_AmeComponent["default"], _componentAddress);
              _context4.next = 3;
              return this.web3.eth.getGasPrice();
            case 3:
              gasPrice = _context4.sent;
              _context4.next = 6;
              return componentContract.methods.post(_methodName, _requestParams).estimateGas({
                from: _from,
                value: _value
              });
            case 6:
              gas = _context4.sent;
              _context4.next = 9;
              return componentContract.methods.post(_methodName, _requestParams).send({
                from: _from,
                gasPrice: gasPrice,
                gas: gas,
                value: _value
              }).on("transactionHash", function (hash) {}).on("receipt", function (receipt) {
                return receipt;
              });
            case 9:
              txResult = _context4.sent;
              return _context4.abrupt("return", txResult);
            case 11:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function sendPostRequestWeb3js(_x6, _x7, _x8, _x9, _x10) {
        return _sendPostRequestWeb3js.apply(this, arguments);
      }
      return sendPostRequestWeb3js;
    }() //Send Put request
  }, {
    key: "sendPutRequestWeb3js",
    value: function () {
      var _sendPutRequestWeb3js = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(_componentAddress, _methodName, _requestParams, _from, _value) {
        var componentContract, gasPrice, gas, txResult;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              componentContract = new this.web3.eth.Contract(_AmeComponent["default"], _componentAddress);
              _context5.next = 3;
              return this.web3.eth.getGasPrice();
            case 3:
              gasPrice = _context5.sent;
              _context5.next = 6;
              return componentContract.methods.put(_methodName, _requestParams).estimateGas({
                from: _from,
                value: _value
              });
            case 6:
              gas = _context5.sent;
              _context5.next = 9;
              return componentContract.methods.put(_methodName, _requestParams).send({
                from: _from,
                gasPrice: gasPrice,
                gas: gas,
                value: _value
              }).on("transactionHash", function (hash) {}).on("receipt", function (receipt) {
                return receipt;
              });
            case 9:
              txResult = _context5.sent;
              return _context5.abrupt("return", txResult);
            case 11:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function sendPutRequestWeb3js(_x11, _x12, _x13, _x14, _x15) {
        return _sendPutRequestWeb3js.apply(this, arguments);
      }
      return sendPutRequestWeb3js;
    }() //Check if an address is registered
  }, {
    key: "isRegistered",
    value: function () {
      var _isRegistered = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(_from) {
        var isRegistered;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return this.AmeWorld.methods.isRegistered(_from).call();
            case 2:
              isRegistered = _context6.sent;
              return _context6.abrupt("return", isRegistered);
            case 4:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function isRegistered(_x16) {
        return _isRegistered.apply(this, arguments);
      }
      return isRegistered;
    }() //Check if an address owns a component
  }, {
    key: "hasComponent",
    value: function () {
      var _hasComponent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(_from, _componentAddress) {
        var hasComponent;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return this.AmeWorld.methods.hasComponent(_from, _componentAddress).call();
            case 2:
              hasComponent = _context7.sent;
              return _context7.abrupt("return", hasComponent);
            case 4:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function hasComponent(_x17, _x18) {
        return _hasComponent.apply(this, arguments);
      }
      return hasComponent;
    }() //Register to an Ame World
  }, {
    key: "registerAmeWorld",
    value: function () {
      var _registerAmeWorld = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(_from) {
        var txResult;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              console.log(_from);
              _context8.next = 3;
              return this.AmeWorld.methods.register().send({
                from: _from
              }).on("transactionHash", function (hash) {}).on("receipt", function (receipt) {
                return receipt;
              });
            case 3:
              txResult = _context8.sent;
              return _context8.abrupt("return", txResult);
            case 5:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function registerAmeWorld(_x19) {
        return _registerAmeWorld.apply(this, arguments);
      }
      return registerAmeWorld;
    }() //Add some components
  }, {
    key: "addComponents",
    value: function () {
      var _addComponents = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(_from, _componentsAddress) {
        var txResult;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return this.AmeWorld.methods.addComponents(_componentsAddress).send({
                from: _from
              }).on("transactionHash", function (hash) {}).on("receipt", function (receipt) {
                return receipt;
              });
            case 2:
              txResult = _context9.sent;
              return _context9.abrupt("return", txResult);
            case 4:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function addComponents(_x20, _x21) {
        return _addComponents.apply(this, arguments);
      }
      return addComponents;
    }() //Remove some components
  }, {
    key: "removeComponents",
    value: function () {
      var _removeComponents = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(_from, _componentsAddress) {
        var txResult;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return this.AmeWorld.methods.removeComponents(_componentsAddress).send({
                from: _from
              }).on("transactionHash", function (hash) {}).on("receipt", function (receipt) {
                return receipt;
              });
            case 2:
              txResult = _context10.sent;
              return _context10.abrupt("return", txResult);
            case 4:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function removeComponents(_x22, _x23) {
        return _removeComponents.apply(this, arguments);
      }
      return removeComponents;
    }() //Encode request parameters
  }, {
    key: "encodeRequestParams",
    value: function encodeRequestParams(_methodRequestParamsType, _requestParamValue) {
      var reqParamsEncode = this.web3.eth.abi.encodeParameters(_methodRequestParamsType, _requestParamValue);
      return reqParamsEncode;
    }

    //Decode response data
  }, {
    key: "decodeResponseData",
    value: function decodeResponseData(_methodResponseType, _resDataEncode) {
      var resDataDecode = this.web3.eth.abi.decodeParameters(_methodResponseType, _resDataEncode);
      return resDataDecode;
    }
  }]);
}();
var _default = exports["default"] = AmeWeb3;