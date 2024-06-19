Task Description

Create a registration form that includes the following fields:

Username
Email
Password
Confirm Password
Date of Birth
Phone Number
Address
Street
City
State
Zip Code
Each field must meet specific validation criteria. Your form should prevent submission if any of these validations fail and provide meaningful error messages to the user.

Validation Requirements

Username

Must be between 5 and 15 characters.
Can contain letters, numbers, underscores, and periods.
Must not start with a number.
Email

Must be a valid email format (e.g., user@example.com).
Password

Must be at least 8 characters long.
Must contain at least one uppercase letter, one lowercase letter, one number, and one special character (e.g., !@#$%^&*).
Confirm Password

Must match the Password field.
Date of Birth

Must be a valid date.
User must be at least 18 years old.
Phone Number

Must be a valid phone number format (e.g., 123-456-7890 or (123) 456-7890).
Address

Street: Cannot be empty.
City: Must only contain letters.
State: Must be a valid two-letter state abbreviation.
Zip Code: Must be a valid 5-digit or 5+4-digit ZIP code.
Additional Requirements

The form should display error messages next to each field if the validation fails.
Ensure that the form is user-friendly and accessible.
Implement event handling to validate fields as the user types and on form submission.
Use pure JavaScript (no libraries or frameworks).
Ensure nested validation logic is correctly implemented, especially for the address fields.