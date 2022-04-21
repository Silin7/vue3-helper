const vscode = require('vscode')

vscode.window.showInformationMessage('扩展已被激活')

/**
 * 插件被激活时触发，所有代码总入口
 */
exports.activate = function (context) {
  console.log('恭喜，您的扩展"vue3-helper"已被激活！');
  require('./welcome')(context); // 欢迎提示
  require('./tanchishe')(context); // 小游戏 - 贪吃蛇
  require('./zhuoqiu')(context); // 小游戏 - 2D桌球
  require('./getfilepath')(context); // 获取当前文件（夹）路径
  require('./beautywelfare')(context); // 美女福利
  require('./randomjoke')(context); // 随机笑话
};

/**
 * 插件被释放时触发
 */
exports.deactivate = function() {
  console.log('相聚有时，后会无期')
};