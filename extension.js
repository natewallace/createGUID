var vscode = require('vscode');
var uuid = require('node-uuid');
var clipboard = require('copy-paste');

// extension is activated the very first time the command is executed
function activate(context) {

	// The createGUID command
	var disposable = vscode.commands.registerCommand('extension.createGUID', function () {
		var result = uuid.v4();
		clipboard.copy(result, function() {
			vscode.window.showInformationMessage('A new GUID ' + result + ' has been created and copied to your clipboard.');
		});
	});
	
	context.subscriptions.push(disposable);
}

exports.activate = activate;