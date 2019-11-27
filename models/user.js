/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    user_pass: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    user_role_id: {
      type: DataTypes.STRING(4),
      allowNull: true,
      references: {
        model: 'user_role',
        key: 'user_role_id'
      }
    }
  }, {
    tableName: 'user'
  });
};
