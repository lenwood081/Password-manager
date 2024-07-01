

export function toUpper(word) {
    word = word.toLowerCase();
    return word.charAt(0).toUpperCase() + word.slice(1);
}