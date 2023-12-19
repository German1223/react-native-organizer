import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Check from '../../assets/img/CheckMark';
import {setCheckedElement} from '../../storage/storage';

type PropsType = {
  checked: boolean;
  index: number;
  setTasksArr: any;
};

const CheckboxComponent = ({checked, index, setTasksArr}: PropsType) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
    setCheckedElement('tasks', index);
    setTasksArr((prevArr: any) => {
      const newArr = [...prevArr];
      newArr[index] = {...newArr[index], checked: !newArr[index].checked};
      return newArr;
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleCheckboxToggle}
        style={styles.checkbox}
        activeOpacity={0.7}>
        {isChecked ? <Check /> : <View style={styles.uncheckedBox} />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:5
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#000',
  },
  uncheckedBox: {
    width: 16,
    height: 16,
    borderColor: '#000',
  },
  checkmark: {
    color: '#000',
    fontSize: 18,
  },
});

export default CheckboxComponent;
