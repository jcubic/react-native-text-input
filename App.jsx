import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, TextInput } from 'react-native';

const getPosition = (position) => {
  return {start: position, end: position};
};

export default function App() {
  const initalValue = `
This is text
this is another text
FOO
This is yet another text
`
  const [value, setValue] = useState(initalValue);
  const [selection, setSelection] = useState(getPosition(0));
  const onSelectionChange = ({ nativeEvent: { selection } }) => {
    setSelection(selection);
  };
  const jumpToLine = () => {
    setSelection(getPosition(value.indexOf('FOO')));
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Jump to <FOO>" onPress={jumpToLine}/>
      <TextInput
        selection={selection}
        style={styles.textInput}
        multiline={true}
        onChangeText={setValue}
        onSelectionChange={onSelectionChange}
      >
        {value.split(/(\n)/).map((node, index) => {
          return <Text key={`${index}-${node}`}>{ node }</Text>;
        })}
      </TextInput>
      <TextInput
        selection={selection}
        style={styles.textInput}
        multiline={true}
        value={value}
        onChangeText={setValue}
        onSelectionChange={onSelectionChange}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    padding: 4,
    textAlignVertical: 'top',
    textAlign: 'left',
    height: 100,
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
