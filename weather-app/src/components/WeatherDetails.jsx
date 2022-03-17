import React from 'react'

function WeatherDetails() {
  return (
    <div>
        <article className="widget">
            <div className="weatherIcon">
                <i className="wi wi-day-sunny"></i>
            </div>
            <div className="weatherInfo">
                <div className="temperature">
                    <span>23.99&deg;C</span>
                </div>
                <div className="description">
                    <div className="weatherCondition">sunny</div>
                    <div className="place">
                        Istanbul, TR
                    </div>
                </div>
            </div>
            <div className="date">{new Date().toLocaleString()}</div>
            <div className="extra-temp">
                <div className="temp-info-minmax">
                    <div className="two-sided-section">
                        <p><i className={"wi wi-sunset"}></i></p>
                        <p className="extra-info-leftside">
                            6:30 PM <br />
                            Sunset
                        </p>
                    </div>

                    <div className="two-sided-section">
                        <p><i className={"wi wi-humidity"}></i></p>
                        <p className="extra-info-leftside">
                            28 <br />
                            Humidity
                        </p>
                    </div>
                </div>

                <div className="temp-info-minmax">
                    <div className="two-sided-section">
                        <p><i className={"wi wi-rain"}></i></p>
                        <p className="extra-info-leftside">
                            35 <br />
                            Pressure
                        </p>
                    </div>

                    <div className="two-sided-section">
                        <p><i className={"wi wi-strong-wind"}></i></p>
                        <p className="extra-info-leftside">
                            23 <br />
                            Speed
                        </p>
                    </div>

                </div>
            </div>
        </article>
    </div>
  )
}

export default WeatherDetails