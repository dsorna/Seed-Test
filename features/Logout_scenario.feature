Feature: Logout scenario

@386695799_1
Scenario: successful Logout

Given As a "User"

When I want to visit this site: "www.somehomepage.com/myhome" 
When I want to click the Button: "Logout" identified by:  

Then So I will be navigated to the site: "www.somehomepage.com" 
Then So I can see in the "Validation" textbox, the text "Successfully logged out" 


