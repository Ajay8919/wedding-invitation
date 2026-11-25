import { useEffect, useRef, useState } from "react";

/**
 * Persistent floating music control. Drop an mp3 at /public/music/wedding-music.mp3
 * to enable playback — the button stays visible either way so the layout always
 * matches the reference site, but silently no-ops if the file is missing.
 */
export function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio("/music/wedding-music.mp3");
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    // Try to start the music as soon as the Home page mounts. By this point
    // the user has already tapped the envelope and scrolled, so browsers'
    // "needs a user gesture first" autoplay rule is already satisfied — this
    // isn't a cold-load autoplay attempt.
    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => {
        // Autoplay blocked (or file missing) — leave the button in its
        // paused state so the user can start it with a tap instead.
      });

    return () => {
      audio.pause();
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().catch(() => {
        /* file missing or autoplay blocked — ignore */
      });
      setPlaying(true);
    }
  };

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
