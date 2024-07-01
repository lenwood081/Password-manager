import { createUser } from "$lib/server/database";
import { setAuthToken } from "../helper.js";
import { fail, redirect } from "@sveltejs/kit";
import { testLogicPassword, testLogicUsername, testQueryUsername } from "../validation.server.js";

export function load({locals}) {
    const user = locals?.user;

    return {user};
}

export const actions = {
    register: async({ cookies, request }) => {
        const formData = Object.fromEntries(await request.formData());
        const { email, password } = formData;
        
        /* insert validation, check if password is valid, and username is valid */
        if (!testLogicPassword(password)) {
            return fail(400, { email, message: "Invalid password" });
        }

        if (!testLogicUsername(email) || !await testQueryUsername(email)) {
            return fail(400, { email, message: "Blank email or email is already registered" });
        }

        /* check if username exists in db already */
        const { error, token } = await createUser(email, password);
    
        if (error) {
            console.log("failed");
            return fail(500, {error});
        }
        
        if (token) {
            setAuthToken({cookies, token});
            // TODO: have an alert message to show user is signed up
            throw redirect(307, "/main");
        }

        return fail(400, { email, message: "unexpected error occured" });
    }
};

