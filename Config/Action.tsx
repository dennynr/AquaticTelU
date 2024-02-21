import firebaseApp from "./firebase"

export const getDeviceData = async () => {
    try {
        const deviceDataRef = firebaseApp.database().ref("devices/")
    const snapshot = await deviceDataRef.once("value")
    const deviceData = snapshot.val();
    return deviceData;
    } catch (error) {
        console.error("Error fetching device data:", error);
        throw error; // Throw the error to handle it in the caller function
    }
}
