import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveArrayToStorage = async (key: any, array: any) => {
  try {
    let arrVal;
    let currArr;
    const value = await AsyncStorage.getItem(key);
    if (value?.length) {
      arrVal = JSON.parse(value);
      currArr = [...arrVal, array];
    } else {
      currArr = [array];
    }

    const jsonValue = JSON.stringify(currArr);

    await AsyncStorage.setItem(key, jsonValue);

    console.log(`Array saved successfully with key: ${key}`);
  } catch (error) {
    console.error('Error saving array to AsyncStorage:', error);
  }
};

export const getTasksData = async (key: any) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log('Value from AsyncStorage:', value);
      return value;
    } else {
      return [];
    }
  } catch (e) {
    console.error('Error retrieving data from AsyncStorage:', e);
  }
};

export const removeItemFromAsyncStorage = async (key: any) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log(`Item with key '${key}' removed from AsyncStorage`);
  } catch (error) {
    console.error(
      `Error removing item with key '${key}' from AsyncStorage:`,
      error,
    );
  }
};

export const setCheckedElement = async (key: any, index: number) => {
  try {
    let arrVal;
    const value = await AsyncStorage.getItem(key);
    if (value?.length) {
      arrVal = JSON.parse(value);
      arrVal[index].checked = !arrVal[index].checked;
    }
    const jsonValue = JSON.stringify(arrVal);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error(
      `Error removing item with key '${key}' from AsyncStorage:`,
      error,
    );
  }
};

export const removeCheckedElem = async (key: any) => {
  try {
    let arrVal;
    const value = await AsyncStorage.getItem(key);
    if (value?.length) {
      arrVal = JSON.parse(value);
      arrVal = arrVal.filter((entry: any) => !entry.checked);
    }
    console.log(arrVal);
    const jsonValue = JSON.stringify(arrVal);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error(
      `Error removing item with key '${key}' from AsyncStorage:`,
      error,
    );
  }
};

export const removeOneElem = async (key: any, index: number) => {
  try {
    let arrVal;
    const value = await AsyncStorage.getItem(key);
    if (value?.length) {
      arrVal = JSON.parse(value);
      arrVal.splice(index, 1);
    }
    console.log(arrVal);
    const jsonValue = JSON.stringify(arrVal);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error(
      `Error removing item with key '${key}' from AsyncStorage:`,
      error,
    );
  }
};
