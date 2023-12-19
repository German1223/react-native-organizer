import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import MainPage from './pages/mainPage/MainPage';
import AddTaskPage from './pages/addTaskPage/AddTaskPage';
import { colors } from './styles/colors';
import { getTasksData } from './storage/storage';

const App = () => {
  const Stack = createStackNavigator();

  const [tasksArr, setTasksArr] = useState<any[]>([]);
  const getData = async () => {
    const tArr = await getTasksData('tasks');
    const res = await tArr;
    if (res) {
      setTasksArr(JSON.parse(res));
    }
  };

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    console.log(tasksArr)
  }, [tasksArr]);


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          options={() => ({
            // headerShown: false,
            title:"Task List",
            headerStyle: {
              backgroundColor: colors.color2
            },
            headerTintColor: colors.color5,
            initialParams: tasksArr
          })}
        >
          {props => <MainPage tasksArr={tasksArr} setTasksArr={setTasksArr} />}
        </Stack.Screen>
        <Stack.Screen
          name="AddTask"
          options={{
            // headerShown: false,
            headerStyle: {
              backgroundColor: colors.color2
            },
            headerTintColor: colors.color5,
          }}
        >
          {props => <AddTaskPage setTasksArr={setTasksArr}/>}

        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
