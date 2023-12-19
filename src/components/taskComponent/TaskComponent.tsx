import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import style from './style';
import CheckboxComponent from '../checkboxComponent/CheckboxComponent';
import Trash from '../../assets/img/Trash';
import { removeOneElem } from '../../storage/storage';

type PropsType = {
  index: number;
  text: string;
  checked: boolean;
  setTasksArr: any;
};

const TaskComponent = ({index, text, checked, setTasksArr}: PropsType) => {

  const removeAction = () => {
    removeOneElem('tasks',index)
    setTasksArr((prevArr: any) => {
      let tempArr = [...prevArr]
      tempArr.splice(index, 1);
      return tempArr
    })
  }

  return (
    <View style={style.container}>
      <Text style={style.text}>
        {index + 1}.{text}
      </Text>
      <View style={{display: 'flex', flexDirection: 'column'}}>
        <CheckboxComponent
          checked={checked}
          index={index}
          setTasksArr={setTasksArr}
        />
        <TouchableOpacity style={{marginTop:20}} onPress={() => {removeAction()}}>
          <Trash />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskComponent;
