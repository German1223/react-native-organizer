import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
  RefreshControl,
} from 'react-native';

import style from './style';
import TaskComponent from '../../components/taskComponent/TaskComponent';
import {getTasksData, removeCheckedElem, removeItemFromAsyncStorage} from '../../storage/storage';

type propsType = {
  tasksArr: any[];
  setTasksArr: any
};

const MainPage = ({tasksArr, setTasksArr}: propsType) => {
  const navigation = useNavigation(); 

  // removeItemFromAsyncStorage("tasks")

  const removeItem = () => {
    removeCheckedElem('tasks')
    setTasksArr((prevArr: any) => {
      let tempArr = [...prevArr]
      const arrVal = tempArr.filter((entry: any) => !entry.checked);
      return arrVal
    })
  }

  return (
    <SafeAreaView style={style.safe_area_cont}>
      <FlatList
        // refreshControl={
        //   <RefreshControl refreshing={refreshing} onRefresh={getData} />
        // }
        style={style.container}
        data={tasksArr}
        renderItem={({item, index}) => (
          <TaskComponent index={index} text={item.text} checked={item.checked} setTasksArr={setTasksArr}/>
        )}
        ListEmptyComponent={
          <View style={style.empty_container}>
            <Text style={style.text_button}>No tasks</Text>
          </View>
        }
      />
      <View style={style.button_main_cont}>
        <TouchableOpacity
          style={style.delete_button_cont}
          onPress={() => removeItem()}
          >
          <Text style={style.text_button}>Delete completed</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.button_cont}
          onPress={() => navigation.navigate('AddTask')}>
          <Text style={style.text_button}> + Add new task</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MainPage;
