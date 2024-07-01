export const setAuthToken = ({cookies, token}) => {
    cookies.set('AuthorizationToken', `Bearer ${token}`, {
        httpOnly: true,                 // means the website wont share the cookie with anyone
        secure: true,                   // secures the transport of the cookie
        sameSite: 'strict',
        maxAge: 60 * 60 * 24,           // 24 hours or one day
        path: '/'                       // otherwise the defualt path is the page it was created
    });
};