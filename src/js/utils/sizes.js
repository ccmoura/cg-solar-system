const planetScale = 80; // 1000

const sizes = [
    10, // sun
    0.03610, // mercury
    0.08695, // venus
    0.09174 , // earth
    0.04830, // mars
    0.90909, // jupiter
    0.83333, // saturn
    0.36496, // uranus
    0.36101 // neptune
].map(size => size * planetScale);
//sizes[0] = 40
