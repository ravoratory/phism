import Phism from './phism';

export const Neumorphism = class extends Phism {
  constructor() {
    super({
      name: 'Neumorphism',
      description: 'new skeumophism UI design.',
      styleProps: {
        'box-shadow': '5px 5px 20px rgba(0, 0, 0, 0.2),' +
          ' -5px -5px 20px rgba(255, 255, 255, 0.2);',
      },
    });
  }
};
