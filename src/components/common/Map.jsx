import React from 'react';
import GoogleMap from 'google-map-react';
import { Box, Tooltip } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';

const Marker = React.memo(function Marker({ $prerender, markerColor, title }) {
	if ($prerender) {
		return null;
	}
	return (
		<>
			<Tooltip title={title} placement="top">
				<Box display="inline-flex" alignItems="center">
					<Box
						sx={{
							fontSize: 12,
							textShadow:
								'1px 0 0 #fff, 0px 0 0 #fff, 0 0px 0 #fff, 0 0px 0 #fff, 0px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff',
						}}
					>
						<b>{title}</b>
					</Box>

					<RoomIcon style={{ color: markerColor }} />
				</Box>
			</Tooltip>
		</>
	);
});

const Map = React.memo(function Map({ markers = [], mapCenter = { lat: 0, lng: 0 } }) {
	return (
		<>
			<GoogleMap
				bootstrapURLKeys={{
					key: process.env.REACT_APP_MAP_KEY,
				}}
				defaultZoom={0}
				defaultCenter={{ lat: 0, lng: 0 }}
				center={mapCenter}
			>
				{markers.map((marker) => {
					const { id, latitude, longitude, title, markerColor } = marker;

					return <Marker key={id} title={title} lat={latitude} lng={longitude} markerColor={markerColor} />;
				})}
			</GoogleMap>
		</>
	);
});

export default Map;
