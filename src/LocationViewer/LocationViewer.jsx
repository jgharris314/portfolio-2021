import Cartesian3 from "cesium/Source/Core/Cartesian3";
import Color from "cesium/Source/Core/Color";
import React from "react";
import { Viewer, Entity, CameraFlyTo } from "resium";

import { Ion } from 'cesium';

Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwY2RjNGEwYi0zYjZhLTQ4YjItOGM0My0xYjljOTU0ZDEyNTciLCJpZCI6NTkwODMsImlhdCI6MTYyMzgxMjUyNH0.4cMDMgx5zKlijKAyCj-icsYePjT7V6g8LyGlXsNEyag";

export default function LocationViewer() {
    
    const dodgeCity = Cartesian3.fromDegrees( -100.0170800, 37.7528000)
    const kansasCity = Cartesian3.fromDegrees(-94.6274600, 39.1141700)
    const denver = Cartesian3.fromDegrees(-104.9847000, 39.7391500, 100)  
    const pointGraphics = { pixelSize: 10, color: Color.GREENYELLOW}; 

    const dodgeCityFlyTo = Cartesian3.fromDegrees( -100.0170800, 37.7528000, 9000000)

    return (
        <div>
        <h3>Places I have lived</h3>
        <Viewer> 
            <Entity position={dodgeCity} point={pointGraphics} description={"Dodge City, KS"}/>
            <Entity position={kansasCity} point={pointGraphics} description={"Kansas City, KS"}/>
            <Entity position={denver} point={pointGraphics} description={"Denver, CO"}/>
            <CameraFlyTo destination={dodgeCityFlyTo} />
        </Viewer>
        </div>
    )
}