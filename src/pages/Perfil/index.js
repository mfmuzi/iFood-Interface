import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from './style';
import {Text} from 'react-native';

export default function Perfil() {
  return (
    <>
      <StatusBar style="theme-dark" />
      <SafeAreaView>
       <Text>Perfil</Text>
      </SafeAreaView>
    </>
  );
}

