import { SafeAreaView, ScrollView, View, Text, Image, Alert } from "react-native";
import React, { useState } from "react";
import { images } from '../../constants'
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link, Redirect, router } from "expo-router";
import { signIn } from "@/lib/appwrite";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all the fiels')
    }
    setIsSubmitting(true)
    try {
      await signIn(form.email, form.password)
      router.replace('/home')
    } catch (error) {
      Alert.alert("Error", error.message)
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="">
        <View className="min-h-[85vh] h-full px-4 my-6 justify-center">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]" />
          <Text className="text-2xl text-white font-semibold mt-10 font-psemibold">Log in to Aora</Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e: any) => setForm({ ...form, email: e })}
            otherStyle="mt-7"
            keyboardType="email-address"
            placeholder="" />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e: any) => setForm({ ...form, password: e })}
            otherStyle="mt-7"
            keyboardType=""
            placeholder="" />
          <CustomButton
            title="Sign in"
            handlePress={submit}
            containerStyles="w-full mt-7"
            textStyles=""
            isLoading={isSubmitting}
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">Don't have account?</Text>
            <Link href="/sign-up" className="text-lg font-psemibold text-secondary">Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
