
export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    if (this.members.has(member)) {
      throw new Error('Такой персонаж уже есть');
    } else {
      this.members.add(member);
    }
  }

  addAll(arr) {
    for (const keys of arr) {
      this.members.add(keys);
    }
  }

  toArray() {
    return [...this.members];
  }
}
