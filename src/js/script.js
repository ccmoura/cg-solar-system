function main() {
  const { gl, meshProgramInfo } = initializeWorld();



  const { sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune } = getSolarSystemModels(gl);

  console.log(sun.bufferInfo.attribs.a_texcoord)
  // sun
  const sunBufferInfo = sun.bufferInfo;
  const sunTranslation = sun.translation;
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
  const mercuryTranslation = mercury.translation;
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
  const venusTranslation = venus.translation;
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
  const earthTranslation = earth.translation;
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
  const marsTranslation = mars.translation;
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
  const jupiterTranslation = jupiter.translation;
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
  const saturnTranslation = saturn.translation;
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
  const uranusTranslation = uranus.translation;
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
  const neptuneTranslation = neptune.translation;
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

  function computeMatrix(viewProjectionMatrix, translation) {


    return m4.translate(
      viewProjectionMatrix,
      translation[0],
      translation[1],
      translation[2],
    );
  }

  function render() {
    twgl.resizeCanvasToDisplaySize(gl.canvas);

    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.CULL_FACE);

    // canvas color
    gl.clearColor(0.0468, 0.0468, 0.0351, 1.0); // dark matter
    gl.clear(gl.COLOR_BUFFER_BIT);

    const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    const projectionMatrix = m4.perspective(fieldOfViewRadians, aspect, 1, 2000);

    // Compute the camera's matrix using look at.
    const cameraPosition = [translatex["translate x"], translatey["translate y"], translatez["translate z"]]// [0, 0, 2000];
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
      sunTranslation,
    );

    // Set the uniforms we just computed
    twgl.setUniforms(meshProgramInfo, sunUniforms);

    twgl.drawBufferInfo(gl, sunBufferInfo);

    // ------ Draw the cube --------

    // Setup all the needed attributes.
    gl.bindVertexArray(mercuryVAO);

    mercuryUniforms.u_matrix = computeMatrix(
      viewProjectionMatrix,
      mercuryTranslation,
    );

    // Set the uniforms we just computed
    twgl.setUniforms(meshProgramInfo, mercuryUniforms);

    twgl.drawBufferInfo(gl, mercuryBufferInfo);

    // ------ Draw the cube --------

    // Setup all the needed attributes.
    gl.bindVertexArray(venusVAO);

    venusUniforms.u_matrix = computeMatrix(
      viewProjectionMatrix,
      venusTranslation,
    );

    // Set the uniforms we just computed
    twgl.setUniforms(meshProgramInfo, venusUniforms);

    twgl.drawBufferInfo(gl, venusBufferInfo);

    // ------ Draw the cube --------

    // Setup all the needed attributes.
    gl.bindVertexArray(earthVAO);

    earthUniforms.u_matrix = computeMatrix(
      viewProjectionMatrix,
      earthTranslation,
    );

    // Set the uniforms we just computed
    twgl.setUniforms(meshProgramInfo, earthUniforms);

    twgl.drawBufferInfo(gl, earthBufferInfo);

    // ------ Draw the cube --------

    // Setup all the needed attributes.
    gl.bindVertexArray(marsVAO);

    marsUniforms.u_matrix = computeMatrix(
      viewProjectionMatrix,
      marsTranslation,
    );

    // Set the uniforms we just computed
    twgl.setUniforms(meshProgramInfo, marsUniforms);

    twgl.drawBufferInfo(gl, marsBufferInfo);

    // ------ Draw the cube --------

    // Setup all the needed attributes.
    gl.bindVertexArray(jupiterVAO);

    jupiterUniforms.u_matrix = computeMatrix(
      viewProjectionMatrix,
      jupiterTranslation,
    );

    // Set the uniforms we just computed
    twgl.setUniforms(meshProgramInfo, jupiterUniforms);

    twgl.drawBufferInfo(gl, jupiterBufferInfo);

    // ------ Draw the cube --------

    // Setup all the needed attributes.
    gl.bindVertexArray(saturnVAO);

    saturnUniforms.u_matrix = computeMatrix(
      viewProjectionMatrix,
      saturnTranslation,
    );

    // Set the uniforms we just computed
    twgl.setUniforms(meshProgramInfo, saturnUniforms);

    twgl.drawBufferInfo(gl, saturnBufferInfo);

    // ------ Draw the cube --------

    // Setup all the needed attributes.
    gl.bindVertexArray(uranusVAO);

    uranusUniforms.u_matrix = computeMatrix(
      viewProjectionMatrix,
      uranusTranslation,
    );

    // Set the uniforms we just computed
    twgl.setUniforms(meshProgramInfo, uranusUniforms);

    twgl.drawBufferInfo(gl, uranusBufferInfo);

    // ------ Draw the cube --------

    // Setup all the needed attributes.
    gl.bindVertexArray(neptuneVAO);

    neptuneUniforms.u_matrix = computeMatrix(
      viewProjectionMatrix,
      neptuneTranslation,
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
