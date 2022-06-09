'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/hs', controller.hs.index);
  router.get('/sql/students', controller.sql.index);
};
