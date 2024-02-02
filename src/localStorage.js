export function initLocalStorage(obj) {
    if (!localStorage.length > 0) {
        for (const key in obj) {
            localStorage.setItem(key, JSON.stringify(obj[key]));
        }
    } else return;
}

export function updateLocalStorage(obj) {
    for (const key in obj) {
        localStorage.setItem(key, JSON.stringify(obj[key]));
    };
};