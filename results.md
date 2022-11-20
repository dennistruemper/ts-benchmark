# Results

## command: `time npx jest` or `time npx jest test/1.test.ts`

| Device              | Settings                      | time npx jest | time npx jest test/1.test.ts |
| ------------------- | ----------------------------- | ------------- | ---------------------------- |
| Asus Flox z13 i9    | Powercord / performance       | 12.3s         |                              |
| Asus Flox z13 i9    | Powercord / blanced           | 13.5s         | 3.1s                         |
| Asus Flox z13 i9    | Powercord / quiet             | 26.4s         |                              |
| Asus Flox z13 i9    | no powercord / quiet          | 33.6s         |                              |
| Asus Flox z13 i9    | WSL / Powercord / performance | 16.5s         |                              |
| Asus Flox z13 i9    | WSL / Powercord / blanced     | 13.8s         |                              |
| Asus Flox z13 i9    | WSL / Powercord / quiet       | 36.7s         |                              |
| Asus Flox z13 i9    | WSL / no powercord / quiet    | 29.2s         |                              |
| Surface Pro 9 i7 16GB |  Powercord / quiet             | 21.4s | |
| Surface Pro 9 i7 16GB |  Powercord / blanced             | 19.7s | |
| Surface Pro 9 i7 16GB |  Powercord / performance             |  19.029 s |  1.831 s |
| Macbook Pro M1 16GB | no powerchord                 | 24.5s         | 2.3s                         |
| Macbook Pro M1 16GB | with powerchord               | 25.0s         | 2.4s                         |
