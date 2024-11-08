# todo-list-lab
Scenario:
Build a to-do list application that allows users to:
• Create new to-do items with a title, description (optional), and due date/time.
• Read the list of to-do items, and display them in a clear and organized manner.
• Update existing to-do items (title, description, due date/time).
• Delete to-do items.
• Sort the to-do list by due date/time (ascending or descending).
• Mark to-do items as complete.
Tasks:
1. HTML Structure:
• Create the basic HTML structure for the to-do list:
o Input fields for title, description, and due date/time.
o A button to add new items.
o A container to display the list of to-do items.
o (Optional) Buttons for sorting and filtering.
2. JavaScript Functionality:
• Data Storage:
o Use an array to store to-do item objects.
o Each object should have properties for title, description, due 
date/time, and completion status.
• DOM Manipulation:
o Write functions to:
1. Create new to-do list item elements from the data.
2. Add new items to the list.
3. Update existing items in the list.
4. Sort the list based on the due date/time.
• Event Handling:
o Add event listeners to:
1. The “add” button to trigger item creation.
2. List items for editing and deleting.
3. Sorting and filtering buttons.
• Date/Time Handling:
o Use JavaScript’s Date object or a library like Moment.js to work with 
due dates/times.
o Ensure proper formatting and validation of date/time input.