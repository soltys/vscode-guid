import * as vscode from 'vscode'; 
import * as  uuid from 'node-uuid';


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    
    var disposable = vscode.commands.registerTextEditorCommand('extension.generateGuid', (textEditor, textEditorEdit) => {
        var startPosition = textEditor.selection.start
        textEditorEdit.insert(startPosition, uuid.v1());       
    });
    context.subscriptions.push(disposable);
}