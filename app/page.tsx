'use client'
import Image from "next/image";
import { APIProvider, Map, Marker, AdvancedMarker, Pin } from "@vis.gl/react-google-maps";

export default function Home() {
  return (<APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
    <div className="flex items-center justify-end h-screen w-screen">
    <Map
      mapId={"sampleId"}
      style={{width: '50%', height: '100%'}}
      defaultCenter={{lat: 22.54992, lng: 0}}
      defaultZoom={5}
      gestureHandling={'greedy'}
      disableDefaultUI={false}
    ><AdvancedMarker position={{lat: 53.53, lng: 10}}  ><Pin background={'green'} glyphColor={'#000'} borderColor={'#000'} glyph={'hello'} /></AdvancedMarker></Map>
    </div>
  </APIProvider>)}