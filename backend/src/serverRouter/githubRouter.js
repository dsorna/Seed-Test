const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const process = require('process');
const fetch = require('node-fetch');
const mongo = require('../database/mongodatabase');

const router = express.Router();
// router for all github requests
router
	.use(cors())
	.use(bodyParser.json({ limit: '100kb' }))
	.use(bodyParser.urlencoded({
		limit: '100kb',
		extended: true
	}))
	.use((_, __, next) => {
		console.log('Time of github request:', Date.now());
		next();
	})
	.use((req, res, next) => {
		res.header('Access-Control-Allow-Origin', process.env.FRONTEND_URL);
		res.header('Access-Control-Allow-Credentials', 'true');
		res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Credentials');
		next();
	});

/**
 * @api {post} /api/github/submitIssue/ submits new StepType-Request as an Issue to our github
 * @apiVersion 0.1.0
 * @apiName github/submitIssue
 * @apiGroup github
 *
 * @apiSuccess {String} Body in request with the structure of a GitHub comment
 */

// submits new StepType-Request as an Issue to our github
router.post('/submitIssue/', (req, res) => {
	const { body } = req;
	const token = process.env.TESTACCOUNT_TOKEN;
	fetch('https://api.github.com/repos/adessoAG/Seed-Test/issues', {
		method: 'post',
		body: JSON.stringify(body),
		headers: { Authorization: `token ${token}` }
	})
		.then((response) => {
			if (!response.ok) res.status(400);
			else res.status(200).json(response.json);
		})
		.catch(res.status(400));
});

/**
 * @api {delete} /api/github/disconnectGithub Disconnects a GitHub Account from a Seed-Test Account
 * @apiVersion 0.1.0
 * @apiName github/disconnectGithub
 * @apiGroup github
 *
 *
 * @apiSuccess {Object} User
 * @apiSuccess {Object} User.github with "login", "id" etc.
 *
 * @apiError 400 no user OR no user.github
 */
router.delete('/disconnectGithub', (req, res) => {
	const { user } = req;
	if (user && user.github) try {
		delete user.github;
		const result = mongo.disconnectGithub(user);
		res.status(200).json(result);
	} catch (e) {
		res.status(400).json(e);
	} else res.sendStatus(400);
});

module.exports = router;
