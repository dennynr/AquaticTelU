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

export const getpHData = async () => {
    try {
        const response = await fetch("https://api.thingspeak.com/channels/2456264/feeds.json?api_key=AP8FFZVJD4BGR7IC&results=2");
        if (!response.ok) {
            throw new Error("Failed to fetch pH data from ThingSpeak");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching pH data:", error);
        throw error; // Throw the error to handle it in the caller function
    }
}
