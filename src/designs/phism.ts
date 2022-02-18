interface CSSProps {
  [prop: string]: string;
}

export abstract class Phism {
  name!: string;
  description!: string;
  defaultColor: string = '#ffffff';
  private styleProps!: CSSProps;
  private customizedStyleProps?: CSSProps;

  constructor(props: {
    name: string,
    description: string,
    styleProps: CSSProps,
    defaultColor?: string,
  }) {
    Object.assign(this, props);
  }

  get style(): CSSProps {
    return this.customizedStyleProps ?? this.styleProps;
  }

  set style(props: CSSProps) {
    this.customizedStyleProps = Object.assign({}, this.styleProps, props);
  }

  get styleAsString(): string {
    return Object.entries(this.style).map(([key, value]) =>
      `${key}: ${value};`).join('\n');
  }

  reset(): void {
    this.customizedStyleProps = undefined;
  }
}
