/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('researchgroup', {
    resGroup_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    resGroup_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    resGroup_consentrate_programstudy_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'rel_concentrate_programstudy',
        key: 'cp_id'
      }
    }
  }, {
    tableName: 'researchgroup'
  });
};
