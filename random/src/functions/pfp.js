const avatar = () => {
    const number = Math.floor(Math.random() * 1000);
    const x = {
        id: `${number}`,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${number}&size=100`,
        avatarbg: `https://api.dicebear.com/7.x/initials/svg?seed=${number}&size=100`
    }
    return x;
}


const getImage = async() => {
try {
    const response = await fetch('https://api.waifu.pics/sfw/waifu');
    const data = await response.json();
    return data.url;
    
} catch (error) {
    console.log(error);
    
}
}







export {
    avatar,
    getImage,

}