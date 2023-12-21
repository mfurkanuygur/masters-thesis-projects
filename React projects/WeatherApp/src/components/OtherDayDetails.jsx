import PropTypes from "prop-types";

function OtherDayDetails({ weather }) {
	let min_temp = [...weather].sort((a, b) => a.main.temp_min - b.main.temp_min);
	let max_temp = [...weather].sort((a, b) => b.main.temp_max - a.main.temp_max);
	const day = new Date(weather[0].dt_txt).getDay();
	let dayName;
	switch (day) {
		case 0:
			dayName = "Sunday";
			break;
		case 1:
			dayName = "Monday";
			break;
		case 2:
			dayName = "Tuesday";
			break;
		case 3:
			dayName = "Wednesday";
			break;
		case 4:
			dayName = "Thursday";
			break;
		case 5:
			dayName = "Friday";
			break;
		case 6:
			dayName = "Saturday";
			break;
	}
	return (
		<div className="other-day">
			<h4>{dayName}</h4>
			<div className="other-day-text">
				<p className="">
					<i className="fa-solid fa-temperature-low"></i>
					{Math.floor(min_temp[0].main.temp_min)}°C
				</p>
				<span>/</span>
				<p>

					{Math.floor(max_temp[0].main.temp_max)}°C
					<i className="fa-solid fa-temperature-high"></i>
				</p>

			</div>
		</div>
	);
}

OtherDayDetails.propTypes = {
	weather: PropTypes.array,
	day: PropTypes.string,
	min_temp: PropTypes.number,
	max_temp: PropTypes.number,
	dayName: PropTypes.string,
	icon: PropTypes.string,
};

export default OtherDayDetails;
