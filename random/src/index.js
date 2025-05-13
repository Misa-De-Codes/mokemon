import { avatar, getImage } from "./functions/pfp.js";
import { fullName, username, email, dob } from "./functions/text.js";


export default class Random {
    // user data
    fullName = fullName;
    username = username;
    email = email;
    dob = dob;

    getUser = () => {
        return {
            avatar: avatar(),
            fullName: fullName(),
            username: this.username(),
            email: this.email(),
            dob: this.dob()
        }
    }

    // post data
    avatar = avatar;
    getImage = getImage;


    getPost = {
        image: getImage()
    }
}




