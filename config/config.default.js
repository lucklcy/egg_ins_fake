/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1638173434469_5304';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.alinode = {
    server: 'wss://agentserver.node.aliyun.com:8080',
    appid: '89801',
    secret: 'a863c25ca2f5b97f58f360320c73f6b2ae414360',
    logdir: '/tmp/', // Node.js 性能平台日志输出地址绝对路径，与 NODE_LOG_DIR 保持一致。如：/tmp/
    // error_log: [
    //   '您的应用在业务层面产生的异常日志的路径，数组，可选，可配置多个',
    //   '例如：/root/.logs/error.#YYYY#-#MM#-#DD#.log',
    //   '不更改 Egg 默认日志输出路径可不配置本项目',
    // ],
    // agentidMode:'IP' '可选，如果设置，则在实例ID中添加部分IP信息，用于多个实例 hostname 相同的场景（以容器为主）'
  };

  return {
    ...config,
    ...userConfig,
  };
};
