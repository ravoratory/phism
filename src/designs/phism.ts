export abstract class Phism {
  name!: string;
  description!: string;
  defaultColor!: string;
  private styleProps!: {[key: string]: string};
  private customizedStyleProps: {string?: string} | undefined;
  constructor(props: {
    name: string, description: string,
    styleProps: {[key: string]: string}, defaultColor?: string,
  }) {
    this.name = props.name;
    this.description = props.description;
    this.defaultColor = props.defaultColor ?? '#ffffff';
    this.styleProps = props.styleProps;
    Object.freeze(this.styleProps);
  }

  get style(): { string?: string } {
    return this.customizedStyleProps ?? this.styleProps;
  }

  get styleAsString(): string {
    return Object.entries(this.style).map(([key, value]) =>
      key !== 'string' ? `${key}: ${value};` : '').join('\n');
  }

  setCustomProps(props: {[key: string]: string}): void {
    this.customizedStyleProps = Object.assign({}, this.styleProps, props);
    console.log(this.customizedStyleProps);
  }

  resetProps(): void {
    this.customizedStyleProps = undefined;
  }
}
