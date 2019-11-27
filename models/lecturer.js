/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lecturer', {
    lecturer_id: {
      type: DataTypes.STRING(16),
      allowNull: false,
      primaryKey: true
    },
    lecturer_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    lecturer_programStudy_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'programstudy',
        key: 'ps_id'
      }
    },
    lecturer_user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'user',
        key: 'user_id'
      }
    }
  }, {
    tableName: 'lecturer'
  });
};
