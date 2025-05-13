import names from '../data/names.js'

/* 100! @complete */
const fullName = (part = '', num = 0) => {
    try {
        if (num === 0 || typeof num !== 'number' || isNaN(num)) {
            num = Math.floor(Math.random() * names.length);
        }
        /** resolvinig the first argument **/
        const fullname = names[num];

        if (fullname === undefined) return fullName(part, num)
        if (part.toLowerCase() === 'firstname') return fullname.split(" ")[0];
        if (part.toLowerCase() === 'lastname') {
            const lastname = fullname.split(" ")[1];
            if (!lastname) {
                return fullname.split(" ")[0];
            } else {
                return fullname.split(" ")[1];
            }
        }
        /* returns full name if invalid or no arguments */
        return fullname;

    } catch (error) {
        if (error.message === 'part.toLowerCase is not a function') {
            return console.error('>> The first argument expects a string value!\n', error)
        }
    }
}



const username = ({num = -1, }) => {
    try {
        if (num === "name") {
            const name = names[num]

            console.log(name)
        }
 
        if (num < 0) {
            const num = Math.floor(Math.random() * 10000);
            const username = `user${num}`
            return username;
        }
    } catch (error) {
        console.log(error)
    }
}

const email = () => {
    const num = Math.floor(Math.random() * 10000);
    const email = `susie${num}@gmail.com`
    return email;
}

const dob = () => {
    const year = Math.floor(Math.max((Math.random() * 100 - 25), 0));
    const month = Math.floor(Math.random() * 11 + 1);
    const day = Math.floor(Math.random() * 28 + 1);
    const dob = `${1950 + year}-${month}-${day}`;
    return dob;
}






export {
    fullName,
    username,
    email,
    dob,
}