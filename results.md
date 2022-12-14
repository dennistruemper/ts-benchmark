# Results

## command: `time npx jest` or `time npx jest test/1.test.ts`

| Device                | Settings                      | time npx jest | time npx jest test/1.test.ts |
| --------------------- | ----------------------------- | ------------- | ---------------------------- |
| AMD Ryzen 9 3900X     | default clock                 | 20.4s         | 3.9s                         |
| Asus Flox z13 i9      | Powercord / performance       | 12.3s         |                              |
| Asus Flox z13 i9      | Powercord / blanced           | 13.5s         | 3.1s                         |
| Asus Flox z13 i9      | Powercord / quiet             | 26.4s         |                              |
| Asus Flox z13 i9      | no powercord / quiet          | 33.6s         |                              |
| Asus Flox z13 i9      | WSL / Powercord / performance | 16.5s         |                              |
| Asus Flox z13 i9      | WSL / Powercord / blanced     | 13.8s         |                              |
| Asus Flox z13 i9      | WSL / Powercord / quiet       | 36.7s         |                              |
| Asus Flox z13 i9      | WSL / no powercord / quiet    | 29.2s         |                              |
| Asus Flox x16 AMD Ryzen 7 6800HS | no Powerchord, balanced |  20.3s        | 3.8 s                   |
| Asus Flox x16 AMD Ryzen 7 6800HS | USB-C Powerchord, balanced | 22.1s         |  3.9s                |
| Surface Pro 9 i7 16GB | Powercord / quiet             | 21.4s         |                              |
| Surface Pro 9 i7 16GB | Powercord / blanced           | 19.7s         |                              |
| Surface Pro 9 i7 16GB | Powercord / performance       | 19.029 s      | 1.831 s                      |
| MacBook Pro M1 16GB   | no powercord                  | 24.5s         | 2.3s                         |
| MacBook Pro M1 16GB   | with powercord                | 25.0s         | 2.4s                         |
| MacBook Air M2 16GB   | no powercord                  | 35.5s         | 0.53s                        |
| MacBook Air M2 16GB   | with powercord                | 15.9s         | 0.37s                        |
