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
      {playing ? (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <rect x="5" y="4" width="5" height="16" rx="1.5" fill="currentColor" />
          <rect x="14" y="4" width="5" height="16" rx="1.5" fill="currentColor" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path d="M6 4.5v15a1 1 0 0 0 1.53.85l12-7.5a1 1 0 0 0 0-1.7l-12-7.5A1 1 0 0 0 6 4.5z" fill="currentColor" />
        </svg>
      )}
    </button>
  );
}
