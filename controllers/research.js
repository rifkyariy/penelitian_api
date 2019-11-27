const Research = require('../models').research;

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}


module.exports = {
  list(req, res) {
    strQuery = `SELECT 
                  rs.research_id, 
                  rs.research_title, 
                  rs.research_object, 
                  rs.research_date, 
                  rs.research_abstract, 
                  rs.research_file, 
                  rs.research_total_fund, 
                  rs.createdAt, 
                  rs.updatedAt, 
                  ps.ps_name as 'programstudy',
                  rg.resGroup_id as 'resGroup.id', 
                  rg.resGroup_name as 'resGroup.resgroup',
                  con.con_name as 'resGroup.concentrate'
                FROM 
                  research as rs 
                join researchgroup as rg 
                  on rs.research_resGroup_id = rg.resGroup_id
                join rel_concentrate_programstudy as cp 
                  on cp.cp_id = rg.resGroup_concentrate_programstudy_id
                join concentrate as con
                  on con.con_id = cp.cp_concentrate_id
                join programstudy as ps
                  on ps.ps_id = cp.cp_programstudy_id

                order by rs.research_id
                `;

    sequelize.query(strQuery,
      {
        type: sequelize.QueryTypes.SELECT,
        nest: true
      })
      .then((research) => {
        if (!research) {
          return res.status(404).send({
            message: 'Data Tidak Ditemukan',
          });
        }
        res.status(200).send(research)
      })
      .catch((error) => res.status(400).send({ message: 'Data Tidak Ditemukan' }));
  },

  getResearchTopic(rsc_id) {
    strQuery = `SELECT * 
                    FROM rel_research_topic 
                    where rt_topic_id = ${rsc_id}`;

    sequelize.query(strQuery, {
      type: sequelize.QueryTypes.SELECT,
      nest: true
    })
    .then((topic) => {
      res.status(200).send(topic)
    })
    .catch((error) => res.status(400).send({ message: 'Data Tidak Ditemukan' }));
  }
}

