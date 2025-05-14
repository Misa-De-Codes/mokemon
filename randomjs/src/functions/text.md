### 1. random.fullName()
This method takes two arguments `part` and `number`.
- **part:** this is the first argument. We pass `firstname` and `lastname` as a string to get the firstname and lastname respectively.
- To get the full name we pass `fullname` or an empty string as the first argument.
-  never leave it and pass the second string it will throw an error and returns `undefined`.
```js
random.fullName('', 1) // Sasuke Uchiha
random.fullName('fullname', 1) // Sasuke Uchiha
random.fullName('jshd', 1) //Sasuke Uchiha
random.fullName('firstname', 1) // Sasuke 
random.fullName('lastname', 1) // Uchiha
random.fullName(1) // >> The first argument expects a string value!
                   // undefined
random.fullName(1, 1)  // >> The first argument expects a string value!
                       // undefined
```

### 2. random.username()
This method returns a random username like `sushichan6287`. It also takes an argument to modify the output:

- If you pass the string `'random'` as an argument, it returns a random username like `kaguya2386` or `mirai4879`.
- If you want a specific user from the 100-character list, you can pass a number between 1 and 100.
- If you pass an invalid number, it will still return a username like `sushichan4837`.
- This method does not throw errors for invalid arguments, so you don't need to worry about the input, but be clear if you need a specific username.

### 3. random.email()
This method returns a random email address like `sushichan1872@example.com`. It also accepts an argument to modify the output:

- If you pass the string `'random'` as an argument, it returns a random email like `kaguya2386@example.com` or `mirai4879@example.com`.
- If you want a specific email from the 100-character list, you can pass a number between 1 and 100.
- If you pass an invalid number, it will still return an email like `sushichan8273@example.com`.
- This method does not throw errors for invalid arguments, so you don't need to worry about the input, but specify if you need a particular email.

```js
random.email() // sushichan6287@example.com
random.email('random') // kaguya2386@example.com
random.email(42) // naruto42@example.com
random.email(200) // sushichan4837@example.com
```

### 4. random.dob()
this method returns a random date for date of birth. it can also be used as account creation date.

### 5. random.gender()
This method generates a random gender. It also accepts an argument to modify the output:

- If no argument is passed, it randomly returns `'male'`, `'female'`, or `'other'`.
- If `'male'` is passed as an argument, it returns `'male'`.
- If `'female'` is passed as an argument, it returns `'female'`.
- For any invalid or unsupported argument, it defaults to returning `'other'`.
- never pass `undefined` as an argument it will return a rendom gender due to default behaviour of functional arguments in javascript. 
```js
random.gender() // male, female, or other
random.gender('male') // male
random.gender('female') // female
random.gender('invalid') // other
random.gender(null) // other
random.gender(undefined) // male, female, other
```

### 6. random.phone()
This method generates a random phone number. It also accepts an argument to modify the output:

- If no argument is passed, it returns a random phone number with a random country code.
- If you pass a country code as an argument (e.g., `1` for the US), it generates a random phone number with the specified country code.

```js
random.phone() // +91 9876543210
random.phone(1) // +1 1234567890
random.phone(44) // +44 9876543210
```

### 7. random.region()
This method generates a random region or location. It also accepts an argument to modify the output:

- If no argument is passed, it returns a random region from the predefined list.
- If you pass a string as an argument, it capitalizes the first letter and returns the modified string.

```js
random.region() // Tokyo
random.region('new york') // New york
random.region('london') // London
```

### 8. random.getUser()
Comming soon...

