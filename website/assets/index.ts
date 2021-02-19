import MediaPlayer from '@jdevelop3r/mediaplayer/src/MediaPlayer';
import AutoPlay from '@jdevelop3r/mediaplayer/src/plugins/AutoPlay';
import AutoPause from '@jdevelop3r/mediaplayer/src/plugins/AutoPause';
import AdsPlugin from '@jdevelop3r/mediaplayer/src/plugins/Ads/index'

const video = document.querySelector('video');
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new AdsPlugin()],
});

const playButton: HTMLElement = document.querySelector('#playButton');
playButton.onclick = () => player.togglePlay();

const muteButton: HTMLElement = document.querySelector('#muteButton');
muteButton.onclick = () => {
  if (player.media.muted) {
    player.unmute();
  } else {
    player.mute();
  }
};

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message);
  });
}
