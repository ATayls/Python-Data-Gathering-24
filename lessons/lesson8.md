---
layout: lessons
title: Data processing and cleaning
---

## Lesson Aims
- Understand the importance of data processing and cleaning.
- Learn how to clean and preprocess data using Python libraries.
- Store the cleaned data in different formats.

## Introduction to Pandas and DataFrames

### What is Pandas?
Pandas is a powerful and flexible open-source data analysis and manipulation library for Python.
It provides data structures and functions needed to manipulate structured data seamlessly.
Pandas is particularly well-suited for working with tabular data, like data obtained from spreadsheets, CSV files,
or data gathered from web the web.

### DataFrames
A DataFrame is the core data structure in Pandas. It is a two-dimensional, size-mutable,
and potentially heterogeneous tabular data structure with labeled axes (rows and columns).
Think of a DataFrame as an in-memory spreadsheet, but with much more functionality and flexibility.

### Basic DataFrame Operations

#### Creating a DataFrame
DataFrames can be created from various data sources, including lists, dictionaries, and external data files (e.g., CSV, Excel).
We can create a DataFrame from a dictionary as follows:

```python
import pandas as pd

# Creating a DataFrame from a dictionary
data = {
    'Name': ['Alice', 'Bob', 'Charlie'],
    'Age': [25, 30, 35],
    'City': ['New York', 'Los Angeles', 'Chicago']
}

df = pd.DataFrame(data)
print(df)
```
Output Table:

| Name    | Age | City       |
|---------|-----|------------|
| Alice   | 25  | New York   |
| Bob     | 30  | Los Angeles|
| Charlie | 35  | Chicago    |


#### Load a list of dictionaries into a DataFrame
You can also load a list of dictionaries into a DataFrame.

```python
data = [
    {'Title': 'To Kill a Mockingbird', 'Author': 'Harper Lee', 'Year': 1960},
    {'Title': '1984', 'Author': 'George Orwell', 'Year': 1949},
    {'Title': 'Moby Dick', 'Author': 'Herman Melville', 'Year': 1851},
    {'Title': 'Animal Farm', 'Author': 'George Orwell', 'Year': 1945}
]

df = pd.DataFrame(data)
print(df)
```

Output Table:

| Title                 | Author          | Year |
|-----------------------|-----------------|------|
| To Kill a Mockingbird | Harper Lee      | 1960 |
| 1984                  | George Orwell   | 1949 |
| Moby Dick             | Herman Melville | 1851 |
| Animal Farm           | George Orwell   | 1945 |


## Extract our data

For the purposes of this lesson we will extract some data from http://books.toscrape.com/

Using the following code with beautifulsoup and requests

```python
import requests
import pandas as pd
from bs4 import BeautifulSoup

# Fetch the webpage
url = "http://books.toscrape.com/"
response = requests.get(url)
book_list = []
if response.status_code == 200:
    soup = BeautifulSoup(response.content, 'html.parser')
    books = soup.find_all('article', class_='product_pod')
    for book in books:
        title = book.h3.a['title']
        price = book.find('p', class_='price_color').get_text()
        availability = book.find('p', class_='instock availability').get_text(strip=True)
        rating = book.p['class'][1]
        book_list.append({'title': title, 'price': price, 'availability': availability, 'rating': rating})
else:
    print(f"Failed to retrieve the page. Status code: {response.status_code}")

# Convert the data to a DataFrame
df = pd.DataFrame(book_list)
print(books_df)
```

Output Table:

|    | title                                                                                               | price | availability | rating |
|----|-----------------------------------------------------------------------------------------------------|-------|--------------|--------|
|  0 | A Light in the Attic                                                                                | £51.77| In stock     | Three  |
|  1 | Tipping the Velvet                                                                                  | £53.74| In stock     | One    |
|  2 | Soumission                                                                                          | £50.10| In stock     | One    |
|  3 | Sharp Objects                                                                                       | £47.82| In stock     | Four   |
|  4 | Sapiens: A Brief History of Humankind                                                               | £54.23| In stock     | Five   |
|  5 | The Requiem Red                                                                                     | £22.65| In stock     | One    |
|  6 | The Dirty Little Secrets of Getting Your Dream Job                                                  | £33.34| In stock     | Four   |
|  7 | The Coming Woman: A Novel Based on the Life of the Infamous Feminist, Victoria Woodhull             | £17.93| In stock     | Three  |
|  8 | The Boys in the Boat: Nine Americans and Their Epic Quest for Gold at the 1936 Berlin Olympics       | £22.60| In stock     | Four   |
|  9 | The Black Maria                                                                                    | £52.15| In stock     | One    |
| 10 | Starving Hearts (Triangular Trade Trilogy, #1)                                                      | £13.99| In stock     | Two    |
| 11 | Shakespeare's Sonnets                                                                               | £20.66| In stock     | Four   |
| 12 | Set Me Free                                                                                        | £17.46| In stock     | Five   |
| 13 | Scott Pilgrim's Precious Little Life (Scott Pilgrim #1)                                             | £52.29| In stock     | Five   |
| 14 | Rip it Up and Start Again                                                                           | £35.02| In stock     | Five   |
| 15 | Our Band Could Be Your Life: Scenes from the American Indie Underground, 1981-1991                   | £57.25| In stock     | Three  |
| 16 | Olio                                                                                               | £23.88| In stock     | One    |
| 17 | Mesaerion: The Best Science Fiction Stories 1800-1849                                              | £37.59| In stock     | One    |
| 18 | Libertarianism for Beginners                                                                        | £51.33| In stock     | Two    |
| 19 | It's Only the Himalayas                                                                             | £45.17| In stock     | Two    |



## Basic DataFrame Operations

#### Viewing the Data

- **First few rows:** To view the first few rows of the DataFrame, use the `head()` method.
  
  ```python
  print(df.head())
  ```

- **Last few rows:** To view the last few rows of the DataFrame, use the `tail()` method.

  ```python
  print(df.tail())
  ```

#### Accessing Columns

You can access a specific column in the DataFrame using the column name.

```python
titles = df['title']
print(titles)
```

#### Data Selection and Filtering

- **Selecting Rows:** You can select rows based on conditions.

  ```python
  # Select books with a rating of 'Five'
  high_rated_books = df[df['rating'] == 'Five']
  print(high_rated_books)
  ```

- **Selecting Specific Columns:** You can select multiple columns.

  ```python
  selected_columns = df[['title', 'price']]
  print(selected_columns)
  ```

#### Adding a New Column

You can add a new column to the DataFrame.

```python
# Adding a new column for price as a float
df['price_float'] = df['price'].str.replace('£', '').astype(float)
print(df)
```

#### Sorting Data

You can sort the DataFrame based on a column.

```python
# Sort by price
sorted_df = df.sort_values(by='price_float')
print(sorted_df)
```

### Selecting Rows and Columns

Pandas offers powerful tools for selecting data from DataFrames. This includes selecting specific rows, columns, or a combination of both.

#### Selecting Rows

You can select rows using the `iloc` and `loc` methods:

- **Using `iloc`:** Selects rows based on their integer position.

  ```python
  # Select the first row
  first_row = df.iloc[0]
  print(first_row)
  
  # Select the first three rows
  first_three_rows = df.iloc[:3]
  print(first_three_rows)
  ```

- **Using `loc`:** Selects rows based on label or a boolean array.

  ```python
  # Select rows where the rating is 'Five'
  high_rated_books = df.loc[df['rating'] == 'Five']
  print(high_rated_books)
  ```

#### Selecting Columns

You can select columns by specifying their names:

- **Single Column:**

  ```python
  titles = df['title']
  print(titles)
  ```

- **Multiple Columns:**

  ```python
  titles_and_prices = df[['title', 'price']]
  print(titles_and_prices)
  ```

#### Selecting Rows and Columns Together

You can combine `iloc` and `loc` to select specific rows and columns:

- **Using `iloc`:**

  ```python
  # Select first three rows and first two columns
  subset = df.iloc[:3, :2]
  print(subset)
  ```

- **Using `loc`:**

  ```python
  # Select rows where rating is 'Four' and only the 'title' and 'price' columns
  specific_subset = df.loc[df['rating'] == 'Four', ['title', 'price']]
  print(specific_subset)
  ```

### Examples

Let's look at some practical examples using our DataFrame:

1. **Selecting Specific Rows and Columns with Conditions:**

    ```python
    # Books with a price greater than £50 and rating of 'Five'
    df['price_float'] = df['price'].str.replace('£', '').astype(float)
    expensive_high_rated_books = df.loc[(df['price_float'] > 50) & (df['rating'] == 'Five'), ['title', 'price']]
    print(expensive_high_rated_books)
    ```

2. **Selecting a Range of Rows and Specific Columns:**

    ```python
    # Select rows from index 2 to 5 and columns 'title' and 'availability'
    range_selection = df.loc[2:5, ['title', 'availability']]
    print(range_selection)
    ```

3. **Boolean Indexing:**

    ```python
    # Select rows where the price is less than £30
    cheap_books = df.loc[df['price_float'] < 30]
    print(cheap_books)
    ```

## Data Cleaning and merging.

### Merging DataFrames

Merging DataFrames is a common operation in data analysis, allowing you to combine data from different sources.

#### Creating Additional DataFrames

Let's create an additional DataFrame that we will merge with our original DataFrame. This DataFrame contains additional information about some of the books, with some duplicate entries and missing data.

```python
additional_data = {
    'title': [
        'A Light in the Attic', 'Tipping the Velvet', 'Sapiens: A Brief History of Humankind', 
        'The Requiem Red', 'The Dirty Little Secrets of Getting Your Dream Job', 
        'Olio', 'Libertarianism for Beginners', 'Unknown Title'
    ],
    'genre': [
        'Poetry', 'Historical Fiction', 'Non-Fiction', 
        'Fantasy', 'Career', 'Poetry', 'Politics', None
    ],
    'author': [
        'Shel Silverstein', 'Sarah Waters', 'Yuval Noah Harari', 
        'J. Lynn Bailey', 'Donald Asher', 'Tyehimba Jess', 'Jason Brennan', None
    ]
}

additional_df = pd.DataFrame(additional_data)

# Display the additional DataFrame
print(additional_df)
```

#### Performing the Merge

We will merge the original DataFrame with the additional DataFrame based on the 'title' column.

```python
# Merging the DataFrames
merged_df = pd.merge(df, additional_df, on='title', how='left')

# Display the merged DataFrame
print(merged_df)
```

### Handling Duplicates

Duplicate entries can skew analysis and need to be addressed.

#### Identifying Duplicates

Use the `duplicated()` method to find duplicate rows.

```python
# Check for duplicates
duplicates = merged_df[merged_df.duplicated()]
print(duplicates)
```

#### Removing Duplicates

Use the `drop_duplicates()` method to remove duplicate rows.

```python
# Remove duplicates
merged_df = merged_df.drop_duplicates()

# Display the DataFrame after removing duplicates
print(merged_df)
```

### Handling Missing Data

Missing data is a common issue in real-world datasets. Pandas provides several methods to handle missing data.

#### Identifying Missing Data

Use the `isnull()` method to identify missing values.

```python
# Check for missing data
missing_data = merged_df.isnull().sum()
print(missing_data)
```

#### Filling Missing Data

Use the `fillna()` method to fill missing values. 

```python
# Fill missing values in 'genre' and 'author' with 'Unknown'
merged_df['genre'] = merged_df['genre'].fillna('Unknown')
merged_df['author'] = merged_df['author'].fillna('Unknown')

# Display the DataFrame after filling missing values
print(merged_df)
```

#### Dropping Missing Data

Alternatively, you can drop rows with missing values using the `dropna()` method.

```python
# Drop rows with any missing values
cleaned_df = merged_df.dropna()

# Display the cleaned DataFrame
print(cleaned_df)
```

### Data Cleaning Operations

Data cleaning is an essential step in data preprocessing. Let's perform some additional cleaning operations.

#### Standardising Text Data

Convert text data to a consistent format, such as lowercase, to ensure uniformity.

```python
# Convert 'title' and 'author' columns to lowercase
merged_df['title'] = merged_df['title'].str.lower()
merged_df['author'] = merged_df['author'].str.lower()

# Display the DataFrame after standardising text
print(merged_df)
```

#### Removing Unnecessary Characters

Remove unnecessary characters from text data.

```python
# Remove the '£' sign from 'price' and convert to float
merged_df['price'] = merged_df['price'].str.replace('£', '').astype(float)

# Display the DataFrame after cleaning the 'price' column
print(merged_df)
```

#### Renaming Columns

Rename columns to more meaningful names if necessary.

```python
# Rename columns
merged_df = merged_df.rename(columns={'title': 'book_title', 'author': 'book_author'})

# Display the DataFrame after renaming columns
print(merged_df)
```

## Data Storage Formats

### Overview of Different Storage Formats

#### CSV, JSON, SQL Databases, NoSQL Databases

- **CSV**: Simple, human-readable, widely supported.
- **JSON**: Lightweight, supports nested data, language-independent.
- **SQL Databases**: Structured, supports complex queries, ACID compliance.
- **NoSQL Databases**: Flexible schemas, scalability, suitable for unstructured data.

## Storing Data

### Writing Data to CSV Files

#### Using Pandas to_csv() Method

```python
df.to_csv('books.csv', index=False)
```

### Reading Data from CSV Files


```python
df_from_csv = pd.read_csv('books.csv')
print(df_from_csv.head())
```

### Writing Data to JSON Files

```python
import json

# Convert DataFrame to dictionary
books_dict = df.to_dict(orient='records')

# Write to JSON file
with open('books.json', 'w') as f:
    json.dump(books_dict, f)
```

#### Pandas to_json() Method

```python
df.to_json('books_pandas.json', orient='records', lines=True)
```


These are just a few examples of the advanced operations you can perform
with Pandas. There is a vast array of functions and methods available to handle your data.
For more detailed information and additional functionalities, 
refer to the [Pandas documentation](https://pandas.pydata.org/docs/).

## Practical Exercise

#### Example 1: Handle Movie Data

You have been given a new dataset containing information about various movies. Your task is to:

1. Create a DataFrame from the given data.
2. Clean the data by removing duplicates and handling missing values.
3. Add a new column that converts the ratings from string format (e.g., 'Five') to numeric format.
4. Select and display movies with a rating of 'Four' or higher.
5. Merge this DataFrame with another DataFrame containing additional movie information.
6. Store the cleaned and merged data into a CSV file.

The dataset is as follows:

```python
movie_data = [
    {'title': 'Inception', 'year': 2010, 'rating': 'Five'},
    {'title': 'Interstellar', 'year': 2014, 'rating': 'Four'},
    {'title': 'The Dark Knight', 'year': 2008, 'rating': 'Five'},
    {'title': 'Avatar', 'year': 2009, 'rating': 'Three'},
    {'title': 'Titanic', 'year': 1997, 'rating': 'Four'},
    {'title': 'Inception', 'year': 2010, 'rating': 'Five'}  # Duplicate row
]

additional_movie_data = {
    'title': ['Inception', 'Interstellar', 'The Dark Knight', 'Avatar', 'Titanic', 'The Matrix'],
    'genre': ['Sci-Fi', 'Sci-Fi', 'Action', 'Sci-Fi', 'Romance', 'Sci-Fi'],
    'director': ['Christopher Nolan', 'Christopher Nolan', 'Christopher Nolan', 'James Cameron', 'James Cameron', 'The Wachowskis']
}
```

### Hints

- Use `pd.DataFrame()` to create DataFrames.
- Use `drop_duplicates()` to remove duplicate rows.
- Use `fillna()` or `dropna()` to handle missing values.
- Create a mapping dictionary to convert string ratings to numeric values.
- Use `merge()` to combine DataFrames based on the 'title' column.
- Use `to_csv()` to store the DataFrame into a CSV file.

### Solution

```python
import pandas as pd

# Create the DataFrame from the given movie data
movie_df = pd.DataFrame(movie_data)
print(movie_df)

# Remove duplicate rows
movie_df = movie_df.drop_duplicates()

# Check for and handle missing values (if any)
movie_df = movie_df.fillna({'rating': 'Unknown', 'year': 0})
print(movie_df)

# Create a mapping dictionary for ratings
rating_mapping = {'One': 1, 'Two': 2, 'Three': 3, 'Four': 4, 'Five': 5}
movie_df['numeric_rating'] = movie_df['rating'].map(rating_mapping)
print(movie_df)

# Filter movies with a rating of 'Four' or higher
high_rated_movies = movie_df[movie_df['numeric_rating'] >= 4]
print(high_rated_movies)

# Create the additional movie DataFrame
additional_movie_df = pd.DataFrame(additional_movie_data)

# Merge the DataFrames on the 'title' column
merged_movie_df = pd.merge(movie_df, additional_movie_df, on='title', how='left')
print(merged_movie_df)

# Save the cleaned and merged DataFrame to a CSV file
merged_movie_df.to_csv('cleaned_merged_movies.csv', index=False)
```

### Explanation

1. **Creating the DataFrame:** The initial movie data is converted into a DataFrame using `pd.DataFrame()`.
2. **Cleaning the Data:** Duplicate rows are removed with `drop_duplicates()`, and missing values are handled using `fillna()`.
3. **Adding a Numeric Rating Column:** A new column for numeric ratings is added by mapping the string ratings to numeric values.
4. **Filtering High-Rated Movies:** Movies with a rating of 'Four' or higher are selected using a condition on the numeric rating column.
5. **Merging DataFrames:** The movie DataFrame is merged with an additional DataFrame containing more information about the movies, based on the 'title' column.
6. **Storing Data:** The cleaned and merged DataFrame is saved to a CSV file using the `to_csv()` method.