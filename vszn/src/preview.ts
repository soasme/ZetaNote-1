'use strict';

import {
  commands,
  ExtensionContext,
  TextDocument,
  TextEditor,
  window,
  workspace
} from 'vscode';

export function activate(context: ExtensionContext) {
  
  // open preview in new window
  context.subscriptions.push(
    commands.registerCommand('markdown.extension.openNotePreview', () => {
      let editor = window.activeTextEditor;

      if (!editor) {
        commands.executeCommand('workbench.action.closeActiveEditor');
      } else if (editor.document.languageId === 'markdown') { // place to preset file type
        commands.executeCommand('markdown.showPreviewToSide');
      }
    }),
  );
}
