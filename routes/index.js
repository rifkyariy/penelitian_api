var express = require('express');
var router = express.Router();

express.application.prefix = express.Router.prefix = function (path, configure) {
  var router = express.Router();
  this.use(path, router);
  configure(router);
  return router;
};


const researchController = require('../controllers').research;
const userController = require('../controllers').user;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.prefix('/api', function(router) {
  router.get('/research', researchController.list);


  router.post('/auth', userController.auth);
  router.get('/user', userController.list);
  router.get('/user/:id', userController.getById);
  router.post('/user',  userController.add);
  // router.put('/user/:id', userController.update);
  // router.delete('/user/:id', userController.delete);
})


module.exports = router;
