import Phism from './phism';

export const Glassmorphism = class extends Phism {
  constructor() {
    super({
      name: 'Glassmorphism',
      description: 'a glassmorphism UI design.',
      styleProps: {
        'background-color': 'rgba(255, 255, 255, 0.4)',
        'box-shadow': '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        'backdrop-filter': 'blur(6px)',
        'outline': '1px solid rgba(255, 255, 255, 0.5)',
      },
    });
  }
};
