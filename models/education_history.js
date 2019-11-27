/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('education_history', {
    edu_history_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    edu_history_user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    edu_history_edu: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    edu_history_year: {
      type: "YEAR(4)",
      allowNull: true
    }
  }, {
    tableName: 'education_history'
  });
};
