
export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    this.members.forEach((elem) => {
      if (Object.entries(elem).toString() === Object.entries(member).toString()) {
        throw new Error('Такой персонаж уже есть');
      }
    });
    this.members.add(member);
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
