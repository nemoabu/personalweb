function copyEmail() {
    const email = document.getElementById('email-text').textContent;
    navigator.clipboard.writeText(email).then(() => {
      const btn = document.querySelector('.copy-btn');
      btn.textContent = "✔️";
      setTimeout(() => btn.textContent = "Copy", 1500);
    });
  }
  