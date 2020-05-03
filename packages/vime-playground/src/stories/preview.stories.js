import { Preview } from '@vime-js/preview';
import { InteractiveView } from '../views';
import config from '../config';

export default {
  title: 'Preview',
};

const base = (props) => ({
  Component: InteractiveView,
  props: {
    // InteractiveView
    Component: Preview,
    interactiveEvents: config.Events.PREVIEW,
    makeInteractiveViewSmall: true,

    // Component Props
    ...props,
  },
});

export const File = () => base({ src: config.File.POSTER });
export const Youtube = () => base({ src: config.YouTube.SRC });
export const Vimeo = () => base({ src: config.Vimeo.SRC });
export const Dailymotion = () => base({ src: config.Dailymotion.SRC });
