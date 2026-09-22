import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

import {styled} from "nativewind";
import { SafeAreaView  as RNSafeAreaView} from "react-native-safe-area-context";
 
const SafeAreaView = styled(RNSafeAreaView);
const SignUp = () => {
  return (
      <SafeAreaView className="flex justify-center items-center mt-24 p-4">
         <Text className="text-4xl font-bold">Sign Up</Text>
         <View className="flex-row w-full justify-between ">
  <TextInput className="mt-4 rounded-lg border border-gray-300 w-45 p-4" placeholder="First Name"/>
         <TextInput className="mt-4 rounded-lg border border-gray-300 w-45 p-4" placeholder="Last Name"/>
         </View>
       
         <TextInput className="mt-4 rounded-lg border border-gray-300 w-full p-4" placeholder="Username"/>
         <TextInput className="mt-4 rounded-lg border border-gray-300 w-full p-4" placeholder="Password"/>
         <TextInput className="mt-4 rounded-lg border border-gray-300 w-full p-4" placeholder="Confirm Password"/>
   
         <Link className="p-4 bg-primary rounded mt-2 w-full text-center text-white font-medium text-xl " href="/">Create an Account</Link>
        <Text className="my-4"> Already have an account? <Link className='text-primary font-medium underline' href="/sign-in">Sign In</Link></Text> 
   
         
       </SafeAreaView>
  )
}

export default SignUp