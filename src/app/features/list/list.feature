Feature: Retrieve a list of employees and show them in a table
	In order to keep track of who is employed at the company
	As a member of HR
	I want to be shown a list of current employees at the company

	Background:
  	Given I navigate to the list feature

  Scenario: View a list of employees

		When I click on the Get List button
    Then the two employees are displayed
