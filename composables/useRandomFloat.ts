export function useRandomFloat(min: number, max: number) {
  // Gera um número flutuante aleatório entre min e max
  return Math.random() * (max - min) + min
}
