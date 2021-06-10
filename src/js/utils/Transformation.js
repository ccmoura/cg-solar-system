class Transformation {

  static getRotation(m4, matrix, rotations) {
    matrix = m4.xRotate(matrix, rotations[0]);
    matrix = m4.yRotate(matrix, rotations[1]);
    return m4.zRotate(matrix, rotations[2]);
  }

  static getTranslation(m4, matrix, translations) {
    return m4.translate(matrix, ...translations);
  }

  static getPointRotation(m4, matrix, pointRotations, angle) {
    return pointRotations[2] === 0 &&
      pointRotations[1] === 0 &&
      pointRotations[0] === 0
      ? matrix
      : m4.axisRotate(
          matrix,
          [pointRotations[0], pointRotations[1], pointRotations[2]],
          angle,
          matrix
        );
  }
}
