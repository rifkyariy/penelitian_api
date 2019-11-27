/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('research', {
    research_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    research_title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    research_object: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    research_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    research_abstract: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    research_file: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    research_resGroup_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'researchgroup',
        key: 'resGroup_id'
      }
    },
    research_total_fund: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'research'
  });
};
