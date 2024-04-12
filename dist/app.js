"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');

_dotenv2.default.config();

require('./database');

var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _homeRouterjs = require('./routes/homeRouter.js'); var _homeRouterjs2 = _interopRequireDefault(_homeRouterjs);
var _userRouterjs = require('./routes/userRouter.js'); var _userRouterjs2 = _interopRequireDefault(_userRouterjs);
var _tokenRouterjs = require('./routes/tokenRouter.js'); var _tokenRouterjs2 = _interopRequireDefault(_tokenRouterjs);
var _alunoRouterjs = require('./routes/alunoRouter.js'); var _alunoRouterjs2 = _interopRequireDefault(_alunoRouterjs);
var _fotoRouterjs = require('./routes/fotoRouter .js'); var _fotoRouterjs2 = _interopRequireDefault(_fotoRouterjs);

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
    this.app.use('/', _homeRouterjs2.default);
    this.app.use('/users/', _userRouterjs2.default);
    this.app.use('/tokens/', _tokenRouterjs2.default);
    this.app.use('/alunos/', _alunoRouterjs2.default);
    this.app.use('/fotos/', _fotoRouterjs2.default);
  }
}

exports. default = new App().app;
