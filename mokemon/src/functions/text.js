import names from '../data/names.js'
import locations from '../data/location.js';

/* 100! @complete */
const fullName = (arg1 = '', arg2 = 0) => {
    try {
        if (arg2 === 0 || typeof arg2 !== 'number' || isNaN(arg2)) {
            arg2 = Math.floor(Math.random() * names.length);
        }
        /** resolvinig the first argument **/
        const fullname = names[arg2];

        if (fullname === undefined) return fullName(arg1, arg2)
        if (arg1.toLowerCase() === 'firstname') return fullname.split(" ")[0];
        if (arg1.toLowerCase() === 'lastname') {
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
        if (error.message === 'arg1.toLowerCase is not a function') {
            return console.error('>> The first argument expects a string value!\n', error)
        }
    }
}

/* 100! @complete */
const username = (arg = -1) => {
    const num = Math.max(Math.floor(Math.random() * 10000), 1000);

    if (typeof arg === 'number' && 0 <= arg && arg < names.length) {
        const name = fullName('', arg);
        const username = name.replace(' ', '');
        return username + num;
    }
    if (arg === 'random') {
        const name = fullName('',);
        const username = name.replace(' ', '');
        return username + num;
    } else {
        const username = `sushichan${num}`;
        return username;
    }
}

/* 100! @complete */
const email = (arg) => {

    const domain = ['com', 'net', 'org', 'io', 'co', 'ai', 'me', 'dev'][Math.floor(Math.random() * 8)];
    const owner = ['google', 'yahoo', 'hotmail', 'outlook', 'icloud'][Math.floor(Math.random() * 5)];
    const num = Math.max(Math.floor(Math.random() * 10000), 1000);

    if (typeof arg === 'number' && 0 <= arg && arg < names.length) {
        const name = fullName('', arg);
        const username = name.replace(' ', '');
        return username + '@' + owner + '.' + domain;
    }
    if (arg === 'random') {
        const name = fullName('',);
        const username = name.replace(' ', '');
        return username + '@' + owner + '.' + domain;
    } else {
        const num = Math.floor(Math.random() * 10000);
        const email = `susiechan${num}@${owner}.${domain}`;
        return email;
    }
}

/* 25! @incomplete */
const dob = (arg = '') => {
    try {
        if (arg === '') {
            const year = Math.floor(Math.max((Math.random() * 100 - 25), 0));
            const month = Math.floor(Math.random() * 11 + 1);
            const day = Math.floor(Math.random() * 28 + 1);
            const dob = `${1950 + year}-${month}-${day}`;
            return dob;
        }
        if (arg) {
            throw new Error('>> The argument is not supported! Enter a valid date format.');
        }
    } catch (error) {
        console.error(error);
    }
}

/* 100! @complete */
const gender = (arg = '') => {

    if (arg === '') return ['male', 'female', 'other'][Math.floor(Math.random() * 3)];
    if (arg === 'male') return 'male';
    if (arg === 'female') return 'female';

    return 'other';
}

/* 100! @complete */
const phone = (arg = 0) => {
    const countryCode = ['+1', '+44', '+91', '+81', '+86', '+33', '+7'][Math.floor(Math.random() * 7)];
    const num = Math.floor(1000000000 + Math.random() * 8000000000)

    if (arg === 0) return `${countryCode} ${num}`;

    return `+${arg} ${num}`;
}

/* 100! @complete */
const region = (arg = '') => {
    const region = locations[Math.floor(Math.random() * locations.length)];

    if (arg === '') return region;
    return arg.charAt(0).toUpperCase() + arg.slice(1).toLowerCase();
}


export {
    fullName,
    username,
    email,
    dob,
    gender,
    phone,
    region
}