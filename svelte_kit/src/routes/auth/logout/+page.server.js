import { redirect } from "@sveltejs/kit";

export function load({locals}) {
    // if user is not logged in
    const user = locals.user;

    if (user === null) {
        return {logged: false};
    }

    return {logged: true};
}


export const actions = {
    logout: async({ cookies }) => {
        // TODO: remove cookie

        await cookies.delete('AuthorizationToken', {path: '/'});
        throw redirect(302, '/auth/login');
    }
}