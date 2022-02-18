import Phism from './phism';

export const Claymorphism = class extends Phism {
  constructor() {
    super({
      name: 'Claymorphism',
      description: 'like a clay UI design.',
      styleProps: {
        'background-color': 'rgba(0, 0, 0, 0.005)',
        'border-radius': '32px',
        'box-shadow': '8px 8px 16px 0 rgba(0, 0, 0, 0.25),' +
          'inset -8px -8px 16px 0 rgba(0, 0, 0, 0.25),' +
          'inset 8px 8px 16px 0 rgba(255, 255, 255, 0.2)',
      },
    });
  }
};
