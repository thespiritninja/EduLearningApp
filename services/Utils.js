import AsyncStorage from "@react-native-async-storage/async-storage";

const setUserAuth = async (value) => {
    await AsyncStorage.setItem('userData', JSON.stringify(value))
}

const getUserAuth = async () => {
    const result = await AsyncStorage.getItem('userData');
    return JSON.parse(result);
}

const clearUserLogin = ()=>{
    AsyncStorage.clear();
}

export default {
    setUserAuth,
    getUserAuth,
    clearUserLogin,
}