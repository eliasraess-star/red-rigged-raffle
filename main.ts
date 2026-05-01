
import { RaffleExecutor } from "./raffle_executor.ts";
import { Prize } from "./prize.ts";

export class Verlosung {
  public main() {
    const redArmy = [
      "@Gangsta2007",
      "@LockeDerBoss",
      "@MiiMiiSeinBruder",
      "@AlphaKevin",
      "@RedSoldier499",
      "@Louisa12",
      "@Drachenlord",
      "@Tanzverbot",
      "@tiger10ab",
      "@kaesekrokette99",
      "@fortnite4ever",
      "@ColdplayFan",
      "@Sören2013",
      "@MichiJackson",
      "@WBSLegal",
      "@Ronaldo7",
      "@Timmmäääh",
      "@SonGoku2011",
      "@NarutoBoy2000",
      "@Diggah69",
      "@roflomat",
      "@waifu_weeb",
      "@derp",
      "@MaxPower9000",
      "@MikrowellenPizza2006",
      "@MeddlFan",
      "@SpecialNeedChild37",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@SimonDesue",
      "@SimonDesue",
      "@SimonDesue",
      "@SimonDesue",
      "@SimonDesue",
      "@SimonDesue",
      "@PrinzPuma",
      "@PrinzPuma",
      "@PrinzPuma",
      "@PrinzPuma",
    ];
    const fiktivePreise = [
      new Prize("iPhone 17 Pro", 1),
      new Prize("Trip nach Dubi", 1),
      new Prize("Stepper nach Isti", 1),
      new Prize("Flug nach Zypi", 1),
      new Prize("10 kg Haribo", 2),
      new Prize("PlayStation 5 Slim", 3),
      new Prize("gebrauchte Sneaker", 5),
    ];
    const luckyMuckies = new RaffleExecutor(
      redArmy,
      fiktivePreise,
    ).executeRaffle();
    for (const [opfer, gewonnenerHase] of luckyMuckies.entries()) {
      console.log(`${opfer} gewinnt ${gewonnenerHase}`);
    }
  }
}

new Verlosung().main();
