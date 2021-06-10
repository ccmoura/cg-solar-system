const multiplier = 70;
const canvasSizeWidth = [-canvas.width, canvas.width].map(size => size * multiplier);
const canvasSizeHeight = [-canvas.height, canvas.height].map(size => size * multiplier);;

const rotatex = { "rotate x": degToRad(0) };
const rotatey = { "rotate y": degToRad(0) };
const rotatez = { "rotate z": degToRad(0) };

const translatex = { "translate x": degToRad(0) };
const translatey = { "translate y": degToRad(0) };
const translatez = { "translate z": 2500 };

const loadGUI = () => {
  const gui = new dat.GUI();

  const cameraRotations = gui.addFolder("Camera Rotations");

  cameraRotations.close();
  cameraRotations.add(rotatex, "rotate x", -1, 1, 0.1);
  cameraRotations.add(rotatey, "rotate y", -1, 1, 0.1);
  cameraRotations.add(rotatez, "rotate z", -1, 1, 0.1);

  const cameraTranslations = gui.addFolder("Camera Translations");

  cameraTranslations.close();
  cameraTranslations.add(translatex, "translate x", canvasSizeWidth[0], canvasSizeWidth[1], 0.1);
  cameraTranslations.add(translatey, "translate y", canvasSizeHeight[0], canvasSizeHeight[1], 0.1);
  cameraTranslations.add(translatez, "translate z", canvasSizeHeight[0], canvasSizeHeight[1], 0.1);
};
