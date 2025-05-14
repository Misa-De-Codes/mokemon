import { avatar, getImage } from "./functions/pfp.js";
import { fullName, username, email, dob, gender, phone, region } from "./functions/text.js";


export default class Random {
    // user data
    constructor() {
        this.avatar = avatar;
        this.fullName = fullName;
        this.username = username;
        this.gender = gender;
        this.email = email;
        this.dob = dob;
        this.phone = phone;
        this.region = region; 

    // port methods
        this.avatar = avatar;
        this.getImage = getImage;
    }

    getUser = () => {
        return {
            avatar: this.avatar(),
            fullName: this.fullName(),
            username: this.username(),
            email: this.email(),
            phone: this.phone(),
            dob: this.dob(),
            region: this.region(),
        }
    }


}




