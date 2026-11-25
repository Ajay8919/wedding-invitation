import { createContext, useContext, useRef, useState, type ReactNode } from "react";

interface MusicContextValue {
  playing: boolean;
  /**
   * Call this synchronously inside a real user-gesture event handler (a
   * click/tap), not inside a later effect or timeout. Mobile Safari and
   * strict browsers only allow audio.play() to succeed when it's called
   * directly within the gesture's own call stack — starting it later, after
   * the envelope's state transitions and timers have already run, gets
   * silently blocked. Safe to call more than once; it only starts playback
   * the first time.
   */
  startFromGesture: () => void;
  toggle: () => void;
}

const MusicContext = createContext<MusicContextValue | undefined>(undefined);

export function MusicProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const startedRef = useRef(false);
  const [playing, setPlaying] = useState(false);

  const getAudio = () => {
    if (!audioRef.current) {
      const audio = new Audio("/music/wedding-music.mp3");
      audio.loop = true;
      audio.volume = 0.5;
      audioRef.current = audio;
    }
    return audioRef.current;
  };

  const startFromGesture = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    const audio = getAudio();
    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => {
        // Still blocked (or file missing) — leave paused, the floating
        // button lets the user start it with its own direct tap.
        startedRef.current = false;
      });
  };

  const toggle = () => {
    const audio = getAudio();
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      startedRef.current = true;
      audio.play().catch(() => {
        startedRef.current = false;
      });
      setPlaying(true);
    }
  };

  return (
    <MusicContext.Provider value={{ playing, startFromGesture, toggle }}>
      {children}
    </MusicContext.Provider>
  );
}

export function useBackgroundMusic() {
  const ctx = useContext(MusicContext);
  if (!ctx) throw new Error("useBackgroundMusic must be used within MusicProvider");
  return ctx;
}
