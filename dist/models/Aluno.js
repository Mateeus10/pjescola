"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Aluno extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING,
        default: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre 3 a 255 caractere',
          },
        },
      },

      sobrenome: {
        type: _sequelize2.default.STRING,
        default: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Sobenome precisa ter entre 3 a 255 caractere',
          },
        },
      },
      email: {
        type: _sequelize2.default.STRING,
        default: '',
        unique: {
          msg: 'E-mail já existe',
        },
        validate: {
          isEmail: {
            msg: 'E-mail Invalido',
          },
        },
      },
      idade: {
        type: _sequelize2.default.INTEGER,
        default: '',
        validate: {
          isInt: {
            msg: 'Idade precisa ser um numero interio',
          },
        },
      },
      peso: {
        type: _sequelize2.default.FLOAT,
        default: '',
        validate: {
          isFloat: {
            msg: 'Peso precisa ser um numero',
          },
        },
      },
      altura: {
        type: _sequelize2.default.FLOAT,
        default: '',
        validate: {
          isFloat: {
            msg: 'Altura precisa ser um numero',
          },
        },
      },

    }, {
      sequelize,

    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
} exports.default = Aluno;
