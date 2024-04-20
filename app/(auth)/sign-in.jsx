import React, { useState } from "react";
import { Link, router } from "expo-router";
import FormField from "../../components/FormField";
import { View, Text, ScrollView } from "react-native";
import CustomButton from "../../components/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = () => {};

  const [isSubmitting, setIsSubmitting] = useState(false);
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView>
        <View className="justify-center w-full h-full px-5 my-10">
          <Text className="text-4xl text-center text-indigo-600 font-pbold">SIPTATIF</Text>
          <Text className="text-2xl font-semibold text-center text-gray-800 mt-7 font-psemibold">Sign in</Text>
          <FormField title="Email" value={form.email} handleChangeText={(e) => setForm({ ...form, email: e })} otherStyles="mt-7" keyboardType="email-address" />

          <FormField title="Password" value={form.password} handleChangeText={(e) => setForm({ ...form, password: e })} otherStyles="mt-7" />

          <CustomButton title="Sign In" handlePress={() => router.push("/beranda")} containerStyles="mt-7" isLoading={isSubmitting} />
          <View className="flex flex-row justify-center gap-2 pt-5">
            <Text className="text-lg text-gray-500 font-pregular">Don&apos;t have an account?</Text>
            <Link href="/sign-up" className="text-lg text-indigo-600 underline font-psemibold">
              Sign up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
