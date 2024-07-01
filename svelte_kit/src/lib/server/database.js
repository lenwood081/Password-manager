import { JWT_ACCESS_SECRET } from '$env/static/private';
import User from '$lib/server/user.js';
import { error } from '@sveltejs/kit';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Entry from './entry';

/* By using jwt authentication, no sessions need to be stored in the db */

export async function createUser(email, password) {
    const salt = await bcrypt.genSalt(12);
    const secPass = await bcrypt.hash(password, salt);
    
    try {
        let user = await User.create({  // saves user to mongo collection
            email: email,
            password: secPass,
            folders: [
                "all", "websites", "applications" 
            ]
        });
        
        const token = createJWT(user);

        return {token};
    } catch(error) {
        console.error(error);
        return error;
    }
}

export async function loginUser(email, password) {
    try {
        const user = await User.findOne({ email: email }).exec();

        if (!user) {
            return {error: "Invaild username or password"};
        }

        const valid = await bcrypt.compare(password, user.password);

        if (!valid) {
            return {error: "Invaild username or password"};
        }

        const token = createJWT(user);

        return {token};
    } catch (error) {
        return error;
    }
}

function createJWT(user) {
    return jwt.sign(
        { _id: user._id, email: user.email }, 
        JWT_ACCESS_SECRET,
        { 
            expiresIn: '1d'
        }
    );
}

/* For Folder retrun and generation */

export async function loadFolders(_id) {
    try {
        // validate user
        const user = await User.findOne({ _id: _id }).exec();


        if (!user) {
            console.log(error);
            return {error: "Invaild username or password"};
        }

        let folders = user.folders;
        let Folders = [];

        const Count = await Entry.countDocuments({ userid: _id, folders: { $all: [folders[0]] } });

        /* determine number of documents */
        for (let i = 0; i < folders.length; i++) {
            const docCount = await Entry.countDocuments({ userid: _id, folders: { $all: [folders[i]] } });
            Folders.push({ folder: folders[i], count: docCount});
        }

        return {Folders};
    } catch (error) {
        console.log(error);
        return error;
    }
}

export async function createFolder(_id, folder) {
    try {
        // validate user
        let user = await User.findOne({ _id: _id }).exec();

        if (!user) {
            console.log(error);
            return {error: "Invaild username or password"};
        }

        // add to user.folders
        if (user.folders.includes(folder)) {
            return {exists: "Folder already exists"};
        }

        user.folders.push(folder);

        // update
        await User.findOneAndUpdate({ _id: _id}, user);

        return {success: "Folder added"};
    } catch (error) {
        console.log(error);
        return error;
    }
}

export async function deleteFolder(_id, folder) {
    try {
        // validate user
        let user = await User.findOne({ _id: _id }).exec();

        if (!user) {
            console.log(error);
            return {error: "Invaild username or password"};
        }

        const deleted = await Entry.deleteMany({ userid: _id, folders: { $all: [folder] } });

        // remove from user folders list 
        user.folders = user.folders.filter(value => value !== folder);

        // update
        await User.findOneAndUpdate({ _id: _id}, user);

        return {deleted};   // number of documents deleted
    } catch (error) {
        console.log(error);
        return error;
    }
}


/* for data entries */

export async function loadEntries(_id, folder) {
    try {
        // validate user
        const user = await User.findOne({ _id: _id }).exec();
        
        
        if (!user) {
            console.log(error);
            return {error: "Invaild username or password"};
        }

        // return list of entries
        const entries = await Entry.find({ userid: _id, folders: { $all: [folder] } }).exec();

        return {entries};
    } catch (error) {
        console.error(error);
        return error;
    }
    
};

export async function updateEntry(_id, values) {
    try {
        // validate user
        const user = await User.findOne({ _id: _id }).exec();
        
        if (!user) {
            console.log(error);
            return {error: "Invaild username or password"};
        }

        // attempt to update specific entry

        const updateEntry = await Entry.findOneAndUpdate({ _id: values._id },{
            url: values.url,
            password: values.password,
            username: values.username,
            title: values.title
        });

        if (!updateEntry) {
            return {error: "failed"};
        }

        return {success: {
            updateEntry   
        }};

    } catch(error) {
        console.error(error);
        return error;
    }
}

export async function createEntry(_id, values) {
    try {   
        // find if current _id exists in users 
        const user = await User.findOne({ _id: _id }).exec();

        if (!user) {
            console.log(error);
            return {error: "Invaild username or password"};
        }

        // create new entry

        let entry = await Entry.create({  // saves user to mongo collection
            userid: _id,
            title: values.title,
            url: values.url,
            username: values.username,
            password: values.password,
            folders: values.folders
        });

        if (!entry) {
            return {error: "failed"};
        }
        
        return {success: "create", _id: values._id};
    } catch(error) {
        console.error(error);
        return error;
    }
}

export async function deleteEntry(userid, _id) {
    try {
        // find if current user exists
        const user = await User.findOne({ _id: userid }).exec();

        if (!user) {
            console.log(error);
            return {error: "Invaild username or password"};
        }

        const deleted = await Entry.deleteOne({ _id: _id });

        if (deleted.deletedCount != 1) {
            return {error: "failed"};
        }

        return {success: "delete", id: _id};
    } catch (error) {
        return error;
    }
}

