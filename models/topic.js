/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('topic', {
    topic_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    topic_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'topic'
  });
};
