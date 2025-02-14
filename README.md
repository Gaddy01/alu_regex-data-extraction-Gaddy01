# Regex Data Extraction

## Project Overview

This project is designed to extract and validate specific types of data from large bodies of text using Regular Expressions (Regex). The application targets the following data types:
- **Email Addresses**
- **URLs**
- **Phone Numbers**
- **Credit Card Numbers**
- **Time Formats (12-hour and 24-hour)**

The goal is to build a robust solution that can identify and extract these data elements accurately. This is especially useful in scenarios where you need to process data from web pages or APIs and extract only the relevant information.

## Features

- **Email Validation:** Checks for common email patterns (e.g., `user@example.com`, `firstname.lastname@company.co.uk`).
- **URL Validation:** Supports URLs with `http://` or `https://`, including optional paths.
- **Phone Number Validation:** Handles various formats such as `(123) 456-7890`, `123-456-7890`, and `123.456.7890`.
- **Credit Card Validation:** Validates credit card numbers in formats with either spaces or hyphens (e.g., `1234 5678 9012 3456` or `1234-5678-9012-3456`).
- **Time Validation:** Supports both 24-hour (`14:30`) and 12-hour formats (`2:30 PM`).

## Technologies Used

- **JavaScript**: The main programming language used.
- **Node.js**: For running the JavaScript code and tests in a command-line environment.
- **Regex**: Regular expressions are used extensively to match and validate different data formats.

## Setup Instructions

1. **Clone the Repository:**
   git clone https://github.com/Gaddy01/alu_regex-data-extraction-Gaddy01.git
2. **Navigate to the Project Directory:**
   cd alu_regex-data-extraction-Gaddy01
3. **Run the file using Node.js:**
   node index.js
