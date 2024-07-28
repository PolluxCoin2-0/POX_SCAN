import { useEffect, useState } from "react";
import { SearchBarExpand } from "../../components";
import { getBlockchainNodeMapData } from "../../utils/axios/Blockchain";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Nodes = () => {
  const [mapData, setMapData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const NodeMapData = await getBlockchainNodeMapData();
        setMapData(NodeMapData?.message);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="px-4 md:px-4 lg:px-4 xl:px-12 2xl:px-12">
      {/* Search Box */}
      <div>
        <SearchBarExpand />
      </div>

      {/* Nodes Distribution >> Map */}
      <div className="pb-14">
        <div className="flex flex-row justify-between font-bold">
          <p className="text-lg md:text-2xl font-bold pb-6">Nodes Distribution</p>
          <div className="flex space-x-6">
            <p>Nodes: {mapData.length}</p>
            <p>Countries/Regions: {new Set(mapData.map(item => item.latitude)).size}</p>
          </div>
        </div>

        {/* Map Integration */}
        <div className="bg-white shadow-lg rounded-2xl overflow-x-auto">
          <MapContainer center={[12.8996, 80.2209]} zoom={3} scrollWheelZoom={false} style={{ height: '600px', width: '100%',zIndex:10 }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {mapData.map((node, index) => (
              <Marker key={index} position={[node.latitude, node.longitude]}>
                <Popup>
                  Node: {node.latitude},{node.longitude}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Nodes;
