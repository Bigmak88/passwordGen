# passwordGen
Javascript based password generator

Created Variables for Criteria using string.split method
Criteria included atleast 1 of the follow:
    - Upper Case Letter
    - Lower Case Letter
    - A Number
    - Special Character/s

-A Prompt Window is run with these options.
-User inputs length between 8-128 characters.
-Then is asked true or false (confirms)
 to each character criteria (character array sourced for each) needed to generate.

Created a function to generate the password (onClick html triggers this) 
using if and else statements to give a result.

Result is written innerHTML to text area on index.html


The Bonus was to create a clipboard to copy
Creating a function using textarea.select
and execCommand("Copy") in Javascript

And a button labeled Copy to Clipboard in html
with onClick to that function allows user to copy their generated password
