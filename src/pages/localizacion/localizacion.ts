import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { AgmCoreModule } from '@agm/core';

/**
 * Generated class for the LocalizacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-localizacion',
  templateUrl: 'localizacion.html',
})
export class LocalizacionPage {
  map: GoogleMap;
  flag = false;
  lat;
  lon;
 /* test={
  	lat: "",
  	lon: ""
  }*/
  constructor(private platform:Platform,private geolocations:Geolocation, private googleMaps: GoogleMaps,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalizacionPage');
   // this.loadMap();
  }
  ngAfterViewInit(){
  	
  	this.platform.ready().then(() => {
  		//console.log("llamando");
	 //this.loadMap();
	  this.getPositionNative();
	  /*Sanity check*/
	  /*this.initMap();*/
       
    
    
	});
  	//this.loadMap();
  	
  }
  ionViewWillEnter(){
  	

  }
    initMap() {
    	let google;
        var location = {lat: this.lat, lng: this.lon};
        var map = new google.maps.Map(document.getElementById('map_canvas'), {
          zoom: 4,
          center: location
        });
        var marker = new google.maps.Marker({
          position: location,
          map: map
        });
    }
  /*
  * Create a instance of the map
  */
  	loadMap(){
  		
	  let mapOptions: GoogleMapOptions = {
	    camera: {
	      target: {
	        lat: 43.0741904, // default location
	        lng: -89.3809802 // default location
	      },
	      zoom: 18,
	      tilt: 30
	    }
	  };
	  let element: HTMLElement = document.getElementById("map_canvas");
	  /*this.map = this.googleMaps.create('map_canvas', mapOptions);*/
	  this.map = GoogleMaps.create(element, mapOptions);
	  
	  // Wait the MAP_READY for uses get position
	  /*this.map.one(GoogleMapsEvent.MAP_READY)
	  .then(() => {
	    // Use the methos, the map is ready
	    this.getPosition();
	  })
	  .catch(error =>{
	    console.log(error);
	  });*/

	}

	 getPosition(): void{
	    /**
	    * Obetner posicion mediante google maps
	    *
	    */
	    console.log("obetener posicion");
	    
	   this.map.getMyLocation()
	    .then(response => {
	      	this.map.moveCamera({
	        	target: response.latLng
	    	});

		    this.map.addMarker({
		        title: 'Mi ubicacion',
		        icon: 'blue',
		        animation: 'DROP',
		        position: response.latLng	  
		      });
	    })
	    .catch(error =>{
	      console.log(error);
	    });
	     /**
	    * Obetner posicion mediante un pase de cordenadas nativas
	    *
	    */
	   /* this.map.moveCamera({
	    	target: {lat: latitude, lng: longitude}	

	    });
	    this.map.addMarker({
		    title: 'Mi ubicacion',
		    icon: 'blue',
		    animation: 'DROP',
		    position: {lat: latitude, lng: longitude}	  
		});*/
	    
	}

	getPositionNative(){
		// get current position
       this.geolocations.getCurrentPosition().then(pos => {
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
        this.lat = pos.coords.latitude;
        this.lon = pos.coords.longitude;
        this.flag =true;
       /* this.getPosition(pos.coords.latitude, pos.coords.longitude);*/
     });

      /*const watch = this.geolocations.watchPosition().subscribe(pos => {
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
      });

      // to stop watching
      watch.unsubscribe();*/
	}
	
}
