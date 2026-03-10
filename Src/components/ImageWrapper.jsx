import { ImageBackground, View } from 'react-native';
const backgroundImage = require('../assets/images/background.png');

const ImageWrapper = ({ children }) => {
    return (
        <ImageBackground source={backgroundImage} style={{flex:1}} resizeMode="cover">
            {children}
        </ImageBackground>

    )
}
export default ImageWrapper;