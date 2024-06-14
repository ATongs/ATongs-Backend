const tf = require('@tensorflow/tfjs-node');

class ImageService {
    static async loadImage(imageBuffer) {
        // Decode the image, resize it and normalize the pixel values to be between 0 and 1
        const image = tf.node.decodeImage(imageBuffer)
            .resizeNearestNeighbor([224, 224])
            .div(tf.scalar(255))
            .expandDims();
        return image;
    }
}

module.exports = ImageService;
