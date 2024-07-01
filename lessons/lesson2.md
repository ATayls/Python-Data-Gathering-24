---
layout: lessons
title: Python Control Structures and Functions
sections:
  - id: introduction
    title: Introduction
  - id: main-content
    title: Main Content
  - id: conclusion
    title: Conclusion
---

## Lesson Aims
- Understand and use Python control structures.
- Learn how to define and use functions in Python.
- Perform basic operations with loops and conditionals.
- Implement reusable code using functions.

## Control Structures in Python

### Conditional Statements
Python uses conditional statements to execute different blocks of code based on certain conditions.
The main conditional statements are `if`, `elif`, and `else`.

#### Example:

```python
age = 18

if age < 18:
    print("Minor")
elif age == 18:
    print("Just became an adult")
else:
    print("Adult")
```

**Output:**

```plaintext
Just became an adult
```

### Loops

#### `for` Loop
A `for` loop iterates over a sequence (such as a list or a range).

#### Example:

```python
for i in range(5):
    print(i)
```

**Output:**

```plaintext
0
1
2
3
4
```

#### `while` Loop
A `while` loop repeats as long as a certain condition is true.

#### Example:

```python
count = 0
while count < 5:
    print(count)
    count += 1
```

**Output:**

```plaintext
0
1
2
3
4
```

## Functions in Python
Functions allow you to encapsulate code into reusable blocks.
You define a function using the `def` keyword.

#### Defining a Function
A simple function to greet a user:

```python
def greet(name):
    print(f"Hello, {name}!")
```

#### Calling a Function
To call the `greet` function, pass a string argument:

```python
greet("Alice")
```

**Output:**

```plaintext
Hello, Alice!
```

### Parameters and Return Values
Functions can take parameters and return values.

#### Example:

```python
def add(a, b):
    return a + b

result = add(5, 3)
print(result)
```

**Output:**

```plaintext
8
```

### Default Parameters
You can provide default values for parameters.

#### Example:

```python
def greet(name="Guest"):
    print(f"Hello, {name}!")

greet()
```

**Output:**

```plaintext
Hello, Guest!
```

### Variable Scope
Variables defined inside a function are local to that function.

#### Example:

```python
def my_function():
    local_variable = "I'm local"
    print(local_variable)

my_function()
# print(local_variable)  # This would cause an error
```

### Using Functions to Simplify Code
Functions can help reduce code duplication.

#### Example:

```python
def calculate_bmi(weight, height):
    bmi = weight / (height ** 2)
    return bmi

# Usage
weight_kg = 70
height_m = 1.75
bmi = calculate_bmi(weight_kg, height_m)
print(f"BMI: {bmi:.2f}")
```

**Output:**

```plaintext
BMI: 22.86
```

### Lambda Functions
Lambda functions are small anonymous functions defined with the `lambda` keyword.

#### Example:

```python
add = lambda x, y: x + y
print(add(2, 3))
```

**Output:**

```plaintext
5
```

## Practical Exercise

### Task: Write a Function to Convert Temperatures
Create a function that converts Fahrenheit to Celsius and vice versa.

#### Example Solution:

```python
def fahrenheit_to_celsius(fahrenheit):
    return (fahrenheit - 32) * 5.0/9.0

def celsius_to_fahrenheit(celsius):
    return celsius * 9.0/5.0 + 32

# Test the functions
print(fahrenheit_to_celsius(98.6))
print(celsius_to_fahrenheit(37))
```

**Output:**

```plaintext
37.0
98.6
```

By mastering control structures and functions, you can write more efficient and readable code. These concepts are fundamental to Python programming and will be used throughout your data gathering and analysis tasks.