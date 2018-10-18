"use strict";

import { commands, window, ExtensionContext, workspace } from "vscode";

export function activate(context: ExtensionContext) {
  let syncUser = commands.registerCommand("extension.syncZetaNote", syncAccount);

  context.subscriptions.push(syncUser);
}

async function syncAccount() {
  try {
    // Get local zetanote configuration to sync zetanote account
    const config = workspace.getConfiguration('zetanote');
    await window.setStatusBarMessage('Synchronizing your zetanote account...', 2000);
    console.log(config);
  } catch (err) {
    console.error(err);
  }
}
