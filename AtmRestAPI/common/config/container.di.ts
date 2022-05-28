import { Container } from "inversify";
import TYPES from "./test.di";
import { Ninja, Katana, Shuriken, Warrior, Weapon, ThrowableWeapon } from "./test.di";
import "reflect-metadata";


var container = new Container();
container.bind<Warrior>(TYPES.Warrior).to(Ninja);
container.bind<Weapon>(TYPES.Weapon).to(Katana);
container.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);

export default container;
