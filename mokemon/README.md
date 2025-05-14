# mokemon

mokemon is a powerful npm package designed for frontend developers. It provides a wide range of utilities to generate random user data, profile pictures, and more. Whether you're building mockups, testing, or prototyping, mokemon makes it easy to generate realistic data.

## Installation

Install mokemon via npm:

```bash
npm install mokemon
```

## Features

- Generate random **profile pictures** (avatars).
- Generate random **full names**, **usernames**, and **emails**.
- Generate random **dates of birth (DOB)**.
- Fetch random **images** from external APIs.
- Generate complete **user profiles** with all the above data.
- And much more!

## Usage

Here is a basic example of how to use `mokemon` in your project:

```javascript
import mokemon from "mokemon";

const mokemon = new mokemon();

// Generate a random username
console.log(mokemon.username()); // Example: user1234

// Generate a random full name
console.log(mokemon.fullName()); // Example: Sasuke Uchiha

// Generate a random email
console.log(mokemon.email()); // Example: susie1234@gmail.com

// Generate a random date of birth
console.log(mokemon.dob()); // Example: 1985-07-15

// Generate a random avatar
console.log(mokemon.avatar()); 
// Example: 
// {
//   id: '149',
//   avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=149&size=100',
//   avatarbg: 'https://api.dicebear.com/7.x/initials/svg?seed=149&size=100'
// }
```

## Note

mokemon has a lot of methods and properties to make frontend development easier. Make sure to read the documentation in detail. If you encounter any problems or have questions, feel free to email us at **kaguyasama.dev@gmail.com**.

## License

This package is licensed under MIT.
