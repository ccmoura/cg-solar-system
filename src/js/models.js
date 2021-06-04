function getSolarSystemModels(gl) {
  const scale = 2;

  const sun = { bufferInfo: flattenedPrimitives.createSphereBufferInfo(gl, 10, 10, 3000), color: [0.9921, 0.7226, 0.07421, 1], translation: [0, 0, 0]};
  const mercury = { bufferInfo: flattenedPrimitives.createSphereBufferInfo(gl, 0.03610, 0.03610, 3000), color: [0.5937, 0.5937, 0.6250, 1], translation: [57 / scale, 0, 0] }; // 277
  const venus = { bufferInfo: flattenedPrimitives.createSphereBufferInfo(gl, 0.08695, 0.08695, 3000), color: [0.8906, 0.7343, 0.4648, 1], translation: [108.2 / scale, 0, 0] }; // 115
  const earth = { bufferInfo: flattenedPrimitives.createSphereBufferInfo(gl, 0.09174, 0.09174, 3000), color: [0.1054, 0.1601, 0.3568, 1], translation: [149.6 / scale, 0, 0] }; // 109
  const mars = { bufferInfo: flattenedPrimitives.createSphereBufferInfo(gl, 0.04830, 0.04830, 3000), color: [0.7578, 0.2695, 0.0585, 1], translation: [227.9 / scale, 0, 0] }; // 207
  const jupiter = { bufferInfo: flattenedPrimitives.createSphereBufferInfo(gl, 0.90909, 0.90909, 3000), color: [0.8398, 0.7929, 0.6171, 1], translation: [778.6 / scale, 0, 0] }; // 11
  const saturn = { bufferInfo: flattenedPrimitives.createSphereBufferInfo(gl, 0.83333, 0.83333, 3000), color: [0.9179, 0.8359, 0.7226, 1], translation: [1433.5 / scale, 0, 0] }; // 12
  const uranus = { bufferInfo: flattenedPrimitives.createSphereBufferInfo(gl, 0.36496, 0.36496, 3000), color: [0.7734, 0.8242, 0.8906, 1], translation: [2872.5 / scale, 0, 0] }; // 27.4
  const neptune = { bufferInfo: flattenedPrimitives.createSphereBufferInfo(gl, 0.36101, 0.36101, 3000), color: [0.2500, 0.3320, 0.7304, 1], translation: [4495.1 / scale, 0, 0] }; // 27.7


  return { sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune };
}


