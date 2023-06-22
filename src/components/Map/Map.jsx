// import FetchMap from './FetchMap'
import { GoogleMap, MarkerF, useLoadScript, InfoWindowF } from '@react-google-maps/api'
import { useMemo, useState } from 'react'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import './Map.css'
import { homes } from '../../homes'

const Map = () => {
	const [activeMarker, setActiveMarker] = useState(null)

	const handleActiveMarker = (marker) => {
		if (marker === activeMarker) {
			return
		}
		setActiveMarker(marker)
	}

	const { isLoaded } = useLoadScript({
		googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
	})

	const center = useMemo(() => ({ lat: 54.440527, lng: 18.560128 }), [])
	return (
		<div className='container'>
			{!isLoaded ? (
				<LoadingSpinner />
			) : (
				<GoogleMap mapContainerClassName='map-container' center={center} zoom={11}>
					{homes.map(({ id, name, surname, coordinates }) => {
						return (
							<MarkerF
								position={coordinates}
								key={id}
								name={name}
								title={name + ' ' + surname}
								onClick={() => handleActiveMarker(id)}>
								{activeMarker === id ? (
									<InfoWindowF onCloseClick={() => setActiveMarker(null)}>
										<h3>{name + ' ' + surname}</h3>
									</InfoWindowF>
								) : null}
							</MarkerF>
						)
					})}
				</GoogleMap>
			)}
		</div>
	)
}
export default Map
