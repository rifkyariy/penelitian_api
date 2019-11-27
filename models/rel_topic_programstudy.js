/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rel_topic_programstudy', {
    tp_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tp_topic_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'topic',
        key: 'topic_id'
      }
    },
    tp_programstudy_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'programstudy',
        key: 'ps_id'
      }
    }
  }, {
    tableName: 'rel_topic_programstudy'
  });
};
