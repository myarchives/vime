export default {
  File: {
    AUDIO: {
      src: '/media/audio/the-battle.mp3',
      type: 'audio/mp3'
    },
    VIDEO: [
      { src: '/media/video/1080p.mp4', type: 'video/mp4', quality: 1080 },
      { src: '/media/video/720p.mp4', type: 'video/mp4', quality: 720 },
      { src: '/media/video/480p.mp4', type: 'video/mp4', quality: 480 }
    ],
    POSTER: '/media/video/poster.png',
    TRACKS: [{
      default: true,
      kind: 'subtitles',
      label: 'English',
      srclang: 'en',
      src: '/media/video/tracks/en.vtt'
    },
    {
      kind: 'subtitles',
      label: 'Spanish',
      srclang: 'es',
      src: '/media/video/tracks/es.vtt'
    },
    {
      kind: 'subtitles',
      label: 'French',
      srclang: 'fr',
      src: '/media/video/tracks/fr.vtt'
    }]
  },
  Dailymotion: {
    SRC: 'dailymotion/x3a9qe6',
    SRC_ID: 'x3a9qe6'
  },
  YouTube: {
    SRC: 'youtube/R6MlUcmOul8',
    SRC_ID: 'R6MlUcmOul8'
  },
  Vimeo: {
    SRC: 'vimeo/154225711',
    SRC_ID: '154225711'
  }
};