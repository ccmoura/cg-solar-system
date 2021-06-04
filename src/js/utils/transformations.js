const transformations = [];

class Transformation {

  static getRotation(m4, matrix, rotations) {
    matrix = m4.xRotate(matrix, rotations[0]);
    matrix = m4.yRotate(matrix, rotations[1]);
    return m4.zRotate(matrix, rotations[2]);
  }

  static getTranslation(m4, matrix, translations) {
    return m4.translate(matrix, ...translations);
  }
}
