const User = require('../models').user;

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
        return User
            .findAll({
                order: [
                ],
            })
            .then((user) => res.status(200).send(user))
            .catch((error) => { res.status(400).send(error); });
    },
    getById(req, res) {
        return User
            .findByPk(req.params.id, {
                // include: ['role'] 
            })
            .then((user) => {
                if (!user) {
                    return res.status(404).send({
                        message: 'User Not Found',
                    });
                }
                return res.status(200).send(user);
            })
            .catch((error) => res.status(400).send(error));
    },

    auth(req, res) {
        strQuery = `SELECT COUNT(*) as user_login FROM user WHERE user_name = :username and user_pass = :userpass`;
        sequelize.query(strQuery,
            { replacements: { 
                username: req.body.username,
                userpass: req.body.userpass
            }, type: sequelize.QueryTypes.SELECT }
        )
        .then((user) =>  {
            if(!user){
                return res.status(404).send({
                    message: 'User  Not Found',
                });
            }
            res.status(201).send(user)
        })
        .catch((error) => res.status(400).send(error));
    },

    add(req, res) {
        return User
            .create({
                user_name: req.body.username,
                user_pass: req.body.userpass,
                user_email: req.body.email,
                user_role_id: req.body.role
            })
            .then((user) => res.status(201).send(user))
            .catch((error) => res.status(400).send(error));

        console.log(req.body.username);
    },

}