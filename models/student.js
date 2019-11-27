/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('student', {
    student_id: {
      type: DataTypes.STRING(11),
      allowNull: false,
      primaryKey: true
    },
    student_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    student_programstudy: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'programstudy',
        key: 'ps_id'
      }
    },
    student_year: {
      type: "YEAR(4)",
      allowNull: true
    },
    student_address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    student_phonenumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    student_user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'user',
        key: 'user_id'
      }
    }
  }, {
    tableName: 'student'
  });
};
