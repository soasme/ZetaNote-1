'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as preview from './preview';
import * as sync from './syncUser';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "vszn" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand('extension.sayHello', () => {
    // The code you place here will be executed every time your command is executed
    let editor = vscode.window.activeTextEditor;

    if (!editor) {
      return; // No open text editor
    }

    let selection = editor.selection;
    let text = editor.document.getText(selection);

    // Display a message box to the user
    vscode.window.showInformationMessage('Selected characters: ' + text.length);
  });

  // Get ZetaNote content
  let getNodeContent = vscode.commands.registerCommand('extension.getZetaNote', () => {

    // Display a message to info users
    vscode.window.showInformationMessage('Fetching Notes from your ZetaNote...');
  });

  let updateNodeContent = vscode.commands.registerCommand('extension.updateZetaNote', () => {
    // Display a message to info users
    vscode.window.showInformationMessage('Updating Note to your ZetaNote...');
  });


  context.subscriptions.push(disposable);
  context.subscriptions.push(getNodeContent);
  context.subscriptions.push(updateNodeContent);

  // open preview in new window
  preview.activate(context);
  sync.activate(context);
}

// this method is called when your extension is deactivated
export function deactivate() {
}