const express = require('express');
const cors = require('cors');
const helper = require('../serverHelper');

const router = express.Router();
const stories = [];
// This router is used for accessing Cucumber/Selenium Reports
router
	.use(cors())
	.use((_, __, next) => {
		console.log('Time of submitted Run:', Date.now());
		next();
	})
	.use((req, res, next) => {
		res.header('Access-Control-Allow-Origin', process.env.FRONTEND_URL);
		res.header('Access-Control-Allow-Credentials', 'true');
		res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Credentials');
		next();
	});

/**
 * @api {get} api/run/Feature/:issueID Run a single Feature
 * @apiVersion 0.1.0
 * @apiName Run Feature
 * @apiGroup RunReport
 *
 * @apiParam {String} issueID 	id of the Issue
 */
// run single Feature
router.get('/Feature/:issueID', (req, res) => { //TODO: lower case "feature"
	helper.runReport(req, res, stories, 'feature');
});

/**
 * @api {get} api/run/Scenario/:issueID/:scenarioID Run a single Scenario from Feature
 * @apiVersion 0.1.0
 * @apiName Run Scenario
 * @apiGroup RunReport
 *
 * @apiParam {String} issueID 	id of the Issue
 * @apiParam {String} scenarioID 	id of the scenario in Issue
 */
// run single Scenario of a Feature
router.get('/Scenario/:issueID/:scenarioID', (req, res) => {
	helper.runReport(req, res, stories, 'scenario');
});

/**
 * @api {get} api/run//report/:reportName Run a single Scenario from Feature
 * @apiVersion 0.1.0
 * @apiName Get Report
 * @apiGroup RunReport
 *
 * @apiParam {String} reportName 	name of Report
 *
 * @apiSuccess {Object} user	User in Body
 */
router.get('/report/:reportName', (req, res) => {
  let reportName = req.params.reportName;
  helper.createReport(res, reportName);
});

module.exports = router;
