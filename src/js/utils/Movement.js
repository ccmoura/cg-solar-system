class Movement {
    static rotation(matrix, time, index) {
        transformations[index].rotation[1] += time * speeds[index].rotation;
        return Transformation.getRotation(
            m4,
            matrix,
            transformations[index].rotation
        );
    }

    static translation(matrix, time, index) {
        transformations[index].translated += (time * speeds[index].translation) / 200;
        const rotatedMatrix = Transformation.getRotation(
            m4,
            matrix,
            [0, transformations[index].translated, 0]
        );

        return Transformation.getTranslation(
            m4,
            rotatedMatrix,
            transformations[index].translation,
        );
    }
}