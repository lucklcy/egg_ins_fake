'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  alinode: {
    enable: true,
    package: 'egg-alinode',
  },

  // config/plugin.js

  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
};
