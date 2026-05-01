import { assertEquals } from "@std/assert";
import { travelDestinations } from "./travel_destinations.ts";

Deno.test("Dubai folgt auf Isti", () => {
  // Arrange
  const start = travelDestinations.indexOf("Isti");

  // Act
  const nextStepper = travelDestinations[start + 1];

  // Assert
  assertEquals(nextStepper, "Dubai");
});

Deno.test("Zypi folgt auf Dubai", () => {
  // Given
  const start = travelDestinations.indexOf("Dubai");

  // When
  const nextStepper = travelDestinations[start + 1];

  // Then
  assertEquals(nextStepper, "Zypern");
});
