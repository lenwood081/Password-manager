import { deleteFolder, loadFolders, createFolder } from "$lib/server/database";


export async function load({locals}) {
    const user = locals.user;

    const folders = await loadFolders(user._id);

    return folders;
}


export const actions = {
    addFolder: async({request, locals}) => {
        const formData = Object.fromEntries(await request.formData());
        const { folder } = formData;

        const user = locals.user;

        const { error, success, exists } = await createFolder(user._id, folder.toLowerCase());

        if (error) {
            return fail(500, {error});
        }

        if (exists) {
            return {success: { message: "Folder already exists" }};
        }

        if (success) {
            return {success: { message: "Folder added" }};
        }

        return fail(400, { message: "unexpected error occured" });
    },

    deleteFolder: async({locals, request}) => {
        const user = locals.user;
        const formData = Object.fromEntries(await request.formData())
        const { folder } = formData;

        const { error, deleted } = await deleteFolder(user._id, folder);

        if (error) {
            return fail(500, {error});
        }

        if (deleted) {
            return {success: { deleteCount: deleted }};
        }

        return fail(400, { message: "unexpected error occured" });
    }
}