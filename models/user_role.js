/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_role', {
    user_role_id: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    user_role_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'user_role'
  });
};
