import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import ImageWrapper from '../components/ImageWrapper';
import { NavigatingScreens } from '../utils/constant';
import Overlay from '../components/OverLay';
import CustomText from '../components/CustomText';
import NativeMusicPlayer from '../../specs/NativeMusicPlayer';
import TestModule from "@techoptio/react-native-live-pitch-detection"



function Home({ navigation }) {

    const onPlaySa = () => {
        alert("ddd")
        //  console.log(NativeAudioPlayer);

        TestModule.startListening();

        // NativeMusicPlayer.play("incallmanager_ringback");
    };


    TestModule.addListener((data) => {
        console.log("Received data from native module:", data);
    });


    return (
        <ImageWrapper>
            <Overlay>
                <CustomText text="Music AI" />
                <CustomText text="Learn yourself and learn with accuracy." subTitle />
                <View style={{ marginTop: 28, paddingHorizontal: 20, gap: 20 }}>
                    <CustomButton
                        onPress={() => onPlaySa()}
                        btnText="Swar Riyaz"
                        subText="Train your swara recognition"
                        gradientColors={['#C85CFF', '#4A6CFF']}
                    />

                    <CustomButton
                        onPress={() => navigation.navigate(NavigatingScreens.SwarRiyaz)}
                        btnText="Vowel Riyaz"
                        subText="vowel for voice training"
                        gradientColors={['#C85CFF', '#4A6CFF']}
                    />

                    <CustomButton
                        onPress={() => navigation.navigate(NavigatingScreens.SwarRiyaz)}
                        btnText="Voice Modulation"
                        subText="Melodies ,Aalap ,Taans"
                        gradientColors={['#C85CFF', '#4A6CFF']}
                    />
                </View>
            </Overlay>
        </ImageWrapper >

    );
}

export default Home;
