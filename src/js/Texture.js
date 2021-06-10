/* source: https://stackoverflow.com/questions/39893834/background-img-for-canvas-webgl */

class Texture {
    static initBackground(gl) {
        let backTex = gl.createTexture();
        backTex.Img = new Image();
        backTex.Img.onload = function() {
            Texture.handleBkTex(gl, backTex);
        }
        backTex.Img.src = "textures/stars.jpg";
    }

    static handleBkTex(gl, tex) {
        gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, tex.Img);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.bindTexture(gl.TEXTURE_2D, null);
    }
}
