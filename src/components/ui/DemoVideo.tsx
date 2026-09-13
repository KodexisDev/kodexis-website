import { useEffect, useRef, useState } from 'react';
import { Pause, Play, Volume2, VolumeX } from 'lucide-react';
import type { DemoVideoProps } from '../../types';

export function DemoVideo({
  src,
  poster,
  className = '',
  label = 'Video demostración de Trazza',
}: DemoVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    const onPlay = (): void => setIsPlaying(true);
    const onPause = (): void => setIsPlaying(false);

    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);

    return () => {
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
    };
  }, []);

  const togglePlayback = async (): Promise<void> => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    if (video.paused) {
      await video.play();
      return;
    }

    video.pause();
  };

  const toggleMute = (): void => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <div
      className={[
        'group relative overflow-hidden rounded-2xl border border-line-light bg-surface-light shadow-soft dark:border-line-dark dark:bg-surface-dark',
        className,
      ].join(' ')}
    >
      <video
        ref={videoRef}
        className="aspect-video w-full object-cover"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-app-dark/45 via-transparent to-transparent opacity-80" />

      <div className="absolute bottom-3 left-3 flex items-center gap-2 sm:bottom-4 sm:left-4">
        <button
          type="button"
          onClick={() => {
            void togglePlayback();
          }}
          className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-app-dark/80 text-white transition-colors hover:bg-brand-500"
          aria-label={isPlaying ? 'Pausar video' : 'Reproducir video'}
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </button>
        <button
          type="button"
          onClick={toggleMute}
          className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-app-dark/80 text-white transition-colors hover:bg-brand-500"
          aria-label={isMuted ? 'Activar sonido' : 'Silenciar video'}
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}
