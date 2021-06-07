const multiplier = 0.7;

const speeds = [
  null,
  { translation: 47.9, rotation: (10.83 / 3600) * multiplier }, // mercury
  { translation: 35, rotation: (6.52 / 3600) * multiplier }, // venus
  { translation: 29.8, rotation: (1674 / 3600) * multiplier }, // earth
  { translation: 24.1, rotation: (866 / 3600) * multiplier }, // mars
  { translation: 13.1, rotation: (45583 / 3600) * multiplier }, // jupiter
  { translation: 9.7, rotation: (36840 / 3600) * multiplier }, // saturn
  { translation: 6.8, rotation: (14794 / 3600) * multiplier }, // uranus
  { translation: 5.4, rotation: (9719 / 3600) * multiplier } // neptune
]
// km/s
