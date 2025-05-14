### 1. random.avater()
This this method returns an object with an `id`, `avater` and `avaterbg`
```sh
{
  id: '149',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=149&size=100',
  avatarbg: 'https://api.dicebear.com/7.x/initials/svg?seed=149&size=100'
}
```
> The `avatar` property returns a URL to a randomly generated pixel character, while `avatarbg` provides a URL to background image with a random color.

### 2. random.getImage()
This method returns a promise so we use `await` like this to resolve the promise. On resolving the promise we get an url of an image with a *non liner Aspact Ratio*.
```js
const postImage = await random.getImage
console.log(postImage) 

//  [nodemon] starting `node index.js`
//  https://i.waifu.pics/wNzff3p.png
```
### 3. random.getPost()
Comming soon...