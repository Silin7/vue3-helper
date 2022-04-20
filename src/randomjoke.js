const vscode = require('vscode')
const dataList = require('./json/xiaohua.js')

module.exports = function (context) {
  context.subscriptions.push(vscode.commands.registerCommand('extension.randomJoke', () => {
    let index = Math.random() * 200
    index = Math.trunc(index)
    let randomjoke = dataList[index].content
    vscode.window.showInformationMessage(randomjoke)
  }))
}