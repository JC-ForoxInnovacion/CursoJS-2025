/**
 * Calcular el determinante de una m de 3x3
 *        |a b c|
 * det(A) |d e f|
 *        |g h i|
 *   
 * det(A) = a(ei−fh)−b(di−fg)+c(dh−eg)
 */

// m = m
const m = [
  [1,2,3],
  [0,4,5],
  [1,0,6]
]  

console.log({m});

/**
 *        |a b c|
 * det(A) |d e f|
 *        |g h i|
 * det(A) = a(ei−fh)−b(di−fg)+c(dh−eg)
 * det(A) = 00*(11*22 - 12*21) - 01*(10*22 - 12*20) + 02*(10*21 - 11*20)
 * 
 * a -> f0c0  b -> f0c1  c -> f0c2
 * d -> f1c0  e -> f1c1  f -> f1c2
 * g -> f2c0  h -> f2c1  i -> f2c2
 */
 
const detM = m[0][0] * (m[1][1] * m[2][2] - m[1][2] * m[2][1]) 
           - m[0][1] * (m[1][0] * m[2][2] - m[1][2] * m[2][0]) 
           + m[0][2] * (m[1][0] * m[2][1] - m[1][1] * m[2][0]);

console.log({detM});
