import Team from '../team';
import Zombie from '../zombie';

const newTeam = new Team();
test('new Team', () => {
  expect(newTeam).toBeInstanceOf(Team);
});

test('add', () => {
  const newZombie = new Zombie('character', 'Zombie');

  newTeam.add(newZombie);
  const newArr = newTeam.toArray();
  expect(newArr).toEqual(
    [{
      attack: 40,
      defence: 10,
      health: 100,
      level: 1,
      name: 'character',
      type: 'Zombie',
    }],
  );
});

test('array', () => {
  const newZombie0 = new Zombie('zombie0', 'Zombie');
  const newZombie1 = new Zombie('zombie1', 'Zombie');
  const arrZombies = [newZombie0, newZombie1];
  newTeam.addAll(arrZombies);
  const newArr = newTeam.toArray();

  expect(newArr).toEqual(
    [{
      attack: 40, defence: 10, health: 100, level: 1, name: 'character', type: 'Zombie',
    },
    {
      attack: 40, defence: 10, health: 100, level: 1, name: 'zombie0', type: 'Zombie',
    },
    {
      attack: 40, defence: 10, health: 100, level: 1, name: 'zombie1', type: 'Zombie',
    }],
  );
});


test('addAll', () => {
  const newCharacters = new Team();
  const newZombie2 = new Zombie('zombie2', 'Zombie');
  const newZombie3 = new Zombie('zombie3', 'Zombie');
  const arrZombies = [newZombie2, newZombie3];
  newCharacters.addAll(arrZombies);
  const newArr = newCharacters.toArray();

  expect(newArr).toEqual(
    [{
      attack: 40, defence: 10, health: 100, level: 1, name: 'zombie2', type: 'Zombie',
    },
    {
      attack: 40, defence: 10, health: 100, level: 1, name: 'zombie3', type: 'Zombie',
    }],
  );
});


test('error', () => {
  const newZombie1 = new Zombie('zombie1', 'Zombie');
  expect(() => {
    newTeam.add(newZombie1);
    newTeam.add(newZombie1);
  }).toThrow('Такой персонаж уже есть');
});
