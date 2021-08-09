import React from 'react'
import { StyleSheet, View, Image,Dimensions } from 'react-native';
import { Title, Subheading } from 'react-native-paper';


const windowWidth = Dimensions.get('window').width;
const OnboardingPage = ({page,dark}) => {
    return (
        <View style={styles.page}>
            <Image source={dark ? page.darkImage : page.lightImage} resizeMode="contain" style={styles.image}/>
            <Title>{page.title}</Title>
            <Subheading style={styles.subheadings}> {page.subtitle} </Subheading>
        </View>
    )
}

export default OnboardingPage

const styles = StyleSheet.create({
    page: {
        width: windowWidth,
        height: "100%",
        flexGrow: 1,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    image: {
        width: "80%",
        height: "50%",
        marginVertical:40,
        borderRadius: 4,
},
subheadings: {
    textAlign: 'center',
}
})
