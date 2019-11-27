/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('institution', {
    inst_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    inst_name: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    inst_role: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'inst_role',
        key: 'inst_role_id'
      }
    }
  }, {
    tableName: 'institution'
  });
};
