/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rel_research_fund', {
    rf_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    rf_research_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'research',
        key: 'research_id'
      }
    },
    rf_fund_source: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'institution',
        key: 'inst_id'
      }
    },
    rf_fund: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'rel_research_fund'
  });
};
