import React from "react";
import { Text, FlatList, StyleSheet, View } from "react-native";

const ListScreen = () => {
	const friends = [
		{ name: "Friend #1", age: 20 },
		{ name: "Friend #2", age: 22 },
		{ name: "Friend #3", age: 23 },
		{ name: "Friend #4", age: 22 },
		{ name: "Friend #5", age: 20 },
		{ name: "Friend #6", age: 25 },
		{ name: "Friend #7", age: 26 },
		{ name: "Friend #8", age: 25 },
		{ name: "Friend #9", age: 23 },
		{ name: "Friend #10", age: 21 },
		{ name: "Friend #11", age: 24 },
		{ name: "Friend #12", age: 23 },
		{ name: "Friend #13", age: 20 },
		{ name: "Friend #14", age: 29 },
	];
	return (
		<FlatList
			showsVerticalScrollIndicator={false}
			data={friends}
			keyExtractor={(friend) => friend.name}
			renderItem={({ item }) => {
				return (
					<Text style={styles.textStyle}>
						{item.name} - Age {item.age}
					</Text>
				);
			}}
		/>
	);
};

const styles = StyleSheet.create({ textStyle: { marginVertical: 40 } });

export default ListScreen;
