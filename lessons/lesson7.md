---
layout: lessons
title: Handling Data Structures in BeautifulSoup
---

## Lesson Aims
- Understand and work with HTML tables and lists using Beautiful Soup.
- Extract data from HTML tables and lists.
- Navigate and extract data from complex nested HTML structures.

## Working with Tables

### Understanding HTML Tables
HTML tables are used to display tabular data and are defined using several tags:

- `<table>`: Defines the table.
- `<tr>`: Defines a table row.
- `<td>`: Defines a table cell (data).
- `<th>`: Defines a table header cell.

#### Attributes:
- `headers`: Specifies which header cells provide the header information for the cell.
- `colspan`: Specifies the number of columns a cell should span.
- `rowspan`: Specifies the number of rows a cell should span.

### Extracting Data from Tables
Beautiful Soup provides methods for parsing tables and extracting data.

#### Example HTML Table:

```html
<table id="example">
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
    </tr>
    <tr>
        <td>Data 1</td>
        <td>Data 2</td>
    </tr>
    <tr>
        <td>Data 3</td>
        <td>Data 4</td>
    </tr>
</table>
```

#### Methods for Parsing Tables:
- `find_all()`: Finds all instances of a tag.
- `select()`: Finds tags using CSS selectors.

#### Example: Extracting Rows and Columns

```python
from bs4 import BeautifulSoup

html_content = """
<table id="example">
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
    </tr>
    <tr>
        <td>Data 1</td>
        <td>Data 2</td>
    </tr>
    <tr>
        <td>Data 3</td>
        <td>Data 4</td>
    </tr>
</table>
"""

soup = BeautifulSoup(html_content, 'html.parser')
table = soup.find('table', id='example')

# Extract headers
headers = [header.text for header in table.find_all('th')]
print("Headers:", headers)

# Extract rows
rows = []
for row in table.find_all('tr'):
    cells = row.find_all('td')
    cells_text = [cell.text for cell in cells]
    rows.append(cells_text)

print("Rows:", rows)
```

**Output:**

```plaintext
Headers: ['Header 1', 'Header 2']
Rows: [['Data 1', 'Data 2'], ['Data 3', 'Data 4']]
```

## Working with Lists

### Understanding HTML Lists
HTML lists are used to group related items and come in two forms:

- `<ul>`: Unordered list (bulleted).
- `<ol>`: Ordered list (numbered).
- `<li>`: List item.

### Extracting Data from Lists
Beautiful Soup can be used to parse lists and extract data.

#### Example HTML List:

```html
<ul id="example">
    <li>Item 1</li>
    <li>Item 2
        <ul>
            <li>Subitem 1</li>
            <li>Subitem 2</li>
        </ul>
    </li>
    <li>Item 3</li>
</ul>
```

#### Methods for Parsing Lists:
- `find_all()`: Finds all instances of a tag.
- `select()`: Finds tags using CSS selectors.

#### Example: Extracting List Items and Nested Lists

```python
html_content = """
<ul id="example">
    <li>Item 1</li>
    <li>Item 2
        <ul>
            <li>Subitem 1</li>
            <li>Subitem 2</li>
        </ul>
    </li>
    <li>Item 3</li>
</ul>
"""

soup = BeautifulSoup(html_content, 'html.parser')
ul = soup.find('ul', id='example')

# Extract list items
def extract_list_items(ul):
    items = []
    for li in ul.find_all('li', recursive=False):
        item_text = li.contents[0].strip()
        sublist = li.find('ul')
        if sublist:
            items.append((item_text, extract_list_items(sublist)))
        else:
            items.append(item_text)
    return items

list_items = extract_list_items(ul)
print("List Items:", list_items)
```

**Output:**

```plaintext
List Items: ['Item 1', ('Item 2', ['Subitem 1', 'Subitem 2']), 'Item 3']
```

## Extracting Data from Complex Nested Structures

### Understanding Nested HTML Structures
Nested HTML structures can include multiple levels of nested tags, such as nested `<div>`, `<span>`, and other elements.

### Identifying Complex Nesting Patterns
Analyzing the HTML structure is crucial for understanding how to navigate and extract data from nested elements.

### Example of Nested HTML:

```html
<div class="parent">
    <div class="child">
        <span class="grandchild">Data 1</span>
        <span class="grandchild">Data 2</span>
    </div>
    <div class="child">
        <span class="grandchild">Data 3</span>
        <span class="grandchild">Data 4</span>
    </div>
</div>
```

### Techniques for Navigating Nested Structures

#### Combining `find()` and `find_all()` with CSS Selectors:

```python
html_content = """
<div class="parent">
    <div class="child">
        <span class="grandchild">Data 1</span>
        <span class="grandchild">Data 2</span>
    </div>
    <div class="child">
        <span class="grandchild">Data 3</span>
        <span class="grandchild">Data 4</span>
    </div>
</div>
"""

soup = BeautifulSoup(html_content, 'html.parser')
parent_div = soup.find('div', class_='parent')

# Extracting data using find_all()
data = [span.text for span in parent_div.find_all('span', class_='grandchild')]
print("Extracted Data:", data)
```

**Output:**

```plaintext
Extracted Data: ['Data 1', 'Data 2', 'Data 3', 'Data 4']
```

### Recursive Parsing Strategies
For deeply nested structures, a recursive approach can be useful.

#### Example:

```python
html_content = """
<div class="parent">
    <div class="child">
        <div class="grandchild">Data 1</div>
        <div class="grandchild">Data 2</div>
    </div>
    <div class="child">
        <div class="grandchild">Data 3</div>
        <div class="grandchild">Data 4</div>
    </div>
</div>
"""

soup = BeautifulSoup(html_content, 'html.parser')

def extract_nested_data(element, class_name):
    result = []
    for child in element.find_all(recursive=False):
        if class_name in child.get('class', []):
            result.append(child.text.strip())
        result.extend(extract_nested_data(child, class_name))
    return result

parent_div = soup.find('div', class_='parent')
data = extract_nested_data(parent_div, 'grandchild')
print("Extracted Nested Data:", data)
```

**Output:**

```plaintext
Extracted Nested Data: ['Data 1', 'Data 2', 'Data 3', 'Data 4']
```

By understanding and utilizing these techniques, you can effectively extract and manipulate data from various HTML
structures using Beautiful Soup.

## Practical Exercise

### Exercise 4: Extracting a Table from an HTML Document
Let's consider a page with a table
let's use https://en.wikipedia.org/wiki/List_of_presidents_of_the_United_States:

**Question:**
Write a Python script that scrapes a table from the Wikipedia page listing the Presidents of the United States. The script should print each cell's text content from the table.

**Solution:**
```python
import requests
from bs4 import BeautifulSoup

# URL of the Wikipedia page to scrape
url = "https://en.wikipedia.org/wiki/List_of_presidents_of_the_United_States"

# Send a GET request to the URL
response = requests.get(url)

# Parse the HTML content of the page
soup = BeautifulSoup(response.content, 'html.parser')

# Find the first table on the page
table = soup.find('table')

# Find all rows in the table
rows = table.find_all('tr')

# Loop through each row and extract the text from each cell
for row in rows:
    cells = row.find_all(['td', 'th'])
    for cell in cells:
        print(cell.get_text().strip(), end=' ')
    print()
```

**Explanation:**
- **Sending a GET request:** The script starts by sending a GET request to the specified Wikipedia page using the `requests` library to retrieve the page content.
- **Parsing HTML content:** The HTML content of the page is parsed with `BeautifulSoup` to facilitate searching for and extracting elements.
- **Extracting the table:** The script finds the first table on the page, which contains the list of U.S. Presidents.
- **Extracting and printing cell text:** It loops through each row of the table, extracts the text from each cell (`td` and `th` elements), strips any extra whitespace, and prints the text content in a formatted manner.