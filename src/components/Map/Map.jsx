// import FetchMap from './FetchMap'
import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api'
import { useMemo } from 'react'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import './Map.css'

const Map = () => {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
	})

	const center = useMemo(() => ({ lat: 54.440527, lng: 18.560128 }), [])
	return (
		<div className='container'>
			{!isLoaded ? (
				<LoadingSpinner />
			) : (
				<GoogleMap mapContainerClassName='map-container' center={center} zoom={10}>
					<MarkerF position={center} key={1} name={'Pa'}></MarkerF>
				</GoogleMap>
			)}
		</div>
	)
}
export default Map
