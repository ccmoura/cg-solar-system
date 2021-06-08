function main() {
  const { gl, meshProgramInfo } = initializeWorld();

  const { sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune } = getSolarSystemModels(gl);

  console.log(sun.bufferInfo.attribs.a_texcoord)
  // sun
  const sunBufferInfo = sun.bufferInfo;
  const sunUniforms = {
    u_colorMult: sun.color,
    u_matrix: m4.identity(),
  };
  const sunVAO = twgl.createVAOFromBufferInfo(
    gl,
    meshProgramInfo,
    sunBufferInfo,
  );

  // mercury
  const mercuryBufferInfo = mercury.bufferInfo;
  const mercuryUniforms = {
    u_colorMult: mercury.color,
    u_matrix: m4.identity(),
  };
  const mercuryVAO = twgl.createVAOFromBufferInfo(
    gl,
    meshProgramInfo,
    mercuryBufferInfo,
  );

  // venus
  const venusBufferInfo = venus.bufferInfo;
  const venusUniforms = {
    u_colorMult: venus.color,
    u_matrix: m4.identity(),
  };
  const venusVAO = twgl.createVAOFromBufferInfo(
    gl,
    meshProgramInfo,
    venusBufferInfo,
  );

  // earth
  const earthBufferInfo = earth.bufferInfo;
  const earthUniforms = {
    u_colorMult: earth.color,
    u_matrix: m4.identity(),
  };
  const earthVAO = twgl.createVAOFromBufferInfo(
    gl,
    meshProgramInfo,
    earthBufferInfo,
  );

  // mars
  const marsBufferInfo = mars.bufferInfo;
  const marsUniforms = {
    u_colorMult: mars.color,
    u_matrix: m4.identity(),
  };
  const marsVAO = twgl.createVAOFromBufferInfo(
    gl,
    meshProgramInfo,
    marsBufferInfo,
  );

  // jupiter
  const jupiterBufferInfo = jupiter.bufferInfo;
  const jupiterUniforms = {
    u_colorMult: jupiter.color,
    u_matrix: m4.identity(),
  };
  const jupiterVAO = twgl.createVAOFromBufferInfo(
    gl,
    meshProgramInfo,
    jupiterBufferInfo,
  );

  // saturn
  const saturnBufferInfo = saturn.bufferInfo;
  const saturnUniforms = {
    u_colorMult: saturn.color,
    u_matrix: m4.identity(),
  };
  const saturnVAO = twgl.createVAOFromBufferInfo(
    gl,
    meshProgramInfo,
    saturnBufferInfo,
  );

  // uranus
  const uranusBufferInfo = uranus.bufferInfo;
  const uranusUniforms = {
    u_colorMult: uranus.color,
    u_matrix: m4.identity(),
  };
  const uranusVAO = twgl.createVAOFromBufferInfo(
    gl,
    meshProgramInfo,
    uranusBufferInfo,
  );

  // neptune
  const neptuneBufferInfo = neptune.bufferInfo;
  const neptuneUniforms = {
    u_colorMult: neptune.color,
    u_matrix: m4.identity(),
  };
  const neptuneVAO = twgl.createVAOFromBufferInfo(
    gl,
    meshProgramInfo,
    neptuneBufferInfo,
  );

  const fieldOfViewRadians = degToRad(60);

  function computeMatrix(viewProjectionMatrix, deltaTime, index) {
/*
    if(index === 0) { // if sun
      return Transformation.getTranslation(
        m4,
        viewProjectionMatrix,
        transformations[index].translation,
      );
    } */

    transformations[index].translated += (deltaTime * speeds[index].translation)/200;
    const rotatedMatrix = Transformation.getRotation(
      m4,
      viewProjectionMatrix,
      [0, transformations[index].translated, 0]
    );

    const translatedMatrix = Transformation.getTranslation(
      m4,
      rotatedMatrix,
      transformations[index].translation,
    );

    transformations[index].rotation[1] += deltaTime * speeds[index].rotation;
    return Transformation.getRotation(
      m4,
      translatedMatrix,
      transformations[index].rotation
    );
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
    gl.clearColor(0.0468, 0.0468, 0.0351, 1.0); // dark matter
    gl.clear(gl.COLOR_BUFFER_BIT);

    const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    const projectionMatrix = m4.perspective(fieldOfViewRadians, aspect, 1, 30000);

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

    // ------ Draw the cube --------

    // Setup all the needed attributes.
    gl.bindVertexArray(sunVAO);

    sunUniforms.u_matrix = computeMatrix(
      viewProjectionMatrix,
      deltaTime,
      0
    );

    // Set the uniforms we just computed
    twgl.setUniforms(meshProgramInfo, sunUniforms);

    twgl.drawBufferInfo(gl, sunBufferInfo);

    // ------ Draw the cube --------

    // Setup all the needed attributes.
    gl.bindVertexArray(mercuryVAO);

    mercuryUniforms.u_matrix = computeMatrix(
      viewProjectionMatrix,
      deltaTime,
      1
    );

    // Set the uniforms we just computed
    twgl.setUniforms(meshProgramInfo, mercuryUniforms);

    twgl.drawBufferInfo(gl, mercuryBufferInfo);

    // ------ Draw the cube --------

    // Setup all the needed attributes.
    gl.bindVertexArray(venusVAO);

    venusUniforms.u_matrix = computeMatrix(
      viewProjectionMatrix,
      deltaTime,
      2
    );

    // Set the uniforms we just computed
    twgl.setUniforms(meshProgramInfo, venusUniforms);

    twgl.drawBufferInfo(gl, venusBufferInfo);

    // ------ Draw the cube --------

    // Setup all the needed attributes.
    gl.bindVertexArray(earthVAO);

    earthUniforms.u_matrix = computeMatrix(
      viewProjectionMatrix,
      deltaTime,
      3
    );

    // Set the uniforms we just computed
    twgl.setUniforms(meshProgramInfo, earthUniforms);

    twgl.drawBufferInfo(gl, earthBufferInfo);

    // ------ Draw the cube --------

    // Setup all the needed attributes.
    gl.bindVertexArray(marsVAO);

    marsUniforms.u_matrix = computeMatrix(
      viewProjectionMatrix,
      deltaTime,
      4
    );

    // Set the uniforms we just computed
    twgl.setUniforms(meshProgramInfo, marsUniforms);

    twgl.drawBufferInfo(gl, marsBufferInfo);

    // ------ Draw the cube --------

    // Setup all the needed attributes.
    gl.bindVertexArray(jupiterVAO);

    jupiterUniforms.u_matrix = computeMatrix(
      viewProjectionMatrix,
      deltaTime,
      5
    );

    // Set the uniforms we just computed
    twgl.setUniforms(meshProgramInfo, jupiterUniforms);

    twgl.drawBufferInfo(gl, jupiterBufferInfo);

    // ------ Draw the cube --------

    // Setup all the needed attributes.
    gl.bindVertexArray(saturnVAO);

    saturnUniforms.u_matrix = computeMatrix(
      viewProjectionMatrix,
      deltaTime,
      6
    );

    // Set the uniforms we just computed
    twgl.setUniforms(meshProgramInfo, saturnUniforms);

    twgl.drawBufferInfo(gl, saturnBufferInfo);

    // ------ Draw the cube --------

    // Setup all the needed attributes.
    gl.bindVertexArray(uranusVAO);

    uranusUniforms.u_matrix = computeMatrix(
      viewProjectionMatrix,
      deltaTime,
      7
    );

    // Set the uniforms we just computed
    twgl.setUniforms(meshProgramInfo, uranusUniforms);

    twgl.drawBufferInfo(gl, uranusBufferInfo);

    // ------ Draw the cube --------

    // Setup all the needed attributes.
    gl.bindVertexArray(neptuneVAO);

    neptuneUniforms.u_matrix = computeMatrix(
      viewProjectionMatrix,
      deltaTime,
      8
    );

    // Set the uniforms we just computed
    twgl.setUniforms(meshProgramInfo, neptuneUniforms);

    twgl.drawBufferInfo(gl, neptuneBufferInfo);

	requestAnimationFrame(render);
  }

  requestAnimationFrame(render);

}

main();
loadGUI();
