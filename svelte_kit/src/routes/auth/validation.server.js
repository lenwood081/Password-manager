import user from '$lib/server/user';
/* check validity of entered username and data */

export function testLogicUsername(username) {

    if (!username) {
        return false;   // if username is empty
    }
    return true;
}

export function testLogicPassword(password) {

    if (!password) {
        return false;   
    }
    return true;
}

export async function testQueryUsername(username) {
    const User = await user.findOne({ email: username }).exec();

    if (User) {
        return false;       // user already exists
    }
    return true;
}