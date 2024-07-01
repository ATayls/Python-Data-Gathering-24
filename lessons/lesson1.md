---
layout: lessons
title: Introduction to Python
---

## Lesson Aims
- Understand what Python is and its advantages.
- Learn the basics of Python syntax.
- Perform basic operations in Python.
- Use simple data structures such as lists and dictionaries.

## What is Python?
Python is a high-level, interpreted programming language known for its readability and simplicity. It is widely used in web development, data analysis, scientific computing, artificial intelligence, and more. Python's versatility and extensive libraries make it a popular choice for both beginners and experienced developers.

## Advantages of Python and Automation
- **Ease of Learning**: Python's syntax is clear and concise, making it accessible to beginners.
- **Readability**: Python code is easy to read and understand, which reduces the cost of program maintenance.
- **Extensive Libraries**: Python has a rich set of libraries and frameworks that support a wide range of tasks.
- **Community Support**: Python has a large and active community that contributes to its growth and provides support through forums and documentation.
- **Automation**: Python excels at automating repetitive tasks, such as data gathering, which is essential for researchers. With libraries like `requests`, `BeautifulSoup`, and `Selenium`, Python can automate web scraping and data extraction efficiently.

## Variables in Python

### Using Python as a Calculator
Any Python interpreter can be used as a calculator:

```python
3 + 5 * 4
```

**Output:**

```plaintext
23
```

This is a simple demonstration, but to perform more useful tasks with data, we need to assign values to variables. In Python, this is done using the equals sign `=`. For example, to track the weight of a patient who weighs 60 kilograms:

```python
weight_kg = 60
```

From now on, whenever we use `weight_kg`, Python will substitute the value we assigned to it. In layperson’s terms, a variable is a name for a value.

### Variable Naming Rules
In Python, variable names:
- Can include letters, digits, and underscores.
- Cannot start with a digit.
- Are case sensitive.

Examples:
- `weight0` is a valid variable name, whereas `0weight` is not.
- `weight` and `Weight` are different variables.

### Types of Data
Python supports various data types. Three common ones are:
1. Integer numbers
2. Floating point numbers
3. Strings

In the example above, the variable `weight_kg` has an integer value of `60`. For more precise tracking, we can use a floating point value:

```python
weight_kg = 60.3
```

To create a string, we add single or double quotes around text. For example, to assign a unique identifier to a patient:

```python
patient_id = '001'
```

### Using Variables in Python
Once data is stored in variables, we can use it in calculations. For example, to store a patient's weight in pounds:

```python
weight_lb = 2.2 * weight_kg
```

To add a prefix to a patient identifier:

```python
patient_id = 'myprefix_' + patient_id
```

### Built-in Python Functions
Python provides several built-in functions to carry out common tasks with data and variables. To display information, use the `print` function:

```python
print(weight_lb)
print(patient_id)
```

**Output:**

```plaintext
132.66
myprefix_001
```

### Function Syntax
To call a function, follow its name with parentheses. The parentheses are essential for executing the function. You can include values or variables inside the parentheses for the function to use. For instance, using the `print` function:

```python
print(patient_id, 'weight in kilograms:', weight_kg)
```

**Output:**

```plaintext
myprefix_001 weight in kilograms: 60.3
```

You can also nest function calls. For example, the `type` function tells you a value’s data type:

```python
print(type(60.3))
print(type(patient_id))
```

**Output:**

```plaintext
<class 'float'>
<class 'str'>
```

### Arithmetic with Variables
You can perform arithmetic operations directly inside the `print` function:

```python
print('weight in pounds:', 2.2 * weight_kg)
```

**Output:**

```plaintext
weight in pounds: 132.66
```

The above command does not change the value of `weight_kg`:

```python
print(weight_kg)
```

**Output:**

```plaintext
60.3
```

To change the value of `weight_kg`, assign it a new value:

```python
weight_kg = 65.0
print('weight in kilograms is now:', weight_kg)
```

**Output:**

```plaintext
weight in kilograms is now: 65.0
```

### Variables as Sticky Notes
A variable in Python is like a sticky note with a name written on it. Assigning a value to a variable is like putting that sticky note on a particular value.

Using this analogy, we can see how assigning a value to one variable does not change the values of other, seemingly related variables. For example:

```python
# There are 2.2 pounds per kilogram
weight_lb = 2.2 * weight_kg
print('weight in kilograms:', weight_kg, 'and in pounds:', weight_lb)
```

**Output:**

```plaintext
weight in kilograms: 65.0 and in pounds: 143.0
```

### Comments in Python
Comments are used to explain code and are ignored by the interpreter.

```python
# This is a single-line comment

"""
This is a
multi-line comment
"""
```
## Practical Exercises

#### Exercise 1
What values do the variables `mass` and `age` have after each of the following statements? Test your answer by executing the lines.

```python
mass = 47.5
age = 122
mass = mass * 2.0
age = age - 20
```

**Solution:**
```plaintext
1. `mass` holds a value of `47.5`, `age` does not exist.
2. `mass` still holds a value of `47.5`, `age` holds a value of `122`.
3. `mass` now has a value of `95.0`, `age`'s value is still `122`.
4. `mass` still has a value of `95.0`, `age` now holds `102`.
```

#### Exercise 2: Sorting Out References
Python allows you to assign multiple values to multiple variables in one line by separating the variables and values with commas. What does the following program print out?

```python
first, second = 'Grace', 'Hopper'
third, fourth = second, first
print(third, fourth)
```

**Solution:**

**Output:**

```plaintext
Hopper Grace
```

#### Exercise 3: Seeing Data Types
What are the data types of the following variables?

```python
planet = 'Earth'
apples = 5
distance = 10.5
```

**Solution:**

```python
print(type(planet))
print(type(apples))
print(type(distance))
```

**Output:**

```plaintext
<class 'str'>
<class 'int'>
<class 'float'>
```

### Key Points
- Basic data types in Python include integers, strings, and floating-point numbers.
- Use `variable = value` to assign a value to a variable.
- Variables are created on demand whenever a value is assigned to them.
- Use `print(something)` to display the value of something.
- Use `# some kind of explanation` to add comments to programs.
- Built-in functions are always available to use.


#### Lesson Adapted from software carpentries [python-novice-inflammation](https://github.com/swcarpentry/python-novice-inflammation/blob/main/episodes/01-intro.md)