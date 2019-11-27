/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('education_level', {
    level_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    level_name: {
      type: DataTypes.STRING(5),
      allowNull: true
    }
  }, {
    tableName: 'education_level'
  });
};
