/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rel_research_topic', {
    rt_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    rt_research_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'research',
        key: 'research_id'
      }
    },
    rt_topic_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'topic',
        key: 'topic_id'
      }
    }
  }, {
    tableName: 'rel_research_topic'
  });
};
