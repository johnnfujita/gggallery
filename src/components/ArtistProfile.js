import React from 'react'

const ArtistProfile = () => {
    return (
        <div className="artist-container">
            <model-viewer src="../../shared-assets/models/Astronaut.glb" ar ar-modes="webxr scene-viewer quick-look" ar-scale="auto" camera-controls alt="A 3D model of an astronaut" skybox-image="../../shared-assets/environments/aircraft_workshop_01_1k.hdr" ios-src="../../shared-assets/models/Astronaut.usdz"></model-viewer>
        </div>
    )
}

export default ArtistProfile
