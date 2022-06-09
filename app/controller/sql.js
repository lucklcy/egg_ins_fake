'use strict';

const Controller = require('egg').Controller;

class SqlController extends Controller {
  async index() {
    const { ctx } = this;
    const result = await this.app.mysql.select('students', {
      where: { id: 1 },
    });
    ctx.body = result;
  }
}

module.exports = SqlController;
