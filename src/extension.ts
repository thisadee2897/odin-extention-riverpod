import * as vscode from 'vscode';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.createScreen', async (uri: vscode.Uri) => {
        const screenName = await vscode.window.showInputBox({ prompt: 'Enter the screen name' });
        if (screenName) {
            const workspaceFolders = vscode.workspace.workspaceFolders;
            let projectName = 'project';
            if (workspaceFolders && workspaceFolders.length > 0) {
                // Get the folder name of the first workspace
                projectName = path.basename(workspaceFolders[0].uri.fsPath);
            }

            const screenFileName = `${screenName}_screen.dart`;
            const screenContent = `
import 'package:flutter/material.dart';
import 'package:${projectName}/components/base_full_widget.dart';
import 'package:responsive_builder/responsive_builder.dart';
class ${screenName}Screen extends BaseStatefulWidget {
  const ${screenName}Screen({Key? key}) : super(key: key, subPage: false);

  @override
  _${screenName}ScreenState createState() => _${screenName}ScreenState();
}

class _${screenName}ScreenState extends BaseState<${screenName}Screen> {
  TextEditingController provinceCtl = TextEditingController();
  
  @override
  Widget buildDesktop(BuildContext context, SizingInformation sizingInformation) {
    return content(
      buildDesktop: true,
    );
  }

  @override
  Widget? buildTablet(BuildContext context, SizingInformation sizingInformation) {
    return content();
  }

  @override
  Widget buildMobile(BuildContext context, SizingInformation sizingInformation) {
    return content();
  }

  Widget content({bool buildDesktop = false}) {
    return Container(
      child: Center(
        child: Text('${screenName}Screen'),
      ),
    );
  }
}`;

            const screenFilePath = vscode.Uri.joinPath(uri, screenFileName);
            await vscode.workspace.fs.writeFile(screenFilePath, Buffer.from(screenContent, 'utf8'));
            vscode.window.showInformationMessage(`Screen ${screenFileName} created successfully!`);
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
