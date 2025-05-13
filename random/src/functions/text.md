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

### 2. random.getImage()
This method returns a promise so we use `await` like this to resolve the promise. On resolving the promise we get an url of an image with a *non liner Aspact Ratio*.
```js
const postImage = await random.getImage
console.log(postImage) 

//  [nodemon] starting `node index.js`
//  https://i.waifu.pics/wNzff3p.png
```
### 3. 