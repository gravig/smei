export default class Preprocesor {
  private source: string;

  constructor(source: string) {
    this.source = source;
  }

  private isNumber(literal: string): boolean {
    return !Number.isNaN(Number(literal));
  }

  run(): string {
    const { source } = this;
    let result = source.replace(" ", "").split("");
    let count = 0;

    for (let i = 1; i < source.length - 1; i++) {
      const previous = source.charAt(i - 1);
      const current = source.charAt(i);
      const next = source.charAt(i + 1);

      if (current === "(" && (previous === ")" || this.isNumber(previous))) {
        result.splice(i + count, 0, "*");

        count++;
      }

      if (current === ")" && this.isNumber(next)) {
        count++;

        result.splice(i + count, 0, "*");
      }
    }

    return result.join("");
  }
}
