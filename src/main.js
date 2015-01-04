/*jslint devel:true */

define(function (require, exports, module) {
	'use strict';
	var LanguageManager = brackets.getModule("language/LanguageManager");
	
	LanguageManager.defineLanguage("velocity", {
		name: "Velocity",
		mode: "velocity",
		fileExtensions: ["vm"],
		lineComment: ["##"],
		blockComment: ["#*","*#"]
	});

	console.log("N-Triples syntax highlighting extension loaded");
});
