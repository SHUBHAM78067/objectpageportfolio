/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"PortfolioFiori/objectpageportfolio/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
