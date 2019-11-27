/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inst_role', {
    inst_role_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    inst_role_name: {
      type: DataTypes.STRING(11),
      allowNull: true
    }
  }, {
    tableName: 'inst_role'
  });
};
