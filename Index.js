/**
 * Validate Email Address matches examples like:
 *   - user@example.com
 *   - firstname.lastname@company.co.uk
 */
function isValidEmail(email) {
    const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return pattern.test(email);
  }
  
  /**
   * Validate URL matches examples like:
   *   - https://www.example.com
   *   - http://subdomain.example.org/page
   */
  function isValidURL(url) {
    const pattern = /^(https?:\/\/)([\w.-]+)\.([a-zA-Z]{2,})(\/[^\s]*)?$/;
    return pattern.test(url);
  }
  
  /**
   * Validate Phone Number matches examples like:
   *   - (123) 456-7890
   *   - 123-456-7890
   *   - 123.456.7890
   */
  function isValidPhone(phone) {
    const pattern = /^(\(\d{3}\)\s?|\d{3}[-\.]?)\d{3}[-\.]?\d{4}$/;
    return pattern.test(phone);
  }
  
  /**
   * Validate Credit Card Number matches examples like:
   *   - 1234 5678 9012 3456
   *   - 1234-5678-9012-3456
   * Note: The separator must be consistent throughout the card number.
   */
  function isValidCreditCard(card) {
    const pattern = /^\d{4}([- ])\d{4}\1\d{4}\1\d{4}$/;
    return pattern.test(card);
  }
  
  /**
   * Validate Time (12-hour or 24-hour format) matches examples like:
   *   - 14:30       (24-hour format)
   *   - 2:30 PM     (12-hour format)
   *   - 02:30 PM    (12-hour format with a leading zero)
   */
  function isValidTime(timeStr) {
    const pattern = /^((([01]\d|2[0-3]):[0-5]\d)|((0?[1-9]|1[0-2]):[0-5]\d\s?(AM|PM)))$/i;
    return pattern.test(timeStr);
  }
  
  /* ====== Test Cases ====== */
  const emails = [
    "user@example.com",
    "firstname.lastname@company.co.uk",
    "g.irakoze2@alustudent.com",
    "bad-email@.com"  //Invalid
  ];
  
  const urls = [
    "https://www.example.com",
    "http://subdomain.example.org/page",
    "ftp://example.com"  //Invalid: only http/https allowed
  ];
  
  const phones = [
    "(123) 456-7890",
    "123-456-7890",
    "123.456.7890",
    "1234567890",
    "1258+88798" //Invalid
  ];
  
  const creditCards = [
    "1234 5678 9012 3456",
    "1234-5678-9012-3456",
    "1234567890123456"  //Invalid because separators are missing
  ];
  
  const times = [
    "14:30",
    "2:30 PM",
    "02:30 PM",
    "15:30 PM",  //Invalid
    "25:00"  //Invalid
  ];
  
  // Function to log results for a given validator and test cases.
  function testValidator(name, validator, testCases) {
    console.log(`\n${name} validation:`);
    testCases.forEach(testCase => {
      console.log(`  "${testCase}" --> ${validator(testCase)}`);
    });
  }
  
  // Run tests for each validator
  testValidator("Email", isValidEmail, emails);
  testValidator("URL", isValidURL, urls);
  testValidator("Phone", isValidPhone, phones);
  testValidator("Credit Card", isValidCreditCard, creditCards);
  testValidator("Time", isValidTime, times);
  
