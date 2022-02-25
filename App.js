import React from "react";
import {
  NativeBaseProvider,
  extendTheme,

} from "native-base";

import LoginScreen from "./components/LoginScreen";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Native']);

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider>
      <LoginScreen />
    </NativeBaseProvider>
  );
}


