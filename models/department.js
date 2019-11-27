/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('department', {
    dp_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    dp_name: {
      type: DataTypes.STRING(60),
      allowNull: true
    }
  }, {
    tableName: 'department'
  });
};
