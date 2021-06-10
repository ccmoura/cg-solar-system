const universeScale = 0.06; // 0.5

const transformations = [
  { translation: [0, 0, 0], rotation: [0, 0, 0], translated: 0 }, // sun
  { translation: [57, 0, 0], rotation: [0, 0, 0], translated: 0 }, // mercury
  { translation: [108.2, 0, 0], rotation: [0, 0, 0], translated: 0 }, // venus
  { translation: [149.6, 0, 0], rotation: [0, 0, 0], translated: 0 }, // earth
  { translation: [227.9, 0, 0], rotation: [0, 0, 0], translated: 0 }, // mars
  { translation: [778.6, 0, 0], rotation: [0, 0, 0], translated: 0 }, // jupiter
  { translation: [1433.5, 0, 0], rotation: [0, 0, 0], translated: 0 }, // saturn
  { translation: [2872.5, 0, 0], rotation: [0, 0, 0], translated: 0 }, // uranus
  { translation: [4495.1, 0, 0], rotation: [0, 0, 0], translated: 0 }, // neptune
].map(transformation => ({ ...transformation, translation: [transformation.translation[0] / universeScale, 0, 0] }));

function getSolarSystemModels(gl) {
  const sun = { bufferInfo: flattenedPrimitives.createSphereBufferInfo(gl, sizes[0], sizes[0], 80), color: colors[0], translation: transformations[0]};
  const mercury = { bufferInfo: flattenedPrimitives.createSphereBufferInfo(gl, sizes[1], sizes[1], 30), color: colors[1], translation: transformations[1] }; // 277
  const venus = { bufferInfo: flattenedPrimitives.createSphereBufferInfo(gl, sizes[2], sizes[2], 30), color: colors[2], translation: transformations[2] }; // 115
  const earth = { bufferInfo: flattenedPrimitives.createSphereBufferInfo(gl, sizes[3], sizes[3], 30), color: colors[3], translation: transformations[3] }; // 109
  const mars = { bufferInfo: flattenedPrimitives.createSphereBufferInfo(gl, sizes[4], sizes[4], 30), color: colors[4], translation: transformations[4] }; // 207
  const jupiter = { bufferInfo: flattenedPrimitives.createSphereBufferInfo(gl, sizes[5], sizes[5], 30), color: colors[5], translation: transformations[5] }; // 11
  const saturn = { bufferInfo: flattenedPrimitives.createSphereBufferInfo(gl, sizes[6], sizes[6], 30), color: colors[6], translation: transformations[6] }; // 12
  const uranus = { bufferInfo: flattenedPrimitives.createSphereBufferInfo(gl, sizes[7], sizes[7], 30), color: colors[7], translation: transformations[7] }; // 27.4
  const neptune = { bufferInfo: flattenedPrimitives.createSphereBufferInfo(gl, sizes[8], sizes[8], 30), color: colors[8], translation: transformations[8] }; // 27.7


  return { sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune };
}


