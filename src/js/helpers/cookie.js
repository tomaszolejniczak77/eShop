
    // cookies funkcje

export function setCookie(name, value, expires) {
    const date = new Date();
    date.setHours(date.getHours() + expires);
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}`
}
    
export function deleteCookie(name) {
        document.cookie = `${name}=; expires=${utc}`
    }
    
    // setCookie('text', encodeURIComponent(`tytuł
    // opis`), 2 );
    // deleteCookie('username');
    
export function getCookie(name) {
        const cookieValue = document.cookie.split('; ')
        .find((row) => row.startsWith(`${name}=`))
        ?.split('=')[1];
    
        return cookieValue ? decodeURIComponent(cookieValue) : '';
    }

// export named