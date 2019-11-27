/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('expertize', {
    expertize_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    expertize_name: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    tableName: 'expertize'
  });
};
