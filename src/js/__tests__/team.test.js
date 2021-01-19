import Team from '../team';
// import Character from '../character';
import Zombie from '../zombie';
import Daemon from '../daemon';


test('add', () => {
  const newTeam = new Team();
  const person1 = new Zombie('zombie', 'Zombie');
  const person2 = new Daemon('daemon', 'Daemon');
  expect(() => {
    newTeam.add(person1);
    newTeam.add(person2);
  }).not.toThrow();
});

test('array addAll', () => {
  const newTeam = new Team();
  const newZombie = new Zombie('zombie', 'Zombie');
  const newDaemon = new Daemon('daemon', 'Daemon');
  const arrZombies = [newZombie, newDaemon];
  newTeam.addAll(arrZombies);
  const newArr = newTeam.toArray();

  expect(newArr).toEqual(
    [{
      attack: 40, defence: 10, health: 100, level: 1, name: 'zombie', type: 'Zombie',
    },
    {
      attack: 10, defence: 40, health: 100, level: 1, name: 'daemon', type: 'Daemon',
    }],
  );
});

test('to Array', () => {
  const newTeam = new Team();
  const newZombie = new Zombie('zombie', 'Zombie');
  const newDaemon = new Daemon('daemon', 'Daemon');
  newTeam.add(newZombie);
  newTeam.add(newDaemon);
  expect(newTeam.toArray()).toEqual([newZombie, newDaemon]);
});

test('test-name', () => {
  const team = new Team();
  team.add({
    name: 'Лучник', type: 'Bowman', health: 50, level: 3, attack: 40, defence: 10,
  });
  expect(() => {
    team.add({
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
    });
  }).toThrow('Такой персонаж уже есть');
});
