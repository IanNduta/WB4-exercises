let friend = {
    name: "Ian",
    address: "2010 rosewell apt 27b3",
    state: "Georgia",
    zip: 30068
}

function printContact(friend){
    console.log("They'er name is :" + friend.name);
    console.log("They'er address is:" + friend.address);
    console.log("They live in the state of:" + friend.state);
    console.log("They'er zip code is:" + friend.zip);
}

printContact(friend);