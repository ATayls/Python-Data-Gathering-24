---
layout: lessons
title: Data Gathering Fundamentals
---

## Lesson Aims
- Understand the basics of web scraping.
- Learn about the ethics and legality of web scraping.
- Identify data sources and understand website structures.
- Navigate HTML structures and understand the DOM (Document Object Model).


## Data Gathering & Ethics

#### What is Web Scraping?
Web scraping is the process of automatically extracting data from websites.
It involves fetching the content of web pages and parsing it to gather specific information.
Sometimes, web scraping is called web harvesting or web data extraction.

#### Ethics and Legality of Web Scraping
- **Ethics**: Always consider the ethical implications of web scraping.
Respect the website's `robots.txt` file, which indicates the parts of the site that should not be scraped.
- **Legality**: Ensure that you comply with the website's terms of service.
Unauthorized scraping can lead to legal consequences. Always seek permission if you're unsure about the legality of scraping a particular site.

Always ensure compliance with ethical guidelines, data privacy laws (such as GDPR and CCPA), and platform-specific terms of service. Institutional Review Boards (IRBs) or Ethics Committees should review and approve data collection methodologies.

#### Example robots.txt File
This example `robots.txt` file specifies that the `/private/` and `/admin/` directories should not be scraped
```
User-agent: *
Disallow: /private/
Disallow: /admin/
```
see wikipedias [robots.txt](https://en.wikipedia.org/robots.txt) file for an example.

#### Best Practices:
- Respect the `robots.txt` file. This file specifies which parts of the website can be scraped.
- Avoid overwhelming the server with too many requests in a short period (rate limiting).
- Use identifiable User-Agent strings to avoid being mistaken for a malicious bot.
- Attribute the source of the data if used publicly.
- If an API is available, use it instead of scraping. See later lessons for more on APIs.

#### Disclaimer
Web scraping can be a powerful tool for data collection, but it's essential to use it responsibly and ethically.
This material is for educational purposes only, and you should always consider the legal and ethical implications of web scraping before using it in practice.


## Introduction to HTML Structure and Elements

Understanding the basics of HTML structure and elements, including tables, is crucial for analysis of web data,
as it allows you to navigate and extract data from web pages effectively.
Familiarity with common tags, the hierarchical nature of HTML documents,
and the structure of tables provides a strong foundation for further exploration of web
technologies and data extraction techniques.

### HTML Document Structure
HTML (HyperText Markup Language) is the standard language used to create web pages. An HTML document has a specific structure that includes several key elements:

#### Basic Structure of an HTML Document
```html
<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
</head>
<body>
    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>
</body>
</html>
```

1. **`<!DOCTYPE html>`**: Declares the document type and version of HTML.
2. **`<html>`**: The root element that encompasses all other elements in the document.
3. **`<head>`**: Contains meta-information about the document, such as the title and links to stylesheets or scripts.
4. **`<title>`**: Sets the title of the document, which is displayed in the browser tab.
5. **`<body>`**: Contains the content of the document, such as text, images, links, and other media.

### Common HTML Elements
HTML uses various tags to define elements on a web page. Each tag serves a specific purpose and affects the content within it.

#### Headings
Headings are used to define sections and subsections of content. There are six levels of headings, from `<h1>` to `<h6>`.

```html
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Sub-subheading</h3>
```

#### Paragraphs
Paragraphs are defined with the `<p>` tag and used for blocks of text.

```html
<p>This is a paragraph of text. It can contain multiple sentences.</p>
```

#### Links
Links are created using the `<a>` tag, with the `href` attribute specifying the destination URL.

```html
<a href="https://www.example.com">Visit Example.com</a>
```

#### Images
Images are embedded using the `<img>` tag, with the `src` attribute specifying the image source.

```html
<img src="image.jpg" alt="Description of image">
```

#### Lists
Lists can be ordered (numbered) or unordered (bulleted).

- **Ordered List**: `<ol>` with `<li>` items.
- **Unordered List**: `<ul>` with `<li>` items.

```html
<ol>
    <li>First item</li>
    <li>Second item</li>
</ol>
<ul>
    <li>First item</li>
    <li>Second item</li>
</ul>
```

### Tables
Tables are used to display data in a structured format of rows and columns. The primary tags used in tables are `<table>`, `<tr>`, `<th>`, and `<td>`.

#### Basic Table Structure
```html
<table>
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
        <th>Header 3</th>
    </tr>
    <tr>
        <td>Data 1</td>
        <td>Data 2</td>
        <td>Data 3</td>
    </tr>
    <tr>
        <td>Data 4</td>
        <td>Data 5</td>
        <td>Data 6</td>
    </tr>
</table>
```

1. **`<table>`**: Defines the table.
2. **`<tr>`**: Defines a table row.
3. **`<th>`**: Defines a table header cell.
4. **`<td>`**: Defines a table data cell.

#### Example: A Simple Table
```html
<table border="1">
    <caption>Sample Table</caption>
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Alice</td>
            <td>25</td>
            <td>New York</td>
        </tr>
        <tr>
            <td>Bob</td>
            <td>30</td>
            <td>Los Angeles</td>
        </tr>
    </tbody>
</table>
```

1. **`<caption>`**: Provides a title for the table.
2. **`<thead>`**: Groups the header content.
3. **`<tbody>`**: Groups the body content.

**Output:**

| Name  | Age | City        |
|-------|-----|-------------|
| Alice | 25  | New York    |
| Bob   | 30  | Los Angeles |

### Nesting Elements
HTML elements can be nested within each other to create a hierarchical structure. This is essential for creating complex layouts and organizing content.

```html
<div>
    <h2>Section Heading</h2>
    <p>This is a paragraph within a section.</p>
    <ul>
        <li>List item one</li>
        <li>List item two</li>
    </ul>
</div>
```

### CSS Styling
Cascading Style Sheets (CSS) is used to style HTML elements, controlling layout, colors, fonts, and overall visual appearance.
CSS rules consist of selectors and declarations. A selector targets HTML elements, and the declaration specifies the styles.
Understanding CSS is useful for web data gathering as it helps identify and extract specific elements based on their styles and classes, enabling more precise data extraction.

#### Example:
```html
<style>
    p {
        color: blue;
        font-size: 16px;
    }
</style>
<p>This is a styled paragraph.</p>
```

### Selectors
Selectors define which HTML elements to style:
- **Element Selector**: `p { color: blue; }`
- **Class Selector**: `.example { font-weight: bold; }`
- **ID Selector**: `#example { text-align: center; }`

### Properties and Values
CSS properties specify styles, and values define their appearance:
- **color**: `color: red;`
- **font-size**: `font-size: 24px;`
- **background-color**: `background-color: yellow;`

### Applying CSS with Classes
CSS can be applied inline, internally within `<style>` tags, or externally via linked `.css` files.

#### Example:
```html
<head>
    <style>
        .example { color: red; }
    </style>
</head>
<body>
    <p class="example">Styled with a class selector.</p>
</body>
```

Identifying classes in the html is useful as it allows you to target specific elements for data extraction.

## Comprehending the Document Object Model (DOM)

### What is the DOM?
The DOM (Document Object Model) is a programming interface for web documents.
It represents the page so that programs can change the document structure, style, and content.
The DOM provides a tree-like structure where each node is an object representing a part of the document.
The DOM is not a programming language but a model
that browsers use to represent web pages. It allows scripts to interact with the page dynamically, updating content, structure, and style.
Understanding the DOM is essential for web scraping and web development.
It provides the framework for accessing and manipulating web page content programmatically.
By grasping the structure and navigation of the DOM,
you can effectively work with web documents and automate interactions.

#### Example DOM Tree
For the given HTML:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Example Page</title>
</head>
<body>
    <h1>Heading</h1>
    <p>This is a paragraph.</p>
    <a href="https://example.com">Example Link</a>
</body>
</html>
```
The DOM tree would look like:
```
html
  ├── head
  │   └── title
  └── body
      ├── h1
      ├── p
      └── a
```

<img src="{{ site.baseurl }}/assets/imgs/Screenshot 2024-06-29 at 23.06.35.png" alt="DOM Image" style="max-width: 100%;"/>

### Structure of the DOM
The DOM structure is hierarchical, with the document element at the top,
followed by child nodes representing HTML elements. Each element can have attributes,
text content, and other child elements.

#### Key Concepts:
- **Node**: The basic unit of the DOM tree. Everything in the DOM is a node.
- **Element Node**: Represents HTML elements (e.g., `<html>`, `<body>`, `<p>`).
- **Attribute Node**: Represents attributes of HTML elements (e.g., `class`, `href`).
- **Text Node**: Represents text content within HTML elements.

### Navigating the DOM
Understanding how to traverse the DOM tree is crucial. Here are some common relationships:

- **Parent Node**: The node directly above another node in the hierarchy.
- **Child Node**: A node directly below another node in the hierarchy.
- **Sibling Node**: Nodes that share the same parent.

#### Example:
In the given HTML example:
- The `html` element is the parent of the `head` and `body` elements.
- The `body` element is a sibling to the `head` element.
- The `h1`, `p`, and `a` elements are children of the `body` element.

### DOM vs. HTML
While HTML is a markup language used to create web pages, the DOM is an in-memory representation of this document. When a browser loads an HTML page, it parses the HTML and generates the DOM, which scripts can then interact with to modify the document dynamically.

## Practical Exercises

### Exercise 1: Inspecting a Web Page
To effectively gather data from a web page, it’s essential to understand its structure. This exercise will help you become familiar with inspecting HTML elements and navigating the DOM.

#### Steps:
1. **Open a Web Page**: Choose a web page you want to inspect, such as a news article or a product page on an e-commerce site.
2. **Open Developer Tools**: Right-click on the web page and select "Inspect" or "Inspect Element" from the context menu. Alternatively, you can press `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Option+I` (Mac) to open the developer tools.
3. **Explore the Elements Panel**:
    - **HTML Structure**: In the Elements panel, you’ll see the HTML structure of the page. Expand and collapse elements to see how they are nested.
    - **Highlight Elements**: Hover over different HTML elements in the Elements panel. Notice how the corresponding part of the web page is highlighted.
    - **View Attributes**: Click on elements to view their attributes, such as `class`, `id`, and `href`.
4. **Inspect Specific Elements**:
    - **Headings**: Find the headings (`<h1>`, `<h2>`, etc.) on the page.
    - **Paragraphs**: Locate the paragraph (`<p>`) elements.
    - **Links**: Identify all the links (`<a>`) on the page and note their `href` attributes.
    - **Images**: Look for image (`<img>`) elements and examine their `src` and `alt` attributes.

### Exercise 2: Identifying Page Structure
Understanding the structure of a web page is crucial for effective data gathering. This exercise will help you identify key sections and elements on a web page.

#### Steps:
1. **Choose a Web Page**: Select a web page with a clear structure, such as a blog post or a Wikipedia article.
2. **Identify the Main Sections**:
    - **Header**: Look for the header section, which typically includes the navigation bar and logo.
    - **Main Content**: Find the main content area where the primary information is displayed.
    - **Sidebar**: Identify any sidebar sections that may contain additional links or information.
    - **Footer**: Locate the footer section at the bottom of the page.
3. **Document the Structure**: Create a simple outline or diagram of the web page structure. Include the main sections and any notable elements within each section.

### Exercise 3: Understanding the DOM Hierarchy
This exercise will help you comprehend the hierarchical nature of the DOM and how elements are related.

#### Steps:
1. **Select a Simple Web Page**: Choose a web page with a straightforward layout, such as a contact page or a homepage with minimal content.
2. **Create a DOM Tree**:
    - **Root Element**: Identify the root `<html>` element.
    - **Child Elements**: Note the immediate children of the root element, typically `<head>` and `<body>`.
    - **Nested Elements**: For each child element, identify and list their children.
3. **Draw the DOM Tree**: Create a visual representation of the DOM tree, showing the hierarchical relationship between elements.


### Summary
In this lesson, we covered the fundamentals of data gathering, including:
- Understanding what web scraping is and its ethical and legal considerations.
- Identifying data sources and understanding the structure of websites.
- Navigating HTML structures and understanding the DOM.

In upcoming lessons, we will explore the use of beautifulsoup to interact with the DOM and extract data from web pages.

#### `BeautifulSoup`
- **Purpose**: Used for parsing HTML and XML documents.
- **Capabilities**: Provides tools for navigating the parse tree and searching for specific
elements.