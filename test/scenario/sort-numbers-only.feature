# features/sort-numbers.feature

Feature: Sort numbers
  As a user
  I want to sort a list of numbers,
  So that I can see those numbers in ascending order.

  Scenario: Sort 5 numbers
    Given I am on the index page
    And I turn on feature "feature-sort-number-only"
    When I sort the numbers "5,4,3,2,1,a"
    Then I should see "1,2,3,4,5" as the result