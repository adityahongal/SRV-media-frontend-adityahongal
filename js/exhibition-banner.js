// Exhibition banner — play overlay handler.
// Click "Play Event Video" → hide overlay, unmute, attach native controls, play.

(function () {
  const banner = document.querySelector(".exhibition-banner");
  if (!banner) return;

  const playBtn = banner.querySelector(".exhibition-banner__play");
  const video = banner.querySelector(".exhibition-banner__video");
  if (!playBtn || !video) return;

  playBtn.addEventListener("click", () => {
    banner.setAttribute("data-playing", "true");
    video.controls = true;
    video.muted = false;
    video.play().catch(() => {
      // Autoplay/play() can fail if user interaction wasn't trusted; ignore silently
    });
  });

  // When video ends, restore the overlay so user can replay
  video.addEventListener("ended", () => {
    banner.removeAttribute("data-playing");
    video.controls = false;
    video.currentTime = 0;
  });
})();
