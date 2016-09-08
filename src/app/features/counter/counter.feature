Feature: Keep count of the number pennies I have lent out
	In order to keep track of my penny collection
	As an application user
	I want to be shown the number of pennies I have given to my friends

  Scenario: Lend a penny

    Given I navigate to the counter feature
		When I increase my penny lending
    Then the counter is increased to 1

	Scenario: Receive a before lending

    Given I navigate to the counter feature
		When I decrease my penny lending
    Then the counter is decreased to -1

	Scenario: Receive a penny after previously lending

    Given I navigate to the counter feature
		And I have already lent a penny out
		When I decrease my penny lending
    Then the counter is decreased to 0

  Scenario: Wipe the slate clean after previously lending

    Given I navigate to the counter feature
		And I have already lent a penny out
		When I reset my penny lending
    Then the counter is reset to 0
