import { View } from 'react-native';

const Overlay = ({ children }) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.35)',
            paddingHorizontal: 10,
        }} resizeMode="cover">
            {children}
        </View>

    )
}
export default Overlay;