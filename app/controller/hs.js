'use strict';

const Controller = require('egg').Controller;

class HsController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'OK';
  }
}

module.exports = HsController;
