import Checkbox from "expo-checkbox"; // Import Checkbox từ thư viện expo-checkbox
import React, { useState } from "react"; // Import React và hook useState từ thư viện react
import { TouchableOpacity, Image, View, Text, TextInput } from "react-native"; // Import các component từ thư viện react-native
import Icon from "react-native-vector-icons/FontAwesome"; // Import Icon từ thư viện react-native-vector-icons/FontAwesome

const Screen02 = ({ navigation }) => {
    const [isChecked, setIsChecked] = useState(false); // Trạng thái checkbox
    const [user, setUser] = useState(""); // Trạng thái cho username
    const [email, setEmail] = useState(""); // Trạng thái cho email
    const [password, setPassword] = useState(""); // Trạng thái cho password

    const [info, setInfo] = useState({
        user: "",
        email: "",
        password: "",
    }); // Trạng thái cho thông tin người dùng

    return (
        <View style={{ padding: 20 }}>
            <View style={{ marginBottom: 20 }}>
                <Icon
                    name="arrow-left"
                    size={24}
                    color="#000"
                    onPress={() => {
                        navigation.navigate("Screen01"); // Điều hướng về Screen01 khi nhấn vào icon mũi tên
                    }}
                />
            </View>
            <View style={{ alignItems: "center", marginBottom: 40 }}>
                <Image source={require("../assets/Data/Image 19.png")} style={{ width: 100, height: 100 }} /> {/* Hiển thị hình ảnh */}
                <Text style={{ fontSize: 30, fontWeight: "600", marginVertical: 10 }}>Nice to see you</Text> {/* Hiển thị tiêu đề */}
                <Text style={{ fontSize: 15, color: "gray", textAlign: "center" }}>Create your account</Text> {/* Hiển thị mô tả */}
            </View>
            <View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 15,
                        borderWidth: 1,
                        borderRadius: 20,
                        padding: 10,
                    }}
                >
                    <Icon name="user" size={20} color="gray" style={{ marginRight: 10 }} /> {/* Icon người dùng */}
                    <TextInput placeholder="Enter your username" style={{ flex: 1 }} value={user} onChangeText={setUser} /> {/* Input cho username */}
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 15,
                        borderWidth: 1,
                        borderRadius: 20,
                        padding: 10,
                    }}
                >
                    <Icon name="envelope" size={20} color="gray" style={{ marginRight: 10 }} /> {/* Icon email */}
                    <TextInput placeholder="Enter your email" style={{ flex: 1 }} value={email} onChangeText={setEmail} /> {/* Input cho email */}
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 15,
                        borderWidth: 1,
                        borderRadius: 20,
                        padding: 10,
                    }}
                >
                    <Icon name="lock" size={20} color="gray" style={{ marginRight: 10 }} /> {/* Icon khóa */}
                    <TextInput
                        placeholder="Enter your password"
                        secureTextEntry
                        style={{ flex: 1 }}
                        value={password}
                        onChangeText={setPassword}
                    /> {/* Input cho password */}
                </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 15 }}>
                <Checkbox value={isChecked} onValueChange={setIsChecked} color={isChecked ? "#4630EB" : undefined} /> {/* Checkbox */}
                <Text style={{ marginLeft: 10 }}>
                    I agree with <Text style={{ color: "#ED6263", textDecorationLine: "underline" }}>Terms & Conditions</Text> {/* Điều khoản và điều kiện */}
                </Text>
            </View>
            <View>
                <TouchableOpacity
                    style={{
                        width: "94%",
                        marginLeft: 16,
                        marginTop: 11,
                        backgroundColor: "rgb(34, 200, 247)",
                        paddingVertical: 11,
                        borderRadius: 20,
                    }}
                    onPress={() => {
                        if (user && email && password && isChecked) { // Kiểm tra nếu tất cả các trường đều được điền và checkbox được chọn
                            setInfo({
                                user: user,
                                email: email,
                                password: password,
                            }); // Cập nhật thông tin người dùng
                            navigation.navigate("Screen03"); // Điều hướng đến Screen03
                            console.log(info); // In thông tin người dùng ra console
                        } else {
                            alert("Please fill all fields and agree to the terms."); // Hiển thị cảnh báo nếu có trường nào chưa được điền hoặc checkbox chưa được chọn
                        }
                    }}
                >
                    <Text style={{ color: "white", textAlign: "center" }}>Continue</Text> {/* Nút tiếp tục */}
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Screen02; // Xuất component Screen02
