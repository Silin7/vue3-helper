const vscode = require('vscode')
const dataList = require('./json/meinv.js')

module.exports = function (context) {
  context.subscriptions.push(vscode.commands.registerCommand('extension.beautyWelfare', () => {
    let index = Math.random() * 200
    index = Math.trunc(index)
    let beautywelfare = dataList[index].imageUrl
    vscode.window.showInformationMessage(beautywelfare)
  }))
}