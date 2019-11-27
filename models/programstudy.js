/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('programstudy', {
    ps_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ps_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'programstudy'
  });
};
