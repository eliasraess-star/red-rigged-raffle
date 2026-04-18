import { assertEquals } from "@std/assert";
import { destinations } from "./reisender_hase.ts";

Deno.test("Dubi folgt auf Isti", () => {
  // Arrange
  const start = destinations.indexOf("Isti");

  // Act
  const nextStepper = destinations[start + 1];

  // Assert
  assertEquals(nextStepper, "Dubi");
});

Deno.test("Zypi folgt auf Dubi", () => {
  // Given
  const start = destinations.indexOf("Dubi");

  // When
  const nextStepper = destinations[start + 1];

  // Then
  assertEquals(nextStepper, "Zypi");
});
