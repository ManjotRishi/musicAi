import React from 'react';
import { View, Text } from 'react-native';
import { useAppTheme } from '../styles/theme';
import { appstyles } from '../styles/appstyles';

const CustomText = ({ text, subTitle = false }) => {
    const { theme } = useAppTheme();
    return (
        <View>
            <Text style={[subTitle ? appstyles.subTitle : appstyles.title, { color: theme.text }]}>
                {text || ''}
            </Text>
        </View>
    );
};

export default CustomText;
