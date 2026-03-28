// Place Page JavaScript - Monterrey, Mexico
// WDD131 - W03 Assignment

// ========== Wind Chill Calculation ==========

// Static weather values (Metric)
const temperature = 8;   // °C
const windSpeed = 12;    // km/h

/**
 * Calculates the wind chill factor using the metric formula.
 * @param {number} temp - Temperature in °C
 * @param {number} speed - Wind speed in km/h
 * @returns {number} Wind chill temperature in °C
 */
function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

// Determine wind chill display value
const windChillElement = document.getElementById('wind-chill');

// Metric conditions: temp <= 10°C AND wind > 4.8 km/h
if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = `${windChill.toFixed(1)} °C`;
} else {
    windChillElement.textContent = 'N/A';
}

// ========== Footer Dates ==========

// Display current year
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Display last modified date
document.getElementById('lastModified').textContent = `Last Modification: ${document.lastModified}`;
