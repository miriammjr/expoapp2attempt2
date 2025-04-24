import { Image, StyleSheet, Platform, ScrollView, FlatList, TextInput, Text, Button } from 'react-native';
import { useState } from 'react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


const liststuff = [
  {
    name: "Fluffy",
    animal: "cat",
  },
  {
    name: "Whiskers",
    animal: "cat",
  },
  {
    name: "Rex",
    animal: "dog",
  },
  {
    name: "Bark",
    animal: "dog",
  },
  {
    name: "Hop",
    animal: "bunny",
  },
  {
    name: "Easter",
    animal: "bunny",
  },
  {
    name: "Blub",
    animal: "fish",
  },
  {
    name: "Swimmy",
    animal: "fish",
  },
  {
    name: "Meow",
    animal: "cat",
  },
  {
    name: "Floofy",
    animal: "cat",
  },
  {
    name: "Woof",
    animal: "dog",
  },
  {
    name: "Luna",
    animal: "dog",
  },

];


export default function HomeScreen() {
  const [searchStuff, setSearchStuff] = useState('');
  const [filteredStuff, setFilteredStuff] = useState(liststuff);

  const searchAnimals = () => {
    
    const input = searchStuff;
    if (input.length > 0) {
      const filtered = liststuff.filter((item) =>
        item.name.toLowerCase().startsWith(input.toLowerCase()) ||  
        item.animal === input.toLowerCase());
      setFilteredStuff(filtered);
      
    }
    else {
      setFilteredStuff(liststuff);
    }

    
  }
  const changeText = (input: string) => {
    setSearchStuff(input);
    
  }

  return (
    
    <ScrollView style={styles.all}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText style={styles.title}>Animals</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
      <TextInput style={styles.input}
        value={searchStuff}
        onChangeText={changeText}
      />
      <Button
        title="Submit"
        onPress={() => searchAnimals()}
      />
        <FlatList
          data = {filteredStuff}
          keyExtractor = {(item) => item.name}
          renderItem = {({item}) => (
            <ThemedView style={styles.stepContainer}>
              <Text style={styles.item}>{item.name} - {item.animal}</Text>
            </ThemedView>
          )}
        />
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  all: {
    backgroundColor: '#000000',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
  title: {
    color: 'white',
    fontSize: 30,
    paddingTop: 30,
    textAlign: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingTop: 50,
  },
  stepContainer: {
    gap: 20,
    marginBottom: 8,
    fontSize: 20,
    paddingTop: 30,
    textAlign: 'center',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },

  item: {
    fontSize: 20,
    color:'#ffffff',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#ffffff',
    color: '#000000'
  }
});
