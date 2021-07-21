# PLANNING

## Steps to Complete

- As a user I want to:
  - see a recognizable calculator UI
    - add an element to display calculator results
      - display at least 10 digits
    - add buttons for numbers 0 through 9
      - add element for key pad
      - add element for number keys
      - add elements for numbers in key pad > number keys
    - add an element to hold operation keys
      - add a button for addition operations (+)
      - add a button for subtraction operations (-)
      - add a button for a decimal (.)
      - add a button for multiplication operations (x)
      - add a button for division operations (÷)
      - add an element for equals button (=)
    - add an element for helper function keys
      - add an element for clear button (CE)
      - add an element for memory save button (M+)
      - add an element for memory clear button (M-)
      - add an element for memory recall button (MR)
  - see the characters I press appear in the display
  - be able to ADD two numbers
    - get a reference to the keypad
    - attach a listener to the keypad
    - create an `result` variable
    - assign `result` the value entered in the display as a number
    - create an `operation` object
    - assign `operation["+"]` the value of an ADD function
    - get current entry as first entry
    - get new entry as second entry
    - coerce first and second entries to integers as first and second operands
    - add first and second operands
    - diplay results
  - see decimals displayed to at least the thousandth (.001)
  - be able to ADD two decimals
  - be able to SUBTRACT two numbers
  - be able to MULTIPLY two numbers
  - be able to DIVIDE two numbers
  - be able to enter decimals
  - be able to CLEAR the calculator completely

## Things I Did NOT Plan For Or Know About

- I had no real idea about how to get operations to run on successive entries (a number followed by an operation followed by another number). I had to kind of stumble around. I had a vague idea about using an `operations` object to map strings like `+` or `x` to functions to handle those operations. I got this working for simple entries, but the display is holding onto the last result (say a 2) and adding to that string (say adding 6 to the 2 to get 26).

## Googled

`common calculator buttons`:

- https://www.calculator.org/CalcHelp/basics.html;
