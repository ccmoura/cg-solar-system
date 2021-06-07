const scale = 2;

const transformations = [
  { translation: [0, 0, 0], rotation: [0, 0, 0], translated: 0 }, // sun
  { translation: [57 / scale, 0, 0], rotation: [0, 0, 0], translated: 0 }, // mercury
  { translation: [108.2 / scale, 0, 0], rotation: [0, 0, 0], translated: 0 }, // venus
  { translation: [149.6 / scale, 0, 0], rotation: [0, 0, 0], translated: 0 }, // earth
  { translation: [227.9 / scale, 0, 0], rotation: [0, 0, 0], translated: 0 }, // mars
  { translation: [778.6 / scale, 0, 0], rotation: [0, 0, 0], translated: 0 }, // jupiter
  { translation: [1433.5 / scale, 0, 0], rotation: [0, 0, 0], translated: 0 }, // saturn
  { translation: [2872.5 / scale, 0, 0], rotation: [0, 0, 0], translated: 0 }, // uranus
  { translation: [4495.1 / scale, 0, 0], rotation: [0, 0, 0], translated: 0 }, // neptune
]

function getSolarSystemModels(gl) {
  const sun = { bufferInfo: flattenedPrimitives.createSphereBufferInfo(gl, 20, 20, 30), color: [0.9921, 0.7226, 0.07421, 1], translation: [0, 0, 0]};
  const mercury = { bufferInfo: flattenedPrimitives.createSphereBufferInfo(gl, 0.03610 * 80, 0.03610 * 80, 30), color: [0.5937, 0.5937, 0.6250, 1], translation: [57 / scale, 0, 0] }; // 277
  const venus = { bufferInfo: flattenedPrimitives.createSphereBufferInfo(gl, 0.08695 * 80, 0.08695 * 80, 30), color: [0.8906, 0.7343, 0.4648, 1], translation: [108.2 / scale, 0, 0] }; // 115
  const earth = { bufferInfo: flattenedPrimitives.createSphereBufferInfo(gl, 0.09174 * 80, 0.09174 * 80, 30), color: [0.1054, 0.1601, 0.3568, 1], translation: [149.6 / scale, 0, 0] }; // 109
  const mars = { bufferInfo: flattenedPrimitives.createSphereBufferInfo(gl, 0.04830 * 80, 0.04830 * 80, 30), color: [0.7578, 0.2695, 0.0585, 1], translation: [227.9 / scale, 0, 0] }; // 207
  const jupiter = { bufferInfo: flattenedPrimitives.createSphereBufferInfo(gl, 0.90909 * 20, 0.90909 * 20, 30), color: [0.8398, 0.7929, 0.6171, 1], translation: [778.6 / scale, 0, 0] }; // 11
  const saturn = { bufferInfo: flattenedPrimitives.createSphereBufferInfo(gl, 0.83333 * 20, 0.83333 * 20, 30), color: [0.9179, 0.8359, 0.7226, 1], translation: [1433.5 / scale, 0, 0] }; // 12
  const uranus = { bufferInfo: flattenedPrimitives.createSphereBufferInfo(gl, 0.36496 * 20, 0.36496 * 20, 30), color: [0.7734, 0.8242, 0.8906, 1], translation: [2872.5 / scale, 0, 0] }; // 27.4
  const neptune = { bufferInfo: flattenedPrimitives.createSphereBufferInfo(gl, 0.36101 * 20, 0.36101 * 20, 30), color: [0.2500, 0.3320, 0.7304, 1], translation: [4495.1 / scale, 0, 0] }; // 27.7


  return { sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune };
}


