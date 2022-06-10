import Player from '@vimeo/player';
import throttle from "lodash.throttle";


const iframeRef = document.querySelector('iframe');
const player = new Player(iframeRef);
const CURRENT_TIME_KEY = 'videoplayer-current-time';
const onPlay = function (data) {
  localStorage.setItem(CURRENT_TIME_KEY, JSON.stringify(data.seconds));
};

player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(JSON.parse(localStorage.getItem(CURRENT_TIME_KEY)) || 0);