import { Prize } from "./prize.ts";

export class RaffleExecutor {
  constructor(
    private candidates: string[],
    private prizes: Prize[],
  ) {}
  public executeRaffle(): Map<string, string> {
    // Create working copies to preserve original state
    const candidatesCopy = [...this.candidates];
    const prizesCopy = this.prizes.map(
      (p) => new Prize(p.name, p.quantity),
    );

    const shuffledCandidates = this.shuffleCandidates(candidatesCopy);
    return this.assignPrizesToCandidates(shuffledCandidates, prizesCopy);
  }

  /**
   * Shuffles the candidates in random order.
   * Returns an array of the shuffled candidates.
   */
  private shuffleCandidates(candidates: string[]): string[] {
    const shuffled = new Array<string>();
    while (candidates.length > 0) {
      const randomIndex = Math.floor(Math.random() * candidates.length);
      const selectedCandidate = candidates[randomIndex];
      shuffled.push(selectedCandidate);
      candidates.splice(randomIndex, 1);
    }
    return shuffled;
  }

  /**
   * Assign the shuffled candidates to the available prizes.
   * Note that a prize can be awarded more than once.
   */
  private assignPrizesToCandidates(
    candidates: string[],
    prizes: Prize[],
  ): Map<string, string> {
    const assignments = new Map<string, string>();
    let candidateIndex = 0;

    while (prizes.length > 0 && candidateIndex < candidates.length) {
      const currentPrize = prizes[0];
      const winner = candidates[candidateIndex];

      assignments.set(winner, currentPrize.name);
      candidateIndex++;

      // If the prize has been awarded, remove it; otherwise, reduce the count
      if (currentPrize.quantity > 1) {
        currentPrize.quantity--;
      } else {
        prizes.shift();
      }
    }

    return assignments;
  }
}
