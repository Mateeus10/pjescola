"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');

_dotenv2.default.config();

require('./database');

var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _homeRouter = require('./routes/homeRouter'); var _homeRouter2 = _interopRequireDefault(_homeRouter);
var _userRouter = require('./routes/userRouter'); var _userRouter2 = _interopRequireDefault(_userRouter);
var _tokenRouter = require('./routes/tokenRouter'); var _tokenRouter2 = _interopRequireDefault(_tokenRouter);
var _alunoRouter = require('./routes/alunoRouter'); var _alunoRouter2 = _interopRequireDefault(_alunoRouter);
var _fotoRouter = require('./routes/fotoRouter '); var _fotoRouter2 = _interopRequireDefault(_fotoRouter);

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    this.app.use(_express2.default.static(_path.resolve.call(void 0, __dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', _homeRouter2.default);
    this.app.use('/users/', _userRouter2.default);
    this.app.use('/tokens/', _tokenRouter2.default);
    this.app.use('/alunos/', _alunoRouter2.default);
    this.app.use('/fotos/', _fotoRouter2.default);
  }
}

exports. default = new App().app;
