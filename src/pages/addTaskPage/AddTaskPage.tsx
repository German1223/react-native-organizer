import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

import style from './style';
import {saveArrayToStorage} from '../../storage/storage';
import {TextInput} from 'react-native-gesture-handler';
import {colors} from '../../styles/colors';
import { useNavigation } from '@react-navigation/native';

type propsType = {
  setTasksArr: any;
};

const AddTaskPage = ({setTasksArr}: propsType) => {
  const [inputVal, setInputVal] = useState<string>();

  const navigation = useNavigation()

  const addData = () => {
    const task = {
      text: inputVal,
      checked: false
    };
    setTasksArr((prevState: any) => [...prevState, task]);
    saveArrayToStorage('tasks', task);
    setInputVal('')
    navigation.navigate("Main")
  };

  const handlerInputValue = (val: string) => {
    setInputVal(val);
  };

  return (
    <SafeAreaView style={style.safe_area_cont}>
      <View style={style.container}>
        <Text style={style.text}>Write down the task </Text>
        <TextInput
          style={style.input}
          placeholder="Type here..."
          onChangeText={handlerInputValue}
          value={inputVal}
          placeholderTextColor={colors.color1}
        />
        <View style={style.button_main_cont}>
          <TouchableOpacity
            onPress={addData}
            style={[style.button_cont, !inputVal && {opacity: 0.3}]}
            disabled={!inputVal}>
            <Text style={style.text_button}>create task</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddTaskPage;
