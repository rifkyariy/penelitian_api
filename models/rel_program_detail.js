/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rel_program_detail', {
    rpd_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    rpd_univ_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'university',
        key: 'univ_id'
      }
    },
    rpd_fac_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'faculty',
        key: 'fac_id'
      }
    },
    rpd_dep_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'department',
        key: 'dp_id'
      }
    },
    rpd_program_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'programstudy',
        key: 'ps_id'
      }
    },
    rpd_educationlevel_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'education_level',
        key: 'level_id'
      }
    }
  }, {
    tableName: 'rel_program_detail'
  });
};
