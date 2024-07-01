---
layout: lessons
title: Making HTTP Requests with Python
---

## Lesson Aims
- Understand the basics of web protocols.
- Learn about the structure of HTTP requests and responses.
- Get familiar with HTTP methods, URL structure, headers, and status codes.
- Introduce the Requests library for making HTTP requests in Python.

## Understanding Web Protocols

### HTTP and HTTPS
HTTP (Hypertext Transfer Protocol) and HTTPS (HTTP Secure) are protocols used for
transferring data over the web. HTTP is the foundation of any data exchange on the web
and a protocol used for transmitting hypertext.

#### Differences between HTTP and HTTPS:
- **HTTP**: Data is sent in plain text.
- **HTTPS**: Data is encrypted using SSL/TLS, providing a secure channel.

### Structure of HTTP Requests and Responses

#### HTTP Request
An HTTP request consists of the following components:
1. **Request Line**: Indicates the HTTP method, URL, and HTTP version.
2. **Headers**: Provide metadata about the request (e.g., `Content-Type`, `User-Agent`).
3. **Body**: Contains the data being sent to the server (optional).

#### Example of an HTTP Request:

```plaintext
GET /index.html HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0
Accept: text/html
```

#### HTTP Response
An HTTP response consists of the following components:
1. **Status Line**: Includes the HTTP version, status code, and reason phrase.
2. **Headers**: Provide metadata about the response (e.g., `Content-Type`, `Content-Length`).
3. **Body**: Contains the data returned by the server (optional).

#### Example of an HTTP Response:

```plaintext
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 137

<!DOCTYPE html>
<html>
<head>
    <title>Example</title>
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>
```

### HTTP Methods
HTTP methods define the action to be performed on a resource.

#### Common HTTP Methods:
- **GET**: Retrieve data from the server.
- **POST**: Send data to the server.
- **PUT**: Update a resource on the server.
- **DELETE**: Remove a resource from the server.
- **HEAD**: Retrieve the headers for a resource, similar to GET but without the response body.
- **OPTIONS**: Describe the communication options for the target resource.

### URL Structure
A URL (Uniform Resource Locator) specifies the address of a resource on the web.

#### Components of a URL:

```
https://www.example.com:8080/path/to/resource?query=param#fragment
```

- **Scheme**: `https`
- **Host**: `www.example.com`
- **Port**: `8080` (optional, defaults are 80 for HTTP and 443 for HTTPS)
- **Path**: `/path/to/resource`
- **Query**: `query=param` (optional, for sending data to the server)
- **Fragment**: `fragment` (optional, refers to a section within the resource)

### HTTP Headers
HTTP headers provide additional information about the request or response.

#### Common HTTP Headers:
- **Content-Type**: Indicates the media type of the resource.
- **Authorization**: Contains credentials for authentication.
- **User-Agent**: Contains information about the client making the request.
- **Accept**: Specifies the media types that the client is willing to receive.
- **Cache-Control**: Directives for caching mechanisms in both requests and responses.

### HTTP Status Codes
HTTP status codes indicate the result of the HTTP request.

#### Categories of HTTP Status Codes:
- **1xx (Informational)**: Request received, continuing process.
- **2xx (Success)**: The action was successfully received, understood, and accepted.
    - **200 OK**: The request was successful.
    - **201 Created**: The request was successful, and a resource was created.
- **3xx (Redirection)**: Further action needs to be taken to complete the request.
    - **301 Moved Permanently**: The resource has been permanently moved to a new URL.
    - **302 Found**: The resource has been temporarily moved to a different URL.
- **4xx (Client Error)**: The request contains bad syntax or cannot be fulfilled.
    - **400 Bad Request**: The server could not understand the request.
    - **401 Unauthorized**: Authentication is required.
    - **403 Forbidden**: The server understands the request but refuses to authorize it.
    - **404 Not Found**: The requested resource could not be found.
- **5xx (Server Error)**: The server failed to fulfill an apparently valid request.
    - **500 Internal Server Error**: An error occurred on the server.
    - **502 Bad Gateway**: The server received an invalid response from the upstream server.
    - **503 Service Unavailable**: The server is currently unable to handle the request.

Understanding these fundamental concepts will prepare you to use the `requests` library
effectively for web data gathering.

## Using the `requests` Library

The `requests` library is a powerful and user-friendly Python library designed to handle HTTP requests.
It simplifies the process of making HTTP requests to interact with web resources such as APIs, websites, and web services.
Here's why it's widely used:

### Key Features of the `requests` Library
- **Simple and Intuitive Syntax**: `requests` provides a straightforward way to send HTTP requests without dealing 
with complex configurations or boilerplate code.
- **Support for HTTP Methods**: It supports all HTTP methods (GET, POST, PUT, DELETE, etc.), allowing comprehensive 
- interaction with web resources.
- **Handling Responses**: `requests` makes it easy to access response data, headers, status codes, and other metadata.
- **Session Handling**: It can maintain session information, enabling multiple requests to be made while preserving 
- certain parameters.
- **Error Handling**: Built-in support for handling HTTP errors, timeouts, and exceptions, ensuring robust and reliable code.
- **Compatibility**: Works seamlessly with various types of web resources, including JSON APIs, XML services, and HTML pages.

### Use Cases
- **Web Scraping**: Extract data from web pages by sending HTTP requests and parsing the responses.
- **API Interaction**: Communicate with web APIs to retrieve or send data, such as querying databases, posting updates,
or accessing remote services.
- **Automation**: Automate repetitive tasks like form submissions, data retrieval, and web interactions.
- **Testing**: Simulate HTTP requests to test web applications, services, and endpoints.

The `requests` library is an essential tool for any Python programmer working with web data,
making it a crucial component in web scraping, data gathering, and API interactions.

### Note: What is an API?
An API (Application Programming Interface) is a set of rules and protocols for building and interacting with software
applications. Unlike regular URL requests that retrieve web pages for human consumption, API requests are designed to
facilitate interaction between different software systems, enabling them to exchange data and perform operations
programmatically. We will introduce APIs in more detail in future lessons.

## How to Install and Import the `requests` Library

### Installing the `requests` Library
To use the `requests` library in Python, you first need to install it. The `requests` library can be installed using `pip`, which is the package installer for Python. Open your terminal or command prompt and run the following command:

```sh
pip install requests
```

If you are using Jupyter Notebooks, you can install the library directly within a notebook cell:

```python
!pip install requests
```

This ensures that you are ready to start making HTTP requests using the `requests` library in your Python projects.

## Performing Basic GET Requests with `requests`

In this section, we will cover the essentials of performing basic GET
requests using `requests`.

### Making a Basic GET Request
A GET request is a type of HTTP request method used to retrieve data from a specified resource on a web server. 
When a client, such as a web browser or a Python script, sends a GET request to a server, it asks for a particular 
resource, such as a web page, an image, or data from an API. The server processes this request and responds with the
requested data, typically in the form of an HTML page, JSON, XML, or other formats. GET requests are read-only and
do not alter the state of the server, making them ideal for fetching and displaying data without making any 
modifications to the resource. They are commonly used in web applications to retrieve data for display purposes or to
interact with web APIs.

Let's start with a simple GET request using `httpbin`, a free service for testing HTTP requests.

```python
response = requests.get('https://httpbin.org/get')
print(response.status_code)
print(response.text)
```

### Example Breakdown
1. **Send the GET request:**
    ```python
    response = requests.get('https://httpbin.org/get')
    ```
    This sends an HTTP GET request to `https://httpbin.org/get`.

2. **Check the response status code:**
    ```python
    print(response.status_code)
    ```
    A status code of `200` indicates that the request was successful.

3. **Print the response text:**
    ```python
    print(response.text)
    ```
    This will display the body of the response, which is typically in JSON format.

### Handling JSON Response
Often, the response from a GET request will be in JSON format. 
You can use the `.json()` method to parse the JSON response directly into a Python dictionary.

```python
response = requests.get('https://httpbin.org/get')
data = response.json()
print(data)
```

### Example Breakdown
1. **Send GET request:**
    ```python
    response = requests.get('https://httpbin.org/get')
    ```
2. **Parse JSON response:**
    ```python
    data = response.json()
    ```
3. **Print the parsed data:**
    ```python
    print(data)
    ```

### Sending Parameters in a GET Request
You can send parameters in a GET request by using the `params` parameter.
This allows you to include query parameters in your request URL.

```python
params = {'key1': 'value1', 'key2': 'value2'}
response = requests.get('https://httpbin.org/get', params=params)
print(response.url)
print(response.json())
```

### Example Breakdown
1. **Define parameters:**
    ```python
    params = {'key1': 'value1', 'key2': 'value2'}
    ```
2. **Send GET request with parameters:**
    ```python
    response = requests.get('https://httpbin.org/get', params=params)
    ```
    This sends a GET request to `https://httpbin.org/get?key1=value1&key2=value2`.

3. **Print the final URL and JSON response:**
    ```python
    print(response.url)
    print(response.json())
    ```

### Handling Response Headers
You can access the response headers using the `.headers` attribute. Response headers provide metadata about the response.

```python
response = requests.get('https://httpbin.org/get')
print(response.headers)
```

### Example Breakdown
1. **Send GET request:**
    ```python
    response = requests.get('https://httpbin.org/get')
    ```
2. **Print response headers:**
    ```python
    print(response.headers)
    ```

### Checking the Response Content
You can check the type of content returned by the server using the `Content-Type` header.

```python
response = requests.get('https://httpbin.org/get')
content_type = response.headers['Content-Type']
print(content_type)
```

### Handling Different Content Types
Depending on the `Content-Type`, you might need to handle the response differently:

#### JSON Content
```python
if 'application/json' in content_type:
    data = response.json()
    print(data)
```

#### Plain Text Content
```python
elif 'text/plain' in content_type:
    text = response.text
    print(text)
```

### Checking the Response Encoding
The `.encoding` attribute shows the encoding used to decode the response content. If it's incorrect, you can change it.

```python
print(response.encoding)
response.encoding = 'utf-8'
```

### Saving Response Content to a File
To save the response content to a file, use the `.content` attribute.

```python
response = requests.get('https://httpbin.org/image/png')
with open('image.png', 'wb') as file:
    file.write(response.content)
```

### Example Breakdown
1. **Send GET request for an image:**
    ```python
    response = requests.get('https://httpbin.org/image/png')
    ```
2. **Save the response content to a file:**
    ```python
    with open('image.png', 'wb') as file:
        file.write(response.content)
    ```

## Checking Status Codes with `requests`

To demonstrate handling status codes, we'll use the `httpbin` service, which provides a simple and robust set of endpoints to test HTTP requests.

#### Example: Checking a Successful Request

```python
import requests

response = requests.get('https://httpbin.org/status/200')
print(f'Status Code: {response.status_code}')
```

**Output:**

```plaintext
Status Code: 200
```

#### Example: Handling a Client Error

```python
response = requests.get('https://httpbin.org/status/404')
print(f'Status Code: {response.status_code}')

if response.status_code == 404:
    print('Error: Resource not found.')
```

**Output:**

```plaintext
Status Code: 404
Error: Resource not found.
```

### Using the `raise_for_status` Method

The `raise_for_status` method of the `Response` object will raise an HTTPError if the HTTP request returned an unsuccessful status code.

#### Example:

```python
try:
    response = requests.get('https://httpbin.org/status/500')
    response.raise_for_status()
except requests.exceptions.HTTPError as err:
    print(f'HTTP error occurred: {err}')
```

**Output:**

```plaintext
HTTP error occurred: 500 Server Error: INTERNAL SERVER ERROR for url: https://httpbin.org/status/500
```

Handling status codes effectively allows you to create robust applications
that can respond appropriately to different outcomes of HTTP requests.
The `requests` library provides straightforward methods to check and handle
these status codes.

### Common Exceptions

Here are some of the most common exceptions raised by the `requests` library and how to handle them:

#### 1. `requests.exceptions.RequestException`
This is the base class for all exceptions raised by the `requests` library. It can be used to catch any `requests` exception.

```python
import requests

try:
    response = requests.get('https://httpbin.org/status/404')
    response.raise_for_status()
except requests.exceptions.RequestException as e:
    print(f'Request error: {e}')
```

#### 2. `requests.exceptions.HTTPError`
Raised when an HTTP error occurs, i.e., the response status code is not successful (not 200-299).

```python
try:
    response = requests.get('https://httpbin.org/status/500')
    response.raise_for_status()
except requests.exceptions.HTTPError as e:
    print(f'HTTP error occurred: {e}')
```

#### 3. `requests.exceptions.ConnectionError`
Raised when a connection error occurs, such as a DNS failure, refused connection, etc.

```python
try:
    response = requests.get('https://nonexistent.url')
except requests.exceptions.ConnectionError as e:
    print(f'Connection error occurred: {e}')
```

#### 4. `requests.exceptions.Timeout`
Raised when a request times out.

```python
try:
    response = requests.get('https://httpbin.org/delay/5', timeout=2)
except requests.exceptions.Timeout as e:
    print(f'Timeout error occurred: {e}')
```

#### 5. `requests.exceptions.TooManyRedirects`
Raised when a request exceeds the configured number of maximum redirects.

```python
try:
    response = requests.get('https://httpbin.org/redirect/10')
except requests.exceptions.TooManyRedirects as e:
    print(f'Too many redirects: {e}')
```

### Handling Other HTTP Methods

In addition to GET requests, the `requests` library supports other HTTP methods such as POST, PUT, and DELETE. Here are examples of how to use these methods.

### POST Requests

A POST request is used to send data to the server to create or update a resource. The data is included in the body of the request.

```python
url = 'https://httpbin.org/post'
data = {'key1': 'value1', 'key2': 'value2'}

response = requests.post(url, data=data)
print(response.status_code)
print(response.json())
```

### PUT Requests

A PUT request is used to update a resource on the server. Similar to POST, the data is included in the body of the request.

```python
url = 'https://httpbin.org/put'
data = {'key1': 'value1', 'key2': 'value2'}

response = requests.put(url, data=data)
print(response.status_code)
print(response.json())
```

### DELETE Requests

A DELETE request is used to delete a resource on the server.

```python
url = 'https://httpbin.org/delete'
response = requests.delete(url)
print(response.status_code)
print(response.json())
```

### Authentication

Authentication is often required to access certain resources on the web. The `requests` library makes it easy to use various authentication methods.

### Basic Authentication

Basic Authentication is a simple authentication scheme built into the HTTP protocol.
It involves sending the username and password in the `Authorization` header.

```python
response = requests.get(
    "https://httpbin.org/basic-auth/user/passwd",
    auth=("user", "passwd")
)

print(response.status_code)
print(response.request.headers["Authorization"])
```

Output:
```plaintext
200
'Basic dXNlcjpwYXNzd2Q='
```

You could make the same request by passing explicit Basic authentication credentials using HTTPBasicAuth:

```python
from requests.auth import HTTPBasicAuth

url = 'https://httpbin.org/basic-auth/user/pass'
response = requests.get(url, auth=HTTPBasicAuth('user', 'pass'))

print(response.status_code)
print(response.json())
```

### Bearer Token Authentication

For requests that require the use token-based authentication, you can include the token in the `Authorization` header.

```python
url = 'https://httpbin.org/bearer'
headers = {'Authorization': 'Bearer YOUR_ACCESS_TOKEN'}

response = requests.get(url, headers=headers)
print(response.status_code)
print(response.json())
```

## Rate Limiting

Rate limiting is a mechanism used by web services to control the number of requests a client can make to the server within a specified time period. This helps prevent abuse, ensure fair usage, and protect the server from being overwhelmed.
Rate limits are typically enforced to manage traffic and resource usage. When a client exceeds the allowed number of requests, the server responds with a `429 Too Many Requests` status code, indicating that the client should slow down or wait before making more requests.

### Handling Rate Limits

To handle rate limits effectively, you should:

1. **Check Rate Limit Headers**: Many sites include rate limit information in the response headers. Common headers include:
    - `X-RateLimit-Limit`: The maximum number of requests allowed.
    - `X-RateLimit-Remaining`: The number of requests remaining in the current window.
    - `X-RateLimit-Reset`: The time when the rate limit will reset, typically expressed as a Unix timestamp.

2. **Implement Exponential Backoff**: If you receive a `429 Too Many Requests` response, you should wait for a period before retrying. Exponential backoff is a strategy where the wait time increases exponentially with each retry attempt.

3. **Respect Rate Limits**: Always adhere to the rate limits specified by the documentation to avoid being blocked or throttled.

### Example: Implementing Exponential Backoff

Here’s an example of implementing exponential backoff when handling rate limits, here we can use python control structures from lesson2 to implement this.

```python
import requests
import time

url = 'https://example.com/data'
max_retries = 5
backoff_factor = 1

for retry in range(max_retries):
    response = requests.get(url)
    
    if response.status_code == 429:
        # Get the retry-after value from the headers (if available)
        retry_after = int(response.headers.get('Retry-After', 1))
        wait_time = backoff_factor * (2 ** retry)
        print(f'Rate limit exceeded. Waiting for {wait_time} seconds.')
        time.sleep(wait_time)
    else:
        break

if response.status_code == 200:
    print('Request successful.')
    data = response.json()
    print(data)
else:
    print(f'Failed with status code: {response.status_code}')
```

By implementing rate limiting handling strategies, you can ensure your application interacts with web pages and APIs
in a respectful and efficient manner, avoiding disruptions and maintaining a smooth data gathering process.


## Practical Exercises

### Example 1: Basic GET Request

#### Question:
Send a basic GET request to the web page `https://httpbin.org` 
to retrieve the HTML content of the page. Print the HTML content from the html route.

**URL:** `https://httpbin.org/html`

Write the code to achieve this and print the HTML content.

#### Solution:
```python
import requests

url = 'https://httpbin.org/html'
response = requests.get(url)

# Print the HTML content
print(response.text)
```

#### Expected Output:
```html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
      <h1>Herman Melville - Moby-Dick</h1>

      <div>
        <p>
          Availing himself of the mild ...  
        </p>
      </div>
  </body>
</html>
```

---

### Example 2: GET Request with Parameters

### Question
Make a GET request to https://httpbin.org/get with parameters.
Print the response to show how the inputs were received.

### Solution
```python
import requests

# Define the URL for the GET request
url = "https://httpbin.org/get"

# Define the parameters to be sent in the GET request
params = {
    "name": "John",
    "age": 30,
    "city": "New York"
}

# Send the GET request with the parameters
response = requests.get(url, params=params)

# Print the response text to see the result
print(response.text)
```

### Explanation
1. **URL Definition**: We define the URL `https://httpbin.org/get` where the GET request will be sent.
2. **Parameters**: We create a dictionary `params` containing key-value pairs to be sent as parameters in the GET request.
3. **GET Request**: We use `requests.get(url, params=params)` to send the GET request along with the parameters.
4. **Response**: The response from the server is printed, which includes the parameters we sent, demonstrating 
how they are incorporated into the request.


---

### Example 3: Checking Status Codes

#### Question:
Send a GET request to `https://httpbin.org/status/404` and check the status code of the response.
Print a message indicating whether the request was successful or not based on the status code.

**URL:** `https://httpbin.org/status/404`

#### Solution:
```python
import requests

url = 'https://httpbin.org/status/404'
response = requests.get(url)

# Check the status code and print a message
if response.status_code == 200:
    print('Request was successful!')
else:
    print(f'Request failed with status code: {response.status_code}')
```

#### Expected Output:
```plaintext
Request failed with status code: 404
```
