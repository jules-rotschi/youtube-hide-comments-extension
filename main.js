const observer = new MutationObserver(() => {
  const comments = document.getElementById("comments");
  if (comments) {
    comments.style.display = "none";
    observer.disconnect();
  }
})

observer.observe(document.body, {
  childList: true,
  subtree: true
});