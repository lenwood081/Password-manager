import { NAME, EMAIL } from '$env/static/private';

export function load() {
    return {
        name: NAME,
        email: EMAIL
    };
}