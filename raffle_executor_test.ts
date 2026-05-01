import { assertEquals } from "@std/assert";
import { RaffleExecutor } from "./raffle_executor.ts";
import { Prize } from "./prize.ts";

Deno.test("Raffle executor should be reusable for multiple raffles", () => {
  // Arrange
  const candidates = [
    "@Alice",
    "@Bob",
    "@Charlie",
    "@Diana",
    "@Eve",
  ];

  const prizes = [
    new Prize("Prize A", 1),
    new Prize("Prize B", 1),
    new Prize("Prize C", 1),
  ];

  // Calculate total available prizes
  const totalAvailablePrizes = prizes.reduce(
    (sum, prize) => sum + prize.quantity,
    0,
  );

  // Create a single RaffleExecutor instance
  const executor = new RaffleExecutor(candidates, prizes);

  // Act: Call executeRaffle twice on the same instance
  const firstResults = executor.executeRaffle();
  console.log(`First raffle: ${firstResults.size} winners out of ${totalAvailablePrizes} prizes`);
  
  const secondResults = executor.executeRaffle();
  console.log(`Second raffle: ${secondResults.size} winners out of ${totalAvailablePrizes} prizes`);

  // Assert
  // Both raffles should distribute all available prizes
  assertEquals(
    firstResults.size,
    totalAvailablePrizes,
    `First raffle should have ${totalAvailablePrizes} winners`,
  );
  assertEquals(
    secondResults.size,
    totalAvailablePrizes,
    `Second raffle should have ${totalAvailablePrizes} winners`,
  );
});
