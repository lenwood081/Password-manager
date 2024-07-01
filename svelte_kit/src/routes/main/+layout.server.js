
export async function load({locals}) {
    const user = locals.user;

    return {
        User: {
            folders: user.folders
        }
    };
}   