const rotationMultiplier = 2;
const translationMultiplier = 1.2;

const kmhToKms = kmh => kmh / 3600;

const speeds = [
  { translation: 0, rotation: 1674 / 27 }, // sun
  { translation: 172440, rotation: 10.83 }, // mercury
  { translation: 126000, rotation: 6.52 }, // venus
  { translation: 107280, rotation: 1674 }, // earth
  { translation: 86760, rotation: 866 }, // mars
  { translation: 47160, rotation: 45583 }, // jupiter
  { translation: 34920, rotation: 36840 }, // saturn
  { translation: 24480, rotation: 14794 }, // uranus
  { translation: 19440, rotation: 9719 } // neptune
].map(speed => ({
  translation: kmhToKms(speed.translation) * translationMultiplier,
  rotation: kmhToKms(speed.rotation) * rotationMultiplier
}));


