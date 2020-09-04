type Uid = number | string | undefined //Type alias
type Platform = 'windows' | 'Linux' | 'Mac Os' //Type alias

function logDetails(uid: Uid, item: string) {
    console.log(`A product with ${uid} has a title as ${item}.`)
}

function logInfo(uid: Uid, user: string) {
    console.log(`An user with ${uid} has a name as ${user}.`);
}


function renderPlatform(platform:Platform){
    return platform
}

logDetails(123, 'shoes');
logDetails("123", "shoes");

logInfo(123, "willian");
logInfo("123", "willian");

