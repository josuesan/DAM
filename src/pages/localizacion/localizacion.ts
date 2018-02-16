import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  //Marker
} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
//import { AgmCoreModule } from '@agm/core';

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
  public map: GoogleMap;
  public flag = false;
  public lat;
  public lon;
 
  constructor(private platform:Platform,private geolocations:Geolocation, private googleMaps: GoogleMaps,public navCtrl: NavController, public navParams: NavParams) {
  }
	public logout() {
    localStorage.clear();
    this.navCtrl.popToRoot().then(()=>{
      this.navCtrl.setRoot("LoginPage");
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalizacionPage');
  }
  ngAfterViewInit(){
  	this.platform.ready().then(() => {
	  this.getPositionNative(); 
	});
  
  	
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
	  this.map = GoogleMaps.create(element, mapOptions);
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
	}

	getPositionNative(){
		// get current position
       this.geolocations.getCurrentPosition().then(pos => {
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
        this.lat = pos.coords.latitude;
        this.lon = pos.coords.longitude;
        this.flag =true;
     });
	}
	
}
