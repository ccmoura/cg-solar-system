function main() {
  const { gl, meshProgramInfo } = initializeWorld();

  const solarSystemModels = getSolarSystemModels(gl);
  const models = Object.keys(solarSystemModels);
  const buffers = [];
  const uniforms = [];
  const VAOs = [];
  // console.log(sun.bufferInfo.attribs.a_texcoord)

  models.forEach(model => {
    buffers.push(solarSystemModels[model].bufferInfo);
    uniforms.push({
      u_colorMult: solarSystemModels[model].color,
      u_matrix: m4.identity()
    });
    VAOs.push(
      twgl.createVAOFromBufferInfo(
        gl,
        meshProgramInfo,
        solarSystemModels[model].bufferInfo,
    ));
  });

  const fieldOfViewRadians = degToRad(60);

  function computeMatrix(viewProjectionMatrix, deltaTime, index) {
    const translatedMatrix = Movement.translation(viewProjectionMatrix, deltaTime, index);

    return Movement.rotation(translatedMatrix, deltaTime, index);
  }

  let then = 0;
  function render(now) {
    now *= 0.001;
    const deltaTime = now - then;
    then = now;

    twgl.resizeCanvasToDisplaySize(gl.canvas);

    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.CULL_FACE);

    // canvas color
    gl.clearColor(...darkMatter);
    gl.clear(gl.COLOR_BUFFER_BIT);

    const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    const projectionMatrix = m4.perspective(fieldOfViewRadians, aspect, 1, 50000);

    // Compute the camera's matrix using look at.
    const cameraPosition = [translatex["translate x"], translatey["translate y"], translatez["translate z"]]
    const target = [0, 0, 0];
    const up = [0, 1, 0];
    const cameraMatrix = m4.lookAt(cameraPosition, target, up);

    const cameraMatrixRotated = Transformation.getRotation(m4, cameraMatrix, [rotatex["rotate x"], rotatey["rotate y"], rotatez["rotate z"]])

    // Make a view matrix from the camera matrix.
    const viewMatrix = m4.inverse(cameraMatrixRotated);

    const viewProjectionMatrix = m4.multiply(projectionMatrix, viewMatrix);


    gl.useProgram(meshProgramInfo.program);

    models.forEach((_, index) => {
      gl.bindVertexArray(VAOs[index]);
      uniforms[index].u_matrix = computeMatrix(
        viewProjectionMatrix,
        deltaTime,
        index
      );
      twgl.setUniforms(meshProgramInfo, uniforms[index]);
      twgl.drawBufferInfo(gl, buffers[index]);
    });

	  requestAnimationFrame(render);
  }

  requestAnimationFrame(render);

}

main();
loadGUI();
