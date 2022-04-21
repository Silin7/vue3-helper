const vscode = require('vscode');
const util = require('./util');
const fs = require('fs');
const path = require('path');

/**
 * 从某个HTML文件读取能被Webview加载的HTML内容
 * @param {*} context 上下文
 * @param {*} templatePath 相对于插件根目录的html文件相对路径
 */
function getWebViewContent(context, templatePath) {
  const resourcePath = util.getExtensionFileAbsolutePath(context, templatePath);
  const dirPath = path.dirname(resourcePath);
  let html = fs.readFileSync(resourcePath, 'utf-8');
  // vscode不支持直接加载本地资源，需要替换成其专有路径格式，这里只是简单的将样式和JS的路径替换
  html = html.replace(/(<link.+?href="|<script.+?src="|<img.+?src=")(.+?)"/g, (m, $1, $2) => {
    return $1 + vscode.Uri.file(path.resolve(dirPath, $2)).with({
      scheme: 'vscode-resource'
    }).toString() + '"';
  });
  return html;
}


module.exports = function (context) {
  context.subscriptions.push(vscode.commands.registerCommand('extension.showWelcome', function (uri) {
    const panel = vscode.window.createWebviewPanel(
      'testWelcome', // viewType
      "休息一下", // 视图标题
      vscode.ViewColumn.One, // 显示在编辑器的哪个部位
      {
        enableScripts: true, // 启用JS，默认禁用
      }
    );
    panel.webview.html = getWebViewContent(context, 'src/view/welcome.html');
  }));

  // const key = 'vscodePluginDemo.showTip';
  // 如果设置里面开启了欢迎页显示，启动欢迎页
  // if (vscode.workspace.getConfiguration().get(key)) {
  //   vscode.commands.executeCommand('extension.showWelcome');
  // }
  vscode.commands.executeCommand('extension.showWelcome');
};