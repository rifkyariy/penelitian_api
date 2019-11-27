/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rel_expertize', {
    re_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    re_user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    re_expertize_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'expertize',
        key: 'expertize_id'
      }
    },
    re_expertize_certificate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    re_expertize_status: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      references: {
        model: 'status',
        key: 'status_id'
      }
    }
  }, {
    tableName: 'rel_expertize'
  });
};
