import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
export function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.createScreen', async () => {
        const folderUri = await vscode.window.showOpenDialog({
            canSelectFolders: true,
            canSelectMany: false,
        });
        if (!folderUri || folderUri.length === 0) {
            return;
        }
        const screenName = await vscode.window.showInputBox({
            placeHolder: 'Enter screen name (without extension)',
        });
        if (!screenName) {
            return;
        }
        const fileName = `${screenName}_screen.dart`;
        const filePath = path.join(folderUri[0].fsPath, fileName);
        const fileContent = `import 'package:flutter/material.dart';\n` +
            `import 'package:flutter_riverpod/flutter_riverpod.dart';\n` +
            `import '../../components/base_full_widget.dart';\n\n` +
            `class ${screenName.charAt(0).toUpperCase() + screenName.slice(1)}Screen extends BaseStatefulWidget {\n` +
            `  const ${screenName.charAt(0).toUpperCase() + screenName.slice(1)}Screen({super.key});\n\n` +
            `  @override\n` +
            `  ConsumerState<BaseStatefulWidget> createState() => _${screenName.charAt(0).toUpperCase() + screenName.slice(1)}ScreenState();\n` +
            `}\n\n` +
            `class _${screenName.charAt(0).toUpperCase() + screenName.slice(1)}ScreenState extends ConsumerState<${screenName.charAt(0).toUpperCase() + screenName.slice(1)}Screen> {\n` +
            `  @override\n` +
            `  Widget build(BuildContext context) {\n` +
            `    return Container();\n` +
            `  }\n` +
            `}\n`;
        fs.writeFileSync(filePath, fileContent);
        vscode.window.showInformationMessage(`Screen created: ${fileName}`);
    });
    context.subscriptions.push(disposable);
}
export function deactivate() { }
//# sourceMappingURL=extension.js.map