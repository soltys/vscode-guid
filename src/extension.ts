// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'; 
import guid  from './guid';
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    console.log('Congratulations, your extension "guid" is now active!');

    
    var disposable = vscode.commands.registerTextEditorCommand('extension.generateGuid', (textEditor, textEditorEdit) => {
        var startPosition = textEditor.selection.start
        textEditorEdit.insert(startPosition, guid());

    });

    context.subscriptions.push(disposable);
}