import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        default: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre 3 a 255 caractere',
          },
        },
      },

      sobrenome: {
        type: Sequelize.STRING,
        default: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Sobenome precisa ter entre 3 a 255 caractere',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
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
        type: Sequelize.INTEGER,
        default: '',
        validate: {
          isInt: {
            msg: 'Idade precisa ser um numero interio',
          },
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        default: '',
        validate: {
          isFloat: {
            msg: 'Peso precisa ser um numero',
          },
        },
      },
      altura: {
        type: Sequelize.FLOAT,
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
}
