---
layout: lessons
title: Social Media APIs
---

## Lesson Aims
- Understand the use of APIs to gather data from social media platforms.
- Learn about the specific APIs for popular social media platforms.
- Be aware of the current restrictions and requirements for accessing social media data.
- Use Reddits API to gather data from a subreddit.

## Social Media APIs

In the previous lesson, we explored the basics of APIs, including how they function and the general principles behind using them to interact with web services. Building on that knowledge, we will now focus on social media APIs. Social media platforms are rich sources of data for various types of research, but accessing this data requires understanding each platform's specific API, permissions, and restrictions.

### Facebook Graph API

As of 2024, the Facebook Graph API's access to groups is significantly restricted. After various changes to Facebook's data policies and API permissions over the years, researchers typically face limitations:
- **Access to Group Data**: Access to group data, particularly from private groups, is heavily restricted. Public group data may be accessible but often requires explicit permissions from group administrators and adherence to Facebook's data usage policies.
- **API Permissions**: Access to certain endpoints, like those for groups, requires app review and explicit permissions, which are not guaranteed. Researchers must ensure their use case aligns with Facebook's terms of service.

### Meta's SOMAR and FORT

Meta has introduced new tools to support data access for research purposes:
- **SOMAR (Social Media Analytics for Research)**: SOMAR provides aggregated and anonymised insights from across Meta’s platforms, focusing on trends and patterns without exposing individual user data. This tool is designed to balance data access with privacy concerns.
  - [SOMAR Info](https://transparency.meta.com/en-gb/researchtools/meta-content-library/)
  - [Access](https://developers.facebook.com/docs/content-library-and-api/get-access)
- **FORT (Facebook Open Research Toolkit)**: FORT offers a set of tools and resources to assist researchers in accessing and analysing Facebook data ethically and effectively. This toolkit emphasises compliance with data usage policies and facilitates research by providing structured and documented access methods.

### Twitter API

The Twitter API has undergone significant changes, especially following the acquisition by Elon Musk:
[X Developer HUB](https://developer.x.com/en/portal/dashboard)
- **Free Access**: As of 2024, free access to the Twitter API is extremely limited. Most endpoints, especially those providing comprehensive data access, require a paid subscription.
- **Academic Research Track**: Twitter offers an Academic Research product track that provides enhanced access to data, but this is also a paid service. Researchers need to apply and be approved to gain this access.
- There are a number of python packages that can be used to interact with the Twitter API, such as `tweepy` and `python-twitter` but these require API keys to be set up and for the user to have a developer account with Twitter. You will have to go through the application process to get access to the API and subscribe to a paid plan.

### Reddit API

Reddit is a popular platform for discussions and content sharing, making it a valuable source of data for various research topics. The Reddit API provides access to a wide range of content, including posts, comments, and user information. Here are some key points to consider when using the Reddit API:
- **API Documentation**: The official Reddit API documentation provides detailed information on endpoints, authentication, and usage guidelines.
  - [Reddit API Docs](https://www.reddit.com/dev/api/)
- **Authentication**: To access the Reddit API, you need to create a Reddit app and obtain credentials, including a client ID, client secret, username, password, and user agent.
- **Python Libraries**: There are several Python libraries, such as `praw` and `reddit2text`, that simplify interactions with the Reddit API and provide easy access to content.
- **Data Access**: The Reddit API allows you to retrieve posts, comments, user information, and other data from subreddits and individual users. You can filter content based on various criteria and perform analyses on the retrieved data.
- **Rate Limits**: Reddit imposes rate limits on API requests to prevent abuse and ensure fair usage. Be mindful of these limits when making requests to avoid being blocked or restricted.
- **Pricing**: Access to the Reddit API is free, but you need to adhere to Reddit's terms of service and API guidelines. Commercial use of the API may require additional permissions and compliance with Reddit's policies.


## Accessing the Reddit API

We will explore the Reddit API, a real-world social media API, and build a script to fetch data from Reddit.
This lesson builds upon our previous knowledge of APIs and making requests, such as our work with dummyjson.
By the end of this lesson, you will be able to create a Reddit app, authenticate with the Reddit API,
and fetch data from a subreddit.

To obtain the necessary credentials to use the Reddit API, you need to create a Reddit application and generate the required keys. Here are the steps to obtain the `client_id`, `client_secret`, `password`, `user_agent`, and `username`:

For steps 2 and 3 see the [This useful tutorial](https://scribehow.com/shared/Create_your_Reddit_API_app_and_obtain_your_creds__sanm5Eo2Q_iudzfhFZLKJg).

1. **Create a Reddit Account**:
   - If you don’t already have a Reddit account, create one at [reddit.com](https://www.reddit.com/register).

2. **Create a Reddit App**:
   - Log in to your Reddit account.
   - Go to [Reddit Apps](https://www.reddit.com/prefs/apps).
   - Scroll down to the "Developed Applications" section and click on "Create App" or "Create Another App."

3. **Fill Out the App Creation Form**:
   - **Name**: Choose a name for your application.
   - **App Type**: Select "script" (this is for personal use).
   - **Description**: Optional.
   - **About URL**: Optional.
   - **Redirect URI**: Set it to `http://localhost:8000` (this can be any valid URL, it's not used in script applications).
   - **Permissions**: You don't need to set permissions for script apps.
   - Click on "Create app."

4. **Get the Credentials**:
   - After creating the app, you will see your new app listed under "Developed Applications."
   - **client_id**: This is the string just below the app's name and "personal use script" (e.g., "abc123").
   - **client_secret**: This is the string labeled "secret" (e.g., "xyz789").
   - **username**: Your Reddit account username.
   - **password**: Your Reddit account password.
   - **user_agent**: A unique identifier for your app. This should be a string that follows the format `app_name:version (by /u/your_username)` (e.g., `my_reddit_app:1.0 (by /u/myusername)`).

## Using the Reddit API

we will build a Python script to fetch the top posts from a Reddit subreddit using the Reddit API.
This will involve using the `requests` library, which you should already be familiar with.
We will also introduce the `requests.auth.HTTPBasicAuth` class to handle authentication.

### Step 1: Importing Required Libraries

First, we need to import the required libraries. We will use `requests` for making HTTP requests and `pandas` for handling the responses data.

```python
import requests
import pandas as pd
```

### Step 2: Setting Up Parameters

Next, we will set up the required parameters for authentication and making requests.

```python
client_id = 'YOUR_CLIENT_ID'
client_secret = 'YOUR_CLIENT_SECRET'
username = 'YOUR_USERNAME'
password = 'YOUR_PASSWORD'
user_agent = 'YOUR_USER_AGENT'
```

### Step 3: Authenticating with Reddit API

Reddit uses OAuth2 for authentication. We need to obtain an access token using our credentials. Here, we introduce `requests.auth.HTTPBasicAuth`, which simplifies the process of adding HTTP Basic Authentication headers to our request.

#### Understanding `requests.auth.HTTPBasicAuth`

`requests.auth.HTTPBasicAuth` is a class that allows you to send HTTP Basic Auth headers in your requests. It takes two arguments: the username and password (in this case, the `client_id` and `client_secret`).

```python
auth = requests.auth.HTTPBasicAuth(client_id, client_secret)
```

### Obtaining the Access Token

To obtain the access token, we need to send a POST request to the Reddit API endpoint `https://www.reddit.com/api/v1/access_token`. We will pass the authentication headers, data, and user agent.

```python
data = {
    'grant_type': 'password',
    'username': username,
    'password': password
}
headers = {'User-Agent': user_agent}

response = requests.post('https://www.reddit.com/api/v1/access_token', auth=auth, data=data, headers=headers)
token = response.json()['access_token']
```

### Step 4: Making an Authenticated Request

With the access token, we can make authenticated requests to the Reddit API. We will include the token in the Authorisation header.

### Setting Up Headers

```python
headers['Authorization'] = f'bearer {token}'
```

### Fetching Top Posts

We will now fetch the top posts from a subreddit (e.g., `python`). We make a GET request to the endpoint `https://oauth.reddit.com/r/{subreddit}/top` with the necessary headers and parameters.

```python
subreddit = 'python'
response = requests.get(f'https://oauth.reddit.com/r/{subreddit}/top', headers=headers, params={'limit': 5})
```

### Step 5: Parsing and Displaying the Data

Finally, we parse the JSON response to extract the titles of the top posts and print them.

```python
posts = response.json()['data']['children']

for post in posts:
    print(post['data']['title'])
```

### Step 6: Converting the data to a dataframe and saving to csv

We can convert the data to a pandas dataframe and save it to a csv file.

```python
# Extract relevant data and convert to DataFrame
post_list = []
for post in posts:
    post_data = post['data']
    post_list.append({
        'post_id': post_data['id'],
        'title': post_data['title'],
        'author': post_data['author'],
        'score': post_data['score'],
        'subreddit': post_data['subreddit'],
        'url': post_data['url'],
        'num_comments': post_data['num_comments'],
        'created_utc': post_data['created_utc']
    })

df = pd.DataFrame(post_list)

# Save DataFrame to CSV
df.to_csv('reddit_posts.csv', index=False)
```


### Complete Script so far:

Here is the complete script:

```python
import requests

# Set up the required parameters
client_id = 'YOUR_CLIENT_ID'
client_secret = 'YOUR_CLIENT_SECRET'
username = 'YOUR_USERNAME'
password = 'YOUR_PASSWORD'
user_agent = 'YOUR_USER_AGENT'

# Obtain the access token
auth = requests.auth.HTTPBasicAuth(client_id, client_secret)
data = {
    'grant_type': 'password',
    'username': username,
    'password': password
}
headers = {'User-Agent': user_agent}

response = requests.post('https://www.reddit.com/api/v1/access_token', auth=auth, data=data, headers=headers)
token = response.json()['access_token']

# Set up the headers with the access token
headers['Authorization'] = f'bearer {token}'

# Make a request to get the top posts from a subreddit
subreddit = 'python'
response = requests.get(f'https://oauth.reddit.com/r/{subreddit}/top', headers=headers, params={'limit': 5})

# Parse the JSON response
posts = response.json()['data']['children']

for post in posts:
    print(post['data']['title'])
    
# Extract relevant data and convert to DataFrame
post_list = []
for post in posts:
    post_data = post['data']
    post_list.append({
        'post_id': post_data['id'],
        'title': post_data['title'],
        'author': post_data['author'],
        'score': post_data['score'],
        'subreddit': post_data['subreddit'],
        'url': post_data['url'],
        'num_comments': post_data['num_comments'],
        'created_utc': post_data['created_utc']
    })

df = pd.DataFrame(post_list)

# Save DataFrame to CSV
df.to_csv('reddit_posts.csv', index=False)

```

Feel free to experiment with different subreddits and parameters.

## Practical Exercise

### Exercise 1: Extending our code to fetch comments

This exercise brings together some of the concepts we have learned in previous lessons.

**Question:**

Extend the code to extract comments for the top post it should:
1. Construct the appropriate URL for fetching comments of a given post in a specified subreddit using Reddit's API.
2. Make an authenticated GET request to the Reddit API using the provided `headers` (which include the OAuth2 authorisation token).
3. Parse the JSON response to extract relevant comment details (comment ID, author, body text, score, and creation time).
4. Return these details in a pandas DataFrame.

**Hints:**

1. **Constructing the URL:** Use string formatting to insert the `post_id` and `subreddit` into the URL template `https://oauth.reddit.com/r/{subreddit}/comments/{post_id}`.
2. **Making the GET request:** Use the `requests` library to send the GET request, and pass the `headers` to include the authorisation token.
3. **Parsing the JSON response:** The JSON response from Reddit's API will contain the comments data in a nested structure. The comments are in the second item of the JSON array.
4. **Extracting and organising data:** Loop through each comment to extract relevant details and store them in a list of dictionaries. Convert this list to a pandas DataFrame for easy manipulation and analysis.

**Solution:**

```python
# Sort the DataFrame by score in descending order
df.sort_values(by='score', ascending=False, inplace=True)

# Extract the first post ID
post_id = df.iloc[0]['post_id']

# Construct the URL for fetching comments of the specified post in the given subreddit.
# The URL follows the pattern defined by Reddit's API for accessing post comments.
url = f'https://oauth.reddit.com/r/{subreddit}/comments/{post_id}'

# Make an authenticated GET request to the Reddit API to fetch comments.
# The `headers` include the authorisation token obtained during the OAuth2 process.
response = requests.get(url, headers=headers)

# Parse the JSON response from the API.
# The comments are located in the second item of the JSON array returned by the API.
# Hence, we access the second element with index 1.
comments_data = response.json()[1]['data']['children']

# Initialise an empty list to store the extracted comment details.
comments_list = []

# Loop through each comment in the comments_data.
# Each comment is a dictionary with various attributes.
for comment in comments_data:
  # Extract the relevant data for each comment.
  comment_data = comment['data']

  # Append a dictionary containing selected fields to the comments_list.
  # This includes the comment ID, author, body text, score (upvotes), and creation time.
  comments_list.append({
      'comment_id': comment_data['id'],
      'author': comment_data['author'],
      'body': comment_data['body'],
      'score': comment_data['score'],
      'created_utc': comment_data['created_utc']
  })

# Convert the list of dictionaries to a pandas DataFrame.
# This tabular format is convenient for further analysis and manipulation.
comments_df = pd.DataFrame(comments_list)

# Optionally, you can save the comments DataFrame to a CSV file for further processing.
comments_df.to_csv('reddit_comments.csv', index=False)
```

**Explanation:**

1. **Constructing the URL:** The URL for accessing the comments of a Reddit post follows a specific pattern. By using string formatting, we dynamically insert the `post_id` and `subreddit` values into this URL template.
   
2. **Making the GET request:** The function uses the `requests` library to send an authenticated GET request to the constructed URL. The `headers` parameter includes the OAuth2 authorisation token required for accessing the Reddit API.

3. **Parsing the JSON response:** The JSON response returned by the API contains nested structures. The comments data is located in the second item of the returned JSON array, accessible at index 1. We extract this part of the JSON response to get the comments data.

4. **Extracting and organising data:** The function initialises an empty list to store the comment details. It then iterates over each comment, extracting relevant fields (comment ID, author, body text, score, and creation time). These details are stored as dictionaries in the list.

5. **Creating the DataFrame:** The list of dictionaries is converted to a pandas DataFrame. This tabular format allows for convenient analysis and manipulation of the comment data.

6. **Returning the DataFrame:** The DataFrame containing the comment details is returned, making it easy to analyze or further process the comments data.