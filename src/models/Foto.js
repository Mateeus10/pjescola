import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/appconfig';

export default class Foto extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        default: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode fica vazio',
          },
        },
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${appConfig.url}/images/${this.getDataValue('filename')}`;
        },
      },
      filename: {
        type: Sequelize.STRING,
        default: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode fica vazio',
          },
        },
      },

    }, {
      sequelize,
      tableName: 'fotos',

    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
