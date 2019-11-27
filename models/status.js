/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('status', {
    status_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    status_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'status'
  });
};
