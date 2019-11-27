/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rel_concentrate_programstudy', {
    cp_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cp_programstudy_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'programstudy',
        key: 'ps_id'
      }
    },
    cp_concentrate_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      references: {
        model: 'concentrate',
        key: 'con_id'
      }
    }
  }, {
    tableName: 'rel_concentrate_programstudy'
  });
};
