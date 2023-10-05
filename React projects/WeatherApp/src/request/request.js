const APIKEY = "057275c30dc7aecc34c49be69110d6d1"
// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=${APIKEY}&lang=tr&units=metric`

export const getApiData = async (locationName) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=${APIKEY}&lang=tr&units=metric`);
        if (!response.ok) {
            throw new Error('HTTP Hatası: ' + response.status);
        }
        const data = await response.json();
        return data;
    } 
    catch (error) {
        throw new Error('Hata: ' + error.message);
    }
};