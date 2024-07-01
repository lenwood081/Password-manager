import { setAuthToken } from "../helper.js";
import { fail, redirect } from "@sveltejs/kit";
import { loginUser } from "$lib/server/database.js";
import { testLogicPassword, testLogicUsername, testQueryUsername } from "../validation.server.js";

export function load({locals}) {

}

export const actions = {
    login: async({ cookies, request }) => {
        const formData = Object.fromEntries(await request.formData());
        const { email, password } = formData;

        /* insert validation, check if password is valid, and username is valid */
        if (!testLogicPassword(password)) {
            return fail(400, { email, message: "Invalid username or password" });
        }
        
        const { error, token } = await loginUser(email, password);

        if (error) {
            return fail(400, {email, message: error});
        }

        if (token) {
            setAuthToken({cookies, token});
            throw redirect(302, '/main');
        }

        return fail(400, { email, message: "unexpected error occured" });
    }
};

