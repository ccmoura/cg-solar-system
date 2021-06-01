const canvasSizeWidth = [-canvas.width * 2, canvas.width * 2];
const canvasSizeHeight = [-canvas.height * 2, canvas.height * 2];

const rotatex = { "rotate x": degToRad(20) };
const rotatey = { "rotate y": degToRad(20) };
const rotatez = { "rotate z": degToRad(20) };

const translatex = { "translate x": degToRad(20) };
const translatey = { "translate y": degToRad(20) };
const translatez = { "translate z": degToRad(20) };

const loadGUI = () => {
  const gui = new dat.GUI();

  const cameraRotations = gui.addFolder("Camera Rotations");

  cameraRotations.close();
  cameraRotations.add(rotatex, "rotate x", canvasSizeWidth[0], canvasSizeWidth[1], 0.1);
  cameraRotations.add(rotatey, "rotate y", canvasSizeHeight[0], canvasSizeHeight[1], 0.1);
  cameraRotations.add(rotatez, "rotate z", canvasSizeHeight[0], canvasSizeHeight[1], 0.1);

  const cameraTranslations = gui.addFolder("Camera Translations");

  cameraTranslations.close();
  cameraTranslations.add(translatex, "translate x", canvasSizeWidth[0], canvasSizeWidth[1], 0.1);
  cameraTranslations.add(translatey, "translate y", canvasSizeHeight[0], canvasSizeHeight[1], 0.1);
  cameraTranslations.add(translatez, "translate z", canvasSizeHeight[0], canvasSizeHeight[1], 0.1);
};
