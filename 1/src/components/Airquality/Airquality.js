import React, {useEffect, useRef, useState} from 'react';
import mapboxgl from 'mapbox-gl';
import './Airquality.scss';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiYnN3NzIwMTAiLCJhIjoiY2tmbGFsaThyMDBvbDJzbnhza2d3aHZqbCJ9.hertY8pbXwexBE5nni0j3A';

const Airquality = () => {
    const mapContainer = useRef(null);
    const [locationInfo] = useState({
        lng: 31.1828699,
        lat: 48.383022,
        zoom: 6
    });

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/outdoors-v11',
            center: [locationInfo.lng, locationInfo.lat],
            zoom: locationInfo.zoom
        });
    },
    );

    return (
        <section className={'air-q container'}>
            <h2 className="air-q-title">
                Индекс качества воздуха в режиме реального времени
            </h2>
            <div className="air-q-map" ref={mapContainer}/>
            <p className="air-q-text">Для того чтобы узнать уровень загрязнения атмосферного воздуха (качество воздуха) в городе Киев, необходимо выбрать соответствующую станцию мониторинга на карте выше.</p>
        </section>
    );
};

export default Airquality;