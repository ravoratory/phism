interface CSSProps {
  [prop: string]: string;
}

export default abstract class Phism {
  readonly name!: string;
  readonly description!: string;
  readonly defaultColor: string = '#ffffff';
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

  get props(): CSSProps {
    return this.customizedStyleProps ?? this.styleProps;
  }

  set props(props: CSSProps) {
    this.customizedStyleProps = Object.assign({}, this.styleProps, props);
  }

  get style(): string {
    return Object.entries(this.props).map(([key, value]) =>
      `${key}: ${value};`).join('\n');
  }

  reset(): void {
    this.customizedStyleProps = undefined;
  }
}
