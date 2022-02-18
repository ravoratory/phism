export abstract class Phism {
  name!: string;
  description!: string;
  styleProps!: {[key: string]: string};
  defaultColor!: string;
  customizedStyleProps: {string?: string} | undefined;
  constructor(props: {
    name: string, description: string,
    styleProps: {[key: string]: string}, defaultColor?: string,
  }) {
    this.name = props.name;
    this.description = props.description;
    this.styleProps = props.styleProps;
    this.defaultColor = props.defaultColor ?? '#ffffff';
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
