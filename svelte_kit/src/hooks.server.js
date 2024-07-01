import { connectMongo } from "$lib/server/mongodb_connection";
import { JWT_ACCESS_SECRET } from '$env/static/private';
import { error, redirect } from '@sveltejs/kit'; 
import user from "$lib/server/user";
import jwt from "jsonwebtoken";

await connectMongo()
   .then(() => {
      console.log("Mongo connection secured :)");
   }).catch(err => {
      console.error(err);
   });

export const handle = async ({event, resolve}) => {

    const authCookie = event.cookies.get('AuthorizationToken');

    if (!authCookie) {   // cookie doesnt exist
        event.locals.user = null;

        /* if no cookie is detected, prevent certain routes */
        const attemptRoute = event.route.id;

        if (!(attemptRoute == '/auth/login' ||
            attemptRoute == '/auth/register' ||
            attemptRoute == '/auth/logout') 
            ) {
            throw redirect(302, '/auth/login');
        }

        return await resolve(event);
    }
    const token = authCookie.split(' ')[1]; // because it is Bearer "token"

    try {
        const jwtUser = jwt.verify(token, JWT_ACCESS_SECRET);
        const User = await user.findOne({ _id: jwtUser._id }).exec();   

        if (User) {
            event.locals.user = {
                _id: User._id,
                folders: User.folders
            };

        } else {
            error(501, {
                message: "Json web token could not be verified, please re-signin"
            });
        }  

    } catch (err) {
        error(501, {
            message: "Json web token could not be verified, please re-signin"
        });
    }

    return await resolve(event);
};