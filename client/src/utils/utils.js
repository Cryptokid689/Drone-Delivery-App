export const centerStyle = {display: "flex", justifyContent: "center", alignItems: "center"}

export function capitalizeWords(text) {
    if (!text) return '';
    const words = text.split(' ');
    const capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join(' ');
}
