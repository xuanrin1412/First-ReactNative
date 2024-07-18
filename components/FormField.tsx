import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import {icons, images} from "../constants"

interface FormFieldProp {
    title: string;
    value: string,
    handleChangeText: (e:any) => void,
    otherStyle: string,
    keyboardType: string,
    placeholder:string
}

const FormField: React.FC<FormFieldProp> = ({ title, value, handleChangeText, otherStyle,placeholder, keyboardType }) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <View className={`space-y-2 ${otherStyle}`}>
            <Text className="text-base text-gray-100 ">{title}</Text>
            <View className="w-full flex-row h-16 px-4 bg-black-100 border-2 border-black-200 rounded-2xl focus:border-secondary items-center">
                <TextInput className="flex-1 text-white font-psemibold text-base"
                value={value}
                placeholder={placeholder}
                placeholderTextColor="#7b7b8b"
                onChangeText={handleChangeText}
                secureTextEntry={title === "Password" && !showPassword}/>

                {title === "Password"  && (
                    <TouchableOpacity onPress={()=>setShowPassword(!showPassword)}>
                        <Image 
                        className="h-6 w-6"  
                        source={ !showPassword ? icons.eye: icons.eyeHide}
                        resizeMode="contain"/>
                    </TouchableOpacity>
                ) }
            </View>
        </View>
    );
};

export default FormField;
