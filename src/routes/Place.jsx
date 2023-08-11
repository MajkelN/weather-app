import { useState, useEffect } from "react"
import { useLoaderData } from "react-router-dom"
import { WrapperPlace, WrapperWeather, WrapperStatusWeather, ReturnLink } from "../Components/Wrapper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Place() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    
    const setDimension = () => {
        setScreenWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', setDimension);
        
        return(() => {
            window.removeEventListener('resize', setDimension);
        })
    }, [screenWidth])

    const { location, current, forecast: {forecastday} } = useLoaderData();
    const currentWeather = forecastday[0].day;
    const currentAllDay = forecastday[0].hour;
    const tomorrowWeather = forecastday[1].day;
    const tomorrowAllDay = forecastday[1].hour;

    return (
        <>
            <ReturnLink style={{fontSize: "2rem", marginBottom: "15px"}}to="/"><FontAwesomeIcon icon={faCircleArrowLeft} /> Return to home page</ReturnLink>
            <WrapperPlace>
                <header>
                    <img src={current.condition.icon} alt={current.condition.text} />
                    <h2>{location.name}</h2>
                </header>
                <WrapperWeather>
                    <h3>Current weather</h3>
                    <WrapperStatusWeather id="currentWeather">
                        <p>Temp.: {current.temp_c}°C</p>
                        <p>Chance of rain: {currentWeather.daily_chance_of_rain}%</p>
                        <p>Clouds: {current.cloud}%</p>
                        <p>Rain/Snow: {current.precip_mm}mm</p>
                        <p>Wind: {current.wind_kph} km/h</p>
                        <p>Humidity: {current.humidity}%</p>
                        <p>Pressure: {current.pressure_mb} hPa</p>
                        <p>UV: {current.uv}</p>
                    </WrapperStatusWeather>
                    <Swiper
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={10}
                        slidesPerView={screenWidth >= 1550 ? 4 : screenWidth >= 1150 ? 3 : screenWidth >= 900 ? 5 : screenWidth >= 700 ? 4 : screenWidth >= 550 ? 3 : 2}
                        navigation
                        pagination={{ clickable: true }}
                        >
                        {currentAllDay.map((item,index) => (
                            <SwiperSlide key={index}>
                                <img src={item.condition.icon} alt={item.condition.text} />
                                Temp:{item.temp_c}°C
                                <p><b>{item.time.slice(-5)}</b></p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </WrapperWeather>
                <WrapperWeather>
                    <h3>Tomorrow weather</h3>
                    <WrapperStatusWeather id="tomorrowWeather">
                        <img src={tomorrowWeather.condition.icon} alt={tomorrowWeather.condition.text} />
                        <p>Temp.: {tomorrowWeather.maxtemp_c}°C</p>
                        <p>Chance of rain: {tomorrowWeather.daily_chance_of_rain}%</p>
                        <p>Rain/Snow: {tomorrowWeather.totalprecip_mm}mm</p>
                        <p>Wind: {tomorrowWeather.maxwind_kph} km/h</p>
                        <p>Humidity: {tomorrowWeather.avghumidity}%</p>
                        <p>UV: {tomorrowWeather.uv}</p>
                    </WrapperStatusWeather>
                    <Swiper
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={10}
                        slidesPerView={screenWidth >= 1550 ? 4 : screenWidth >= 1150 ? 3 : screenWidth >= 900 ? 5 : screenWidth >= 700 ? 4 : screenWidth >= 550 ? 3 : 2}
                        navigation
                        pagination={{ clickable: true }}
                        >
                        {tomorrowAllDay.map((item,index) => (
                            <SwiperSlide key={index}>
                                <img src={item.condition.icon} alt={item.condition.text} />
                                <p>Temp:{item.temp_c}°C</p>
                                <p><b>{item.time.slice(-5)}</b></p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </WrapperWeather>
            </WrapperPlace>
        </>
    )
}