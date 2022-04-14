const vscode = require('vscode');

/**
 * 插件被激活时触发，所有代码总入口
 */
exports.activate = function(context) {
  require('./welcome')(context); // 欢迎提示
  require('./helloword')(context); // helloworld
  require('./getfilepath')(context); // 获取当前文件（夹）路径
};

/**
 * 插件被释放时触发
 */
exports.deactivate = function() {
  console.log('相聚有时，后会无期')
};