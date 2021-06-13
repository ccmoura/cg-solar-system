

const sizes = [
    10 * sunScale, // sun
    0.03610 * mercuryScale, // mercury
    0.08695 * venusScale, // venus
    0.09174 * earthScale , // earth
    0.04830 * marsScale, // mars
    0.90909 * jupiterScale, // jupiter
    0.83333 * saturnScale, // saturn
    0.36496 * uranusScale, // uranus
    0.36101 * neptuneScale // neptune
].map(size => size * planetScale);

