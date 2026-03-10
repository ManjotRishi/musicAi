import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ImageWrapper from '../../components/ImageWrapper';
import CustomDropdown from '../../components/CustomDropdown';
import Overlay from '../../components/OverLay';
import CustomText from '../../components/CustomText';
import GenderPicker from '../../components/GenderPicker';
import MusicNotes from '../../components/MusicNotes';
import { musicScales } from '../../utils/constant';

function SwarRiyaz() {
    const [selectedGameTime, setSelectedGameTime] = useState();
    const [selectedGender, setSelectedGender] = useState('male');
    const [selectedNote, setSelectedNote] = useState('SA');

    return (
        <ImageWrapper>
            <Overlay>
                <CustomText text="Riyaz with AI Guru" />
                <CustomText text="Sur,Steek,Smadhaan" subTitle />
                <CustomDropdown
                    data={musicScales}
                    value={selectedGameTime}
                    selector={setSelectedGameTime}
                    color="#7A2E2E"
                    placeholder="Choose Your Scale"
                />
                <GenderPicker
                    value={selectedGender}
                    selector={setSelectedGender}
                    title="Want Riyaz with Human Voice ?"
                />
                <MusicNotes
                    value={selectedNote}
                    onSelect={setSelectedNote}
                    title="Choose Note"
                />


            </Overlay>
        </ImageWrapper>
    );
}

const styles = StyleSheet.create({
});

export default SwarRiyaz;
