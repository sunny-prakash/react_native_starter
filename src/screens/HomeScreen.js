import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = ({navigation}) => {
	
	return (
		<View>
			<Text style={styles.text}>Mobile app home. Welcome!</Text>
			<Button title="Go to Component" onPress={() => navigation.navigate('Components')} />
			<Button title="Go to List" onPress={() => navigation.navigate('List')} />
			<Button title="Go to Images" onPress={() => navigation.navigate('Images')} />
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
	},
});

export default HomeScreen;
