import Character from '../character';
import Zombie from '../zombie';

test('Character', () => {
  const character = new Zombie('character', 'Zombie');
  expect([character.name, character.type, character.health, character.level, character.attack, character.defence]).toEqual(['character', 'Zombie', 100, 1, 40, 10]);
});


test('long name', () => {
  expect(() => new Character('longLongName', 'Character'))
    .toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
});


test('short name', () => {
  expect(() => new Character('s', 'Character'))
    .toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
});

test('string', () => {
  expect(() => new Character(89, 'Character'))
    .toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
});

test('wrong type', () => {
  expect(() => new Character('longName', 'lkdfnmko'))
    .toThrowError('Неверный тип');
});
