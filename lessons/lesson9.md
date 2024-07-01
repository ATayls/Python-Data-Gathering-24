---
layout: lessons
title: Introduction to APIs
---

## What is an API?

An **API (Application Programming Interface)** is a set of rules and protocols that allows different software
applications to communicate with each other. APIs define the methods and data formats that applications can use to
interact with each other, providing a way for different systems to work together. APIs can be used for various purposes,
such as accessing web services, connecting different parts of an application, or integrating with third-party services.


## How is an API Different from a Regular HTTP URL?

While both APIs and regular URLs use the HTTP protocol and can be accessed through web browsers or other HTTP clients, there are key differences between them:

1. **Purpose**: Regular HTTP URLs are primarily designed to serve human-readable web pages, often in HTML format. In contrast, APIs are designed to serve machine-readable data, often in formats like JSON or XML.

2. **Interaction**: When you visit a regular HTTP URL in your browser, you typically receive a webpage that you can view and interact with. When you make a request to an API endpoint, you receive raw data that can be used by applications.

3. **Structure**: Regular web pages have a structure aimed at presentation (headers, paragraphs, images, etc.), while API responses are structured data intended for programmatic access (key-value pairs, arrays, etc.).

4. **Functionality**: APIs provide a standardised way to interact with data and services. They often support operations like creating, reading, updating, and deleting data, whereas regular URLs are primarily for reading and navigating between pages.

## Why Use APIs over Web Scraping for data gathering?

While web scraping can be a powerful tool for extracting data from websites, using APIs has several advantages:

1. **Structured Data**: APIs provide structured data in a machine-readable format, making it easier to work with and integrate into applications.
2. **Consistency**: APIs are designed to provide consistent and reliable access to data, reducing the risk of errors and inconsistencies that can occur with web scraping.
3. **Legal and Ethical Considerations**: Using APIs to access data is often more legal and ethical than web scraping, as APIs are designed for data access and are governed by terms of service that outline acceptable use.
4. **Security**: APIs can provide secure access to data through authentication and authorisation mechanisms, ensuring that only authorised users can access sensitive information.
5. **Documentation**: APIs often come with detailed documentation that describes how to use them, what data they provide, and any limitations or restrictions that apply.

## What is a REST API?

**REST (Representational State Transfer)** is an architectural style for designing networked applications. It relies
on a stateless, client-server, cacheable communications protocol -- the HTTP protocol. REST APIs use HTTP requests to
perform CRUD (Create, Read, Update, Delete) operations on resources. These resources are identified by URIs
(Uniform Resource Identifiers) or URLs (Uniform Resource Locators). We will focus on REST APIs as they are widely used but be aware that there are other types of APIs, such as SOAP and GraphQL.

what does Representational state transfer mean?

- **Representational**: Resources are represented in a format such as JSON or XML.
- **State Transfer**: The client can transfer the state of a resource by sending a request to the server.


### Key Concepts of REST

1. **Resource**: Everything in a REST API is considered a resource. Resources are objects or representations of data that the API can provide or manipulate. For example, in a book store API, a book would be a resource.
2. **Endpoint**: An endpoint is a specific URL where a resource can be accessed. Endpoints are the points of interaction between the client and the server.
3. **HTTP Methods**: REST APIs use standard HTTP methods to perform actions on resources:
   - **GET**: Retrieve a resource.
   - **POST**: Create a new resource.
   - **PUT**: Update an existing resource.
   - **DELETE**: Delete a resource.
   - **PATCH**: Partially update a resource.

### HTTP Status Codes

We introduced HTTP status codes in the lesson on Making HTTP Requests with Python.
The same status codes are used in REST APIs to indicate the result of an API request.
Here is a reminder of some common status codes:
- **200 OK**: The request was successful.
- **201 Created**: A new resource was successfully created.
- **204 No Content**: The request was successful, but there is no content to send in the response.
- **400 Bad Request**: The request was invalid or cannot be otherwise served.
- **401 Unauthorised**: Authentication is required and has failed or has not been provided.
- **403 Forbidden**: The server understood the request but refuses to authorise it.
- **404 Not Found**: The requested resource could not be found.
- **500 Internal Server Error**: An error occurred on the server.

## Example of REST API: DummyJSON

Previously, you have worked with making HTTP requests using the `requests` library in Python. One of the services you interacted with is HTTPBin. Now, let's use the DummyJSON API to understand how to work with a real-world API.

### Endpoints of DummyJSON API

The DummyJSON API provides several endpoints to interact with data about posts. Here are some of the key endpoints:
1. **GET /posts**: Retrieve a list of all posts.
2. **GET /posts/{id}**: Retrieve details of a specific post by its ID.
3. **POST /posts**: Add a new post.
4. **PUT /posts/{id}**: Update an existing post by its ID.
5. **DELETE /posts/{id}**: Delete a post by its ID.

### Example Using the `requests` Library

Here are some examples of how you might use the `requests` library to interact with these endpoints:
see the documentation on the endpoints here: https://dummyjson.com/docs/posts

#### GET /posts

In this example, you send a GET request to the endpoint `https://dummyjson.com/posts`, and the response is a JSON object containing details about the posts.

```python
import requests

response = requests.get('https://dummyjson.com/posts')
posts = response.json()
print(posts)
```


#### GET /posts/{id}

In this example, you send a GET request to the endpoint `https://dummyjson.com/posts/1` to retrieve details of the post with ID 1.

```python
post_id = 1
response = requests.get(f'https://dummyjson.com/posts/{post_id}')
post = response.json()
print(post)
```

#### GET posts with Query Parameters

In this example, you send a GET request to the endpoint `https://dummyjson.com/posts/search` with query parameters to search the posts.

In the params we provide the search query term and the limit of posts to retrieve.

```python
import requests

# Define the URL and query parameters
url = 'https://dummyjson.com/posts/search'
params = {
   'q': 'love',
    'limit': 1,
}

# Make the GET request
response = requests.get(url, params=params)

# Check if the request was successful
if response.status_code == 200:
    # Parse the JSON response
    data = response.json()
    print(data)
else:
    print(f"Failed to retrieve data: {response.status_code}")
```

### Brief Mention of Other Methods

While the focus of this course is on GET requests for web scraping, it's useful to know that other methods exist:
- **POST**: Used to create new resources. For example, adding a new post.
- **PUT**: Used to update existing resources. For example, updating an existing post.
- **DELETE**: Used to delete resources. For example, deleting an existing post.

These methods allow for a full range of interactions with an API, but for web scraping, GET requests are typically sufficient.

## Conclusion

REST APIs are a powerful way to enable communication between different software systems over the web.
By understanding the concepts of resources, endpoints, HTTP methods, and status codes, you can effectively interact with REST APIs.
Using the `requests` library in Python, you can easily make HTTP requests to these APIs,
enabling you to build and integrate with various web services.
API documentation is a valuable resource for understanding how to interact with a specific API,
so always refer to the documentation provided by the API provider.
In the next lesson, we will explore how to work with APIs that require authentication.

## Practical Exercises: 

#### Exercise 1: Gathering Data from a Web API Using Python

Using the same DummyJSON API, write a Python script that performs the following tasks:
1. Search for posts containing the keyword "love".
2. Retrieve details of the first post found.
3. Fetch comments associated with the first post.
4. Convert the comments data to a DataFrame and save it as a CSV file.

#### Hints

- Use the `requests.get()` method to make GET requests.
- Use the `json()` method of the response object to parse JSON data.
- Check the `status_code` attribute of the response to ensure successful requests.
- Use `pandas.DataFrame()` to create a DataFrame from JSON data.

#### Solution

```python
import requests
import pandas as pd

# Define the URL and query parameters for searching posts
search_url = 'https://dummyjson.com/posts/search'
search_params = {
    'q': 'love',
    'limit': 1,
    'select': 'title,userId'
}

# Make the GET request to search for posts
search_response = requests.get(search_url, params=search_params)

# Check if the search request was successful
if search_response.status_code != 200:
    print(f"Failed to retrieve posts: {search_response.status_code}")

# Parse the JSON response to get the posts data
search_data = search_response.json()

# Check if any posts are returned
if not search_data['posts']:
    print("No posts found with the query 'love'")

# Select the first post from the results
first_post = search_data['posts'][0]
post_id = first_post['id']

# Define the URL for querying comments of the first post
comments_url = f'https://dummyjson.com/posts/{post_id}/comments'

# Make the GET request to get comments for the first post
comments_response = requests.get(comments_url)

# Check if the comments request was successful
if comments_response.status_code != 200:
    print(f"Failed to retrieve comments: {comments_response.status_code}")
    exit()

# Parse the JSON response to get the comments data
comments_data = comments_response.json()

# Convert comments data to a DataFrame
comments_df = pd.DataFrame(comments_data['comments'])

# Output the results
print("Post Title:", first_post['title'])
print("Comments DataFrame:")
print(comments_df)

# Save the DataFrame to a CSV file if needed
comments_df.to_csv('comments.csv', index=False)
```

#### Explanation

1. **Define URL and Parameters**: The search URL and parameters are defined to search for posts with the keyword "love". We limit the results to one post and select only the title and user ID.
2. **Make GET Request**: A GET request is sent to the search URL with the defined parameters. The response is checked for success (status code 200).
3. **Parse JSON Response**: The JSON response is parsed to retrieve the posts data. If no posts are found, a message is printed, and the script exits.
4. **Retrieve Comments**: Using the post ID of the first post found, another GET request is sent to fetch comments. The response is again checked for success.
5. **Convert to DataFrame**: The comments data is converted to a DataFrame using `pandas`.
6. **Output and Save Data**: The post title and comments DataFrame are printed. The DataFrame is also saved to a CSV file for further analysis.
