import { createEntry, loadEntries, updateEntry, deleteEntry } from '$lib/server/database';


export async function load({ params, locals }) {
    const user = locals.user;
    const page = user.folders.find((page) => page === params.slug);

    /* loading all cube objects */

    const { error, entries } = await loadEntries(user._id, page); // list of objects

    if (error) {
        return fail(500, {error});
    }

    let indexedEntries = [];

    entries.forEach((entry) => {
        let newEntry = {
            _id: entry._id.toString(),  // so that i ca stringify this and remove the userid
            password: entry.password,
            username: entry.username,
            title: entry.title,
            url: entry.url,
        };

        indexedEntries.push(newEntry);
    });

    if (!page) throw error(404); 
    
    return {
        page,
        indexedEntries
    };
}

export const actions = {
    add: async({locals, params}) => {
        // TODO: add new entry to with the associated user ObjectId or email
        const user = locals.user;
        const page = user.folders.find((page) => page === params.slug);

        if (!page) throw error(404);
        
        let Folders = ['all'];
        if (!(page == 'all')) Folders.push(page); 

        const values = {
            title: "Title",
            url: "url",
            username: "defualt",
            password: "defualt",
            folders: Folders,
            updating: false
        };

        const { error, success } = await createEntry(user._id, values);

        if (error) {
            return fail(500, {error});
        }

        if (success) {
            return;
        }

        return fail(400, { message: "unexpected error occured" });
    },

    update: async({locals, request}) => {
        const formData = Object.fromEntries(await request.formData());
        const { id, url, username , password, title } = formData;
        const user = locals.user;

        const values = {
            _id: id,
            url: url,
            username: username,
            password: password,
            title: title
        };

        const { error, success } = await updateEntry(user._id, values);

        if (error) {
            return fail(500, {error});
        }

        if (success) {
            return {success: "update", _id: success.updateEntry._id.toString()};
        }

        return fail(400, { message: "unexpected error occured" });
    },

    delete: async({locals, request}) => {
        const formData = Object.fromEntries(await request.formData());
        const { id } = formData;
        const user = locals.user;

        const { error, success } = await deleteEntry(user._id, id);

        if (error) {
            return fail(500, {error});
        }

        if (success) {
            return {success};
        }

        return fail(400, { message: "unexpected error occured" });
    },
}

