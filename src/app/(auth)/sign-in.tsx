import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

import {styled} from "nativewind";
import { SafeAreaView  as RNSafeAreaView} from "react-native-safe-area-context";
 
const SafeAreaView = styled(RNSafeAreaView);
const SignIn = () => {
  return (
    <SafeAreaView className="flex justify-center items-center mt-24 p-4">
      <Text className="text-4xl font-bold">Sign In</Text>
      <TextInput className="mt-4 rounded-lg border border-gray-300 w-full p-4" placeholder="Email or Username"/>
      <TextInput className="mt-4 rounded-lg border border-gray-300 w-full p-4" placeholder="Password"/>

      <Link className="p-4 bg-primary rounded mt-2 w-full text-center text-white font-medium text-xl " href="/">Login</Link>
     <Text className="my-4"> Don&apos;t have an account? <Link className='text-primary font-medium underline' href="/sign-up">Sign Up</Link></Text> 

      
    </SafeAreaView>
  )
}

export default SignIn