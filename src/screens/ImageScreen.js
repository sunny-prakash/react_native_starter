import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ImageScreen = () => {
	return (
		<View>
			<Text style={styles.textStyle}>Image Screen</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 30,
	},
});

export default ImageScreen;
