const canvasSizeWidth = [-canvas.width * 20, canvas.width * 20];
const canvasSizeHeight = [-canvas.height * 20, canvas.height * 20];

const rotatex = { "rotate x": degToRad(0) };
const rotatey = { "rotate y": degToRad(0) };
const rotatez = { "rotate z": degToRad(0) };

const translatex = { "translate x": degToRad(0) };
const translatey = { "translate y": degToRad(0) };
const translatez = { "translate z": degToRad(0) };

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
