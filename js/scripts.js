document.addEventListener("DOMContentLoaded", () => {
  // jwplayer("video-player-container").setup({
  //   file: "https://cdn.jwplayer.com/manifests/JfY6xNln.m3u8",
  //   image: "https://cdn.jwplayer.com/thumbs/JfY6xNln-720.jpg", // Poster image
  //   width: "100%",
  //   aspectratio: "16:9",
  //   controls: true,
  //   autostart: false, // Correct parameter to disable autoplay
  //   mute: false,
  //   repeat: false,
  // });

  const items = document.querySelectorAll(".accordion-item");

  items.forEach((item) => {
    const accordion = item.querySelector(".accordion");
    const panel = item.querySelector(".panel");
    const downArrow = item.querySelector(".accordion-toggle");
    const upArrow = item.querySelector(".collapse-toggle");

    // Toggle accordion on click
    accordion.addEventListener("click", () => {
      const isOpen = panel.style.display === "block";

      if (isOpen) {
        panel.style.display = "none";
        downArrow.style.display = "inline";
        upArrow.style.display = "none";
      } else {
        panel.style.display = "block";
        downArrow.style.display = "none";
        upArrow.style.display = "inline";
      }
    });

    // Close panel on panel click
    panel.addEventListener("click", () => {
      panel.style.display = "none";
      downArrow.style.display = "inline";
      upArrow.style.display = "none";
    });
  });
});
