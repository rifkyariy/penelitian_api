/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rel_research_user', {
    ru_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ru_research_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'research',
        key: 'research_id'
      }
    },
    ru_researcher_user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    ru_researcher_user_is_leader: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'rel_research_user'
  });
};
