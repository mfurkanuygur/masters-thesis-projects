// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=${APIKEY}&lang=tr&units=metric`

const apikey=import.meta.env.VITE_API_KEY

export const getApiData = async (locationName) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=${apikey}&lang=tr&units=metric`);
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