const vscode = require('vscode');

// 注册HelloWord命令
module.exports = function (context) {
  context.subscriptions.push(vscode.commands.registerCommand('extension.sayHello', () => {
    vscode.window.showInformationMessage('编程是一门艺术');
  }));
};