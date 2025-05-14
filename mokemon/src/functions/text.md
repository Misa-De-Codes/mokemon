### 1. mokemon.fullName()
This method takes two arguments `part` and `number`.
- **part:** this is the first argument. We pass `firstname` and `lastname` as a string to get the firstname and lastname respectively.
- To get the full name we pass `fullname` or an empty string as the first argument.
-  never leave it and pass the second string it will throw an error and returns `undefined`.
```javascript
mokemon.fullName('', 1) // Sasuke Uchiha
mokemon.fullName('fullname', 1) // Sasuke Uchiha
mokemon.fullName('jshd', 1) //Sasuke Uchiha
mokemon.fullName('firstname', 1) // Sasuke 
mokemon.fullName('lastname', 1) // Uchiha
mokemon.fullName(1) // >> The first argument expects a string value!
                   // undefined
mokemon.fullName(1, 1)  // >> The first argument expects a string value!
                       // undefined
```

### 2. mokemon.username()
This method returns a random username like `sushichan6287`. It also takes an argument to modify the output:

- If you pass the string `'random'` as an argument, it returns a random username like `kaguya2386` or `mirai4879`.
- If you want a specific user from the 100-character list, you can pass a number between 1 and 100.
- If you pass an invalid number, it will still return a username like `sushichan4837`.
- This method does not throw errors for invalid arguments, so you don't need to worry about the input, but be clear if you need a specific username.

### 3. mokemon.email()
This method returns a random email address like `sushichan1872@example.com`. It also accepts an argument to modify the output:

- If you pass the string `'random'` as an argument, it returns a random email like `kaguya2386@example.com` or `mirai4879@example.com`.
- If you want a specific email from the 100-character list, you can pass a number between 1 and 100.
- If you pass an invalid number, it will still return an email like `sushichan8273@example.com`.
- This method does not throw errors for invalid arguments, so you don't need to worry about the input, but specify if you need a particular email.

```javascript
mokemon.email() // sushichan6287@example.com
mokemon.email('random') // kaguya2386@example.com
mokemon.email(42) // naruto42@example.com
mokemon.email(200) // sushichan4837@example.com
```

### 4. mokemon.dob()
this method returns a random date for date of birth. it can also be used as account creation date.

### 5. mokemon.gender()
This method generates a random gender. It also accepts an argument to modify the output:

- If no argument is passed, it randomly returns `'male'`, `'female'`, or `'other'`.
- If `'male'` is passed as an argument, it returns `'male'`.
- If `'female'` is passed as an argument, it returns `'female'`.
- For any invalid or unsupported argument, it defaults to returning `'other'`.
- never pass `undefined` as an argument it will return a rendom gender due to default behaviour of functional arguments in javascript. 
```javascript
mokemon.gender() // male, female, or other
mokemon.gender('male') // male
mokemon.gender('female') // female
mokemon.gender('invalid') // other
mokemon.gender(null) // other
mokemon.gender(undefined) // male, female, other
```

### 6. mokemon.phone()
This method generates a random phone number. It also accepts an argument to modify the output:

- If no argument is passed, it returns a random phone number with a random country code.
- If you pass a country code as an argument (e.g., `1` for the US), it generates a random phone number with the specified country code.

```javascript
mokemon.phone() // +91 9876543210
mokemon.phone(1) // +1 1234567890
mokemon.phone(44) // +44 9876543210
```

### 7. mokemon.region()
This method generates a random region or location. It also accepts an argument to modify the output:

- If no argument is passed, it returns a random region from the predefined list.
- If you pass a string as an argument, it capitalizes the first letter and returns the modified string.

```javascript
mokemon.region() // Tokyo
mokemon.region('new york') // New york
mokemon.region('london') // London
```

### 8. mokemon.getUser()
Comming soon...