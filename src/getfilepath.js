const vscode = require('vscode');
module.exports = function(context) {
  context.subscriptions.push(vscode.commands.registerCommand('extension.getCurrentFilePath', (uri) => {
    vscode.window.showInformationMessage(`Path：${uri ? uri.path : '空'}`);
  }));
};
