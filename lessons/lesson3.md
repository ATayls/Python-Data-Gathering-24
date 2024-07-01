---
layout: lessons
title: Working with Python Libraries
---

## Lesson Aims
- Learn how to use Python libraries.
- Install and import essential libraries.

## Working with Python Libraries

Python libraries are collections of pre-written code that you can use to perform common tasks. Libraries save time and effort by providing reusable functions and modules. There are thousands of libraries available, catering to various domains like web development, data analysis, machine learning, and more.

### Standard Library
The Python Standard Library is a collection of modules and packages included with Python. It provides a wide range of functionality without the need for additional installations.

#### Examples of Standard Library Modules:
- `math`: Provides mathematical functions.
- `datetime`: Supplies classes for manipulating dates and times.
- `os`: Provides a way of using operating system-dependent functionality like reading or writing to the file system.
- `sys`: Provides access to some variables used or maintained by the interpreter and to functions that interact strongly with the interpreter.
- `random`: Implements pseudo-random number generators for various distributions.

#### Example: Using the `datetime` module
```python
import datetime

# Getting the current date and time
now = datetime.datetime.now()
print(now)

# Formatting dates
formatted_date = now.strftime('%Y-%m-%d')
print(formatted_date)
```

**Output:**

```plaintext
2024-06-28 12:34:56.789012
2024-06-28
```

### Importing Libraries
To use a library in Python, you need to import it into your script. You can import an entire module or specific functions from a module.

#### Example: Importing the `math` module
```python
import math

# Using a function from the math module
result = math.sqrt(25)
print(result)
```

**Output:**

```plaintext
5.0
```

#### Example: Importing specific functions
```python
from math import sqrt, pi

# Using the imported functions
print(sqrt(16))
print(pi)
```

**Output:**

```plaintext
4.0
3.141592653589793
```

## Installing Libraries with pip
While the standard library is extensive, you may need additional functionality provided by third-party libraries. You can install these libraries using `pip`, Python's package installer.

#### Example: Installing a Library
Let's install the `requests` library, which is used for making HTTP requests.

```bash
pip install requests
```

#### Example: Verifying Installation
After installing a library, you can verify the installation by importing it in a Python script or interactive session.

```python
import requests

print(requests.__version__)
```

**Output:**

```plaintext
2.25.1
```

### Examples using external libraries

#### `requests` Library Example
After installation, you can import and use the `requests` library to make HTTP requests.

```python
import requests

response = requests.get('https://api.github.com')
print(response.status_code)
print(response.json())
```

**Output:**

```plaintext
200
{'current_user_url': 'https://api.github.com/user', ...}
```

#### `os` Library Example
The `os` module provides functions for interacting with the operating system.

```python
import os

# Get the current working directory
cwd = os.getcwd()
print(cwd)

# List files and directories in the current directory
files = os.listdir(cwd)
print(files)
```

**Output:**

```plaintext
/home/user
['file1.txt', 'file2.txt', 'directory1']
```

#### `sys` Library Example
The `sys` module provides access to system-specific parameters and functions.

```python
import sys

# Print Python version
print(sys.version)

# Print command line arguments
print(sys.argv)
```

**Output:**

```plaintext
3.9.1 (default, Dec 11 2020, 06:28:49) 
[GCC 7.3.0]
['script_name.py', 'arg1', 'arg2']
```

#### `random` Library Example
The `random` module provides functions for generating random numbers.

```python
import random

# Generate a random integer between 1 and 10
rand_int = random.randint(1, 10)
print(rand_int)

# Choose a random element from a list
choices = ['apple', 'banana', 'cherry']
rand_choice = random.choice(choices)
print(rand_choice)
```

**Output:**

```plaintext
7
banana
```

## Working with Library Documentation
Each library comes with its own documentation, which is crucial for understanding how to use its functions and classes effectively. You can find documentation for the Python Standard Library at the [Python Documentation](https://docs.python.org/3/library/) website.

#### Example: Accessing Documentation
You can access the documentation for a specific library or function directly from the Python interactive interpreter using the `help` function.

```python
import math

# Get help on the math module
help(math)

# Get help on a specific function
help(math.sqrt)
```

## Practical Exercise

#### Task: Write a Script to Work with Dates
Create a script that:
1. Prints the current date and time.
2. Prints the date one week from today.
3. Formats the current date in `YYYY-MM-DD` format.

#### Example Solution:

```python
import datetime

# Print the current date and time
now = datetime.datetime.now()
print("Current date and time:", now)

# Calculate the date one week from today
one_week_later = now + datetime.timedelta(weeks=1)
print("Date one week from today:", one_week_later)

# Format the current date in YYYY-MM-DD format
formatted_date = now.strftime('%Y-%m-%d')
print("Formatted date:", formatted_date)
```

**Output:**

```plaintext
Current date and time: 2024-06-28 12:34:56.789012
Date one week from today: 2024-07-05 12:34:56.789012
Formatted date: 2024-06-28
```

### Summary
In this lesson, we covered:
- An introduction to Python libraries and their importance.
- Detailed examples of using the Python Standard Library, including `datetime`, `os`, `sys`, and `random` modules.
- How to install and verify third-party libraries using `pip`.
- Practical exercises to reinforce the concepts.

Understanding how to work with libraries is essential for extending Python's capabilities and efficiently performing a wide range of tasks.
This foundational knowledge will be invaluable as you move on to more complex data gathering and analysis tasks.