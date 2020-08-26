define({ "api": [
  {
    "type": "post",
    "url": "api/jira/user/create/",
    "title": "Create Jira Access for User",
    "version": "0.1.0",
    "name": "Create_Jira_User",
    "group": "Jira",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "User",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jiraAccountName",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jiraPassword",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jiraHost",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>User does not exist - no User or no User._id</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Failed to connect to Jira Server on the jiraHost Url</p>"
          }
        ]
      }
    },
    "filename": "src/serverRouter/jiraRouter.js",
    "groupTitle": "Jira"
  },
  {
    "type": "post",
    "url": "api/jira/login",
    "title": "Jira Login",
    "version": "0.1.0",
    "name": "Jira_Login",
    "group": "Jira",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "User",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jiraAccountName",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jiraPassword",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jiraHost",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Jira Login Failed on Jira Server</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Failed to connect to Jira Server on the jiraHost Url</p>"
          }
        ]
      }
    },
    "filename": "src/serverRouter/jiraRouter.js",
    "groupTitle": "Jira"
  },
  {
    "type": "post",
    "url": "api/mongo/createStory",
    "title": "Create Story in DB-Repository",
    "version": "0.1.0",
    "name": "CreateStory",
    "group": "MongoDB",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<ul> <li>Title of the Story</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<ul> <li>description for the Story</li> </ul>"
          }
        ]
      }
    },
    "filename": "src/serverRouter/mongoRouter.js",
    "groupTitle": "MongoDB"
  },
  {
    "type": "get",
    "url": "api/mongo/stepTypes",
    "title": "Get stepTypes from DB",
    "version": "0.1.0",
    "name": "Create_Jira_User",
    "group": "MongoDB",
    "filename": "src/serverRouter/mongoRouter.js",
    "groupTitle": "MongoDB"
  },
  {
    "type": "post",
    "url": "api/mongo/createRepository",
    "title": "Create Repository in DB",
    "version": "0.1.0",
    "name": "Create_Repository",
    "group": "MongoDB",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<ul> <li>Email from User</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>Name of the Repository to create</li> </ul>"
          }
        ]
      }
    },
    "filename": "src/serverRouter/mongoRouter.js",
    "groupTitle": "MongoDB"
  },
  {
    "type": "get",
    "url": "api/mongo/scenario/add/:issueID",
    "title": "Create Scenario in Issue",
    "version": "0.1.0",
    "name": "Create_Scenario",
    "group": "MongoDB",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issueID",
            "description": "<p>id of the Issue</p>"
          }
        ]
      }
    },
    "filename": "src/serverRouter/mongoRouter.js",
    "groupTitle": "MongoDB"
  },
  {
    "type": "post",
    "url": "api/mongo/user/add",
    "title": "Create User in DB",
    "version": "0.1.0",
    "name": "Create_User",
    "group": "MongoDB",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "User",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/serverRouter/mongoRouter.js",
    "groupTitle": "MongoDB"
  },
  {
    "type": "delete",
    "url": "api/mongo/background/delete/:issueID/",
    "title": "Delete Background in Issue",
    "version": "0.1.0",
    "name": "Delete_Background",
    "group": "MongoDB",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issueID",
            "description": "<p>id of the Issue</p>"
          }
        ]
      }
    },
    "filename": "src/serverRouter/mongoRouter.js",
    "groupTitle": "MongoDB"
  },
  {
    "type": "delete",
    "url": "api/mongo/scenario/delete/:issueID/:scenarioID",
    "title": "Delete Scenario in Issue",
    "version": "0.1.0",
    "name": "Delete_Scenario",
    "group": "MongoDB",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issueID",
            "description": "<p>id of the Issue</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scenarioID",
            "description": "<p>id of the scenario</p>"
          }
        ]
      }
    },
    "filename": "src/serverRouter/mongoRouter.js",
    "groupTitle": "MongoDB"
  },
  {
    "type": "delete",
    "url": "api/mongo/user/delete/:userID",
    "title": "Delete User in DB",
    "version": "0.1.0",
    "name": "Delete_User",
    "group": "MongoDB",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userID",
            "description": "<p>id of the User</p>"
          }
        ]
      }
    },
    "filename": "src/serverRouter/mongoRouter.js",
    "groupTitle": "MongoDB"
  },
  {
    "type": "get",
    "url": "api/mongo/user/",
    "title": "Get User Data",
    "version": "0.1.0",
    "name": "Get_User",
    "group": "MongoDB",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>no User sent</p>"
          }
        ]
      }
    },
    "filename": "src/serverRouter/mongoRouter.js",
    "groupTitle": "MongoDB"
  },
  {
    "type": "post",
    "url": "api/mongo/background/update/:issueID",
    "title": "Update Background in Issue",
    "version": "0.1.0",
    "name": "Update_Background",
    "group": "MongoDB",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issueID",
            "description": "<p>id of the Issue</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "background",
            "description": "<ul> <li>from Story-background</li> </ul>"
          }
        ]
      }
    },
    "filename": "src/serverRouter/mongoRouter.js",
    "groupTitle": "MongoDB"
  },
  {
    "type": "post",
    "url": "api/mongo/scenario/update/:issueID",
    "title": "Update Scenario in Issue",
    "version": "0.1.0",
    "name": "Update_Scenario",
    "group": "MongoDB",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issueID",
            "description": "<p>id of the Issue</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "scenario",
            "description": "<ul> <li>from story.scenarios[]</li> </ul>"
          }
        ]
      }
    },
    "filename": "src/serverRouter/mongoRouter.js",
    "groupTitle": "MongoDB"
  },
  {
    "type": "post",
    "url": "api/mongo/user/update/:userID",
    "title": "Update User in DB",
    "version": "0.1.0",
    "name": "Update_User",
    "group": "MongoDB",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userID",
            "description": "<p>id of the User</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "User",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/serverRouter/mongoRouter.js",
    "groupTitle": "MongoDB"
  },
  {
    "type": "get",
    "url": "api/run//report/:reportName",
    "title": "Run a single Scenario from Feature",
    "version": "0.1.0",
    "name": "Get_Report",
    "group": "RunReport",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reportName",
            "description": "<p>name of Report</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User in Body</p>"
          }
        ]
      }
    },
    "filename": "src/serverRouter/runReportRouter.js",
    "groupTitle": "RunReport"
  },
  {
    "type": "get",
    "url": "api/run/Feature/:issueID",
    "title": "Run a single Feature",
    "version": "0.1.0",
    "name": "Run_Feature",
    "group": "RunReport",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issueID",
            "description": "<p>id of the Issue</p>"
          }
        ]
      }
    },
    "filename": "src/serverRouter/runReportRouter.js",
    "groupTitle": "RunReport"
  },
  {
    "type": "get",
    "url": "api/run/Scenario/:issueID/:scenarioID",
    "title": "Run a single Scenario from Feature",
    "version": "0.1.0",
    "name": "Run_Scenario",
    "group": "RunReport",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issueID",
            "description": "<p>id of the Issue</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scenarioID",
            "description": "<p>id of the scenario in Issue</p>"
          }
        ]
      }
    },
    "filename": "src/serverRouter/runReportRouter.js",
    "groupTitle": "RunReport"
  },
  {
    "type": "get",
    "url": "api/user/callback",
    "title": "Callback for GitHub Auth",
    "version": "0.1.0",
    "name": "GihHubCallback",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": "<p>with query.code</p>"
          }
        ]
      }
    },
    "filename": "src/serverRouter/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "api/user/githubLogin",
    "title": "User Login with Github",
    "version": "0.1.0",
    "name": "GithubLogin",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Id",
            "description": "<p>Id from User.Github</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>UserError</p>"
          }
        ]
      }
    },
    "filename": "src/serverRouter/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "api/user/githubRegister",
    "title": "Register with Github",
    "version": "0.1.0",
    "name": "GithubRegister",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Id",
            "description": "<p>user.id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>user.login</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "githubToken",
            "description": "<p>user.githubToken</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Could not Create User with Github</p>"
          }
        ]
      }
    },
    "filename": "src/serverRouter/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "api/user/logout",
    "title": "Logout",
    "version": "0.1.0",
    "name": "Logout",
    "group": "User",
    "filename": "src/serverRouter/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "api/user/login",
    "title": "User Login",
    "version": "0.1.0",
    "name": "User_Login",
    "group": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>UserError</p>"
          }
        ]
      }
    },
    "filename": "src/serverRouter/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "api/user/register",
    "title": "Create User",
    "version": "0.1.0",
    "name": "createUser",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Could not Create User</p>"
          }
        ]
      }
    },
    "filename": "src/serverRouter/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "api/user/repositories",
    "title": "Get Repositories for a User",
    "version": "0.1.0",
    "name": "getRepositories",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "User",
            "description": "<ul> <li>with &quot;user.github.login&quot;, &quot;user.github.githubToken&quot;</li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Wrong GitHub name or Token</p>"
          }
        ]
      }
    },
    "filename": "src/serverRouter/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "api/user/stories",
    "title": "Get Stories for a User",
    "version": "0.1.0",
    "name": "getStories",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "User",
            "description": "<ul> <li>with &quot;user.github.login&quot;, &quot;user.github.githubToken&quot;</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>options: &quot;github&quot;, &quot;jira&quot; or &quot;db&quot;</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Could not get Stories</p>"
          }
        ]
      }
    },
    "filename": "src/serverRouter/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "api/user/mergeGithub",
    "title": "Update DB on Github changes",
    "version": "0.1.0",
    "name": "mergeGithub",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>user.id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>user.login</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Could not Update User</p>"
          }
        ]
      }
    },
    "filename": "src/serverRouter/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/api/github/disconnectGithub",
    "title": "Disconnects a GitHub Account from a Seed-Test Account",
    "version": "0.1.0",
    "name": "github/disconnectGithub",
    "group": "github",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "User",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "User.github",
            "description": "<p>with &quot;login&quot;, &quot;id&quot; etc.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>no user OR no user.github</p>"
          }
        ]
      }
    },
    "filename": "src/serverRouter/githubRouter.js",
    "groupTitle": "github"
  },
  {
    "type": "post",
    "url": "/api/github/submitIssue/",
    "title": "submits new StepType-Request as an Issue to our github",
    "version": "0.1.0",
    "name": "github/submitIssue",
    "group": "github",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Body",
            "description": "<p>in request with the structure of a GitHub comment</p>"
          }
        ]
      }
    },
    "filename": "src/serverRouter/githubRouter.js",
    "groupTitle": "github"
  }
] });
