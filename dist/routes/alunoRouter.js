"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _AlunoControllerjs = require('../controllers/AlunoController.js'); var _AlunoControllerjs2 = _interopRequireDefault(_AlunoControllerjs);

// import loginRequired from '../middlewares/loginRequired';

const router = new (0, _express.Router)();

router.get('/', _AlunoControllerjs2.default.index);
router.post('/', _AlunoControllerjs2.default.store);
router.put('/:id', _AlunoControllerjs2.default.updade);
router.get('/:id', _AlunoControllerjs2.default.show);
router.delete('/:id', _AlunoControllerjs2.default.delete);

exports. default = router;
