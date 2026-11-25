import { useBackgroundMusic } from "../hooks/useBackgroundMusic";

/**
 * Persistent floating music control. Drop an mp3 at /public/music/wedding-music.mp3
 * to enable playback — the button stays visible either way so the layout always
 * matches the reference site, but silently no-ops if the file is missing.
 *
 * Playback itself is owned by MusicProvider (see useBackgroundMusic) and
 * started from the envelope's click handler, not from here — by the time
 * this button mounts on the Home page, autoplay may already be blocked by
 * the browser if it wasn't started directly inside a user gesture.
 */
export function MusicToggle() {
  const { playing, toggle } = useBackgroundMusic();

  return (
    <button
      className="music-toggle"
      onClick={toggle}
      aria-label={playing ? "Pause music" : "Play music"}
      title={playing ? "Pause music" : "Play music"}
    >
      {playing ? "❚❚" : "▶"}
    </button>
  );
}
