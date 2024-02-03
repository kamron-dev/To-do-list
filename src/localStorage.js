import { toDosObj } from "./createToDo";

export function initLocalStorage(obj) {
    if (!localStorage.length > 0) {
        for (const key in obj) {
            localStorage.setItem(key, JSON.stringify(obj[key]));
        }
    } else {

        let newObj = {};
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const storedValue = localStorage.getItem(key);

            const parsedValue = JSON.parse(storedValue);
            newObj[key] = parsedValue;
        };

        return newObj;
    }

    
};



export function updateLocalStorage(obj) {
    for (const key in obj) {
        localStorage.setItem(key, JSON.stringify(obj[key]));
    };
};