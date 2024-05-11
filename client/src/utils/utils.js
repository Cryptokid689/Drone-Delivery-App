export const centerStyle = {display: "flex", justifyContent: "center", alignItems: "center"}

export function capitalizeWords(text) {
    if (!text) return '';
    const words = text.split(' ');
    const capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join(' ');
}

export function checkFormFields(formData) {
    const emptyFields = [];

    for (const field in formData) {
        if (!formData[field] && field !== "isAdmin") {
            emptyFields.push(field);
        }
    }

    return emptyFields;
}