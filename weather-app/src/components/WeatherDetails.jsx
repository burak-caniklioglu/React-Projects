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
        </article>
    </div>
  )
}

export default WeatherDetails