# Random.js

Random.js is a powerful npm package designed for frontend developers. It provides a wide range of utilities to generate random user data, profile pictures, and more. Whether you're building mockups, testing, or prototyping, Random.js makes it easy to generate realistic data.

## Installation

Install Random.js via npm:

```bash
npm install randomjs
```

## Features

- Generate random **profile pictures** (avatars).
- Generate random **full names**, **usernames**, and **emails**.
- Generate random **dates of birth (DOB)**.
- Fetch random **images** from external APIs.
- Generate complete **user profiles** with all the above data.
- And much more!

## Usage

Here is a basic example of how to use Random.js in your project:

```javascript
import Random from "randomjs";

const random = new Random();

// Generate a random username
console.log(random.username()); // Example: user1234

// Generate a random full name
console.log(random.fullName()); // Example: Sasuke Uchiha

// Generate a random email
console.log(random.email()); // Example: susie1234@gmail.com

// Generate a random date of birth
console.log(random.dob()); // Example: 1985-07-15

// Generate a random avatar
console.log(random.avatar()); 
// Example: 
// {
//   id: '149',
//   avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=149&size=100',
//   avatarbg: 'https://api.dicebear.com/7.x/initials/svg?seed=149&size=100'
// }
```

## Note

Random.js has a lot of methods and properties to make frontend development easier. Make sure to read the documentation in detail. If you encounter any problems or have questions, feel free to email us at **kaguyasama.dev@gmail.com**.

## License

This package is licensed under MIT.
