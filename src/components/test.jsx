import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Marker, Map, TileLayer, Popup } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import axios from 'axios';

import api from '../../services/api';
import Dropzone from '../../components/Dropzone/index';

import './styles.css';

import logo from '../../assets/logo.svg';

//All Continents
interface ContinentsResponse {
    //Continents => http://www.geonames.org/childrenJSON?geonameId=6295630
    geonames: [{
        geonameId: number;
        name: string;
    }]
} 


interface ApiResponse {
    //Countries in North America => http://www.geonames.org/childrenJSON?geonameId=6255149
    geonameId: number;
    toponymName: string;
    countryId: string;
    population: number;
    countryCode: string;
    name: string;
    lng: string;
    lat: string;
} 


interface ApiArrayResponse {
    //Countries in North America => http://www.geonames.org/childrenJSON?geonameId=6255149
    geonames: [ApiResponse];
} 


interface Item {
    id: number;
    title: string;
    image_url: string;
}

const apiUrl = 'http://www.geonames.org/childrenJSON?geonameId=';
const apiIdAllContinents = '6295630';


const CreatePoint = () => {   

    const [ items, setItems] = useState<Item[]>([]);
    const [ countries, setCountries ] = useState<ApiResponse[]>([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ provinces, setProvinces ] = useState<ApiResponse[]>([]);
    const [ cities, setCities ] = useState<ApiResponse[]>([]);

    const [ initialPosition, setInitialPosition ] = useState<[number, number]>([0,0]);

    const [ selectedCountry, setSelectedCountry ] = useState<ApiResponse>({} as ApiResponse);
    const [ selectedProvince, setSelectedProvince ] = useState<ApiResponse>({} as ApiResponse);
    const [ selectedCity, setSelectedCity ] = useState<ApiResponse>({} as ApiResponse);
    const [ selectedPosition, setSelectedPosition ] = useState<[number, number]>([0,0]);
    const [ zoom, setZoom ] = useState<number>(3);
    const [ selectedFile, setSelectedFile ] = useState();

    const [ selectedItems, setSelectedItems ] = useState<number[]>([]);
    const [ formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: ''
    });

    const history = useHistory();
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            const {latitude, longitude} = position.coords;

            setInitialPosition([latitude, longitude]);
            setSelectedPosition([latitude, longitude]);
        })
    }, [])

    useEffect(() => {
        api.get('items')
            .then(response => {
                setItems(response.data);
            })
    }, []);

    //when starts the app
    useEffect(() => {

        const getCountries = async () => {
            setIsLoading(true);
            //getting continents first
            const continentsApiResponse = await axios.get<ContinentsResponse>(`${apiUrl}${apiIdAllContinents}`)
            const continents = continentsApiResponse.data.geonames;
        
            const promisses = continents.map( async continent => axios.get<ApiArrayResponse>(`${apiUrl}${continent.geonameId}`));

            const response = await Promise.all(promisses);
 
            const countriesPerContinent = response.map( countries => countries.data.geonames );
            const countries = countriesPerContinent.reduce<ApiResponse[]>( (acc, c) => [...acc, ...c], []);
           
            setCountries(countries);
            setIsLoading(false);
        }

        getCountries();    
    }, []);
 

    function handleSelectCountry(event: ChangeEvent<HTMLSelectElement>) {
        if (event.target.value === '0') {
            setSelectedCountry({} as ApiResponse); 
            return;
        }
        const countryString = event.target.value;
        const countryObject = JSON.parse(countryString);

        setSelectedCountry(countryObject);
    } 

    function handleSelectProvince(event: ChangeEvent<HTMLSelectElement>) {
        if (event.target.value === '0') {
            setSelectedProvince({} as ApiResponse); 
            return;
        }
        const provinceString = event.target.value;
        const provinceObject = JSON.parse(provinceString);

        setSelectedProvince(provinceObject);
    } 


    //when a country is selected
    useEffect(() => {
        if (!selectedCountry.name) {
            return;
        }

        axios.get<ApiArrayResponse>(`${apiUrl}${selectedCountry.geonameId}`)
            .then(response => {
                const provinces = response.data.geonames;
                setProvinces(provinces);
                setSelectedPosition([
                        parseFloat(selectedCountry.lat), 
                        parseFloat(selectedCountry.lng)])
                setZoom(3);
            });
    }, [selectedCountry]);


    //when a province is selected
    useEffect(() => {
        if (!selectedProvince.name) {
            return;
        }

        axios.get<ApiArrayResponse>(`${apiUrl}${selectedProvince.geonameId}`)
            .then(response => {
                const cities = response.data.geonames;
                setCities(cities);
                setSelectedPosition([
                    parseFloat(selectedProvince.lat), 
                    parseFloat(selectedProvince.lng)
                ]);
                setZoom(7);
            });
    }, [selectedProvince]);

    function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
        if (event.target.value === '0') {
            setSelectedCity({} as ApiResponse); 
            return;
        }
        const cityString = event.target.value;
        const cityObject = JSON.parse(cityString);

        setSelectedCity(cityObject);
        setSelectedPosition([
            parseFloat(cityObject.lat), 
            parseFloat(cityObject.lng)
        ]);
        setZoom(12);
    }

    function handleMapClick(event: LeafletMouseEvent) {
        setSelectedPosition([
            event.latlng.lat,
            event.latlng.lng
        ]);
        setZoom(15);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormData({
            ...formData, 
            [name]: value
        });
    }

    function handleSelectItem(id: number) {
        const alreadySelected = selectedItems.findIndex(item => item === id);

        if (alreadySelected >= 0) {
            const filteredItems = selectedItems.filter(item => item !== id);
            setSelectedItems(filteredItems);
        } else {
            setSelectedItems([...selectedItems, id]);  
        }
      
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const { name, email, whatsapp } = formData;
        const city = selectedCity;
        const province = selectedProvince;
        const country = selectedCountry;
        const [latitude, longitude] = selectedPosition;
        const items = selectedItems;

        const data = new FormData();

        data.append('name', name); 
        data.append('email', email); 
        data.append('whatsapp', whatsapp);
        data.append('country', country.name);
        data.append('province', province.name);
        data.append('city', city.name);
        data.append('latitude', String(latitude));
        data.append('longitude', String(longitude));
        data.append('items', items.join(','));

        if (selectedFile) {
            data.append('image', selectedFile);
        }
 
        await api.post('points', data);

        alert('Collect Point inserted');

        history.push('/');
    }

    return (
        <div id="page-create-point">
            <header>
                <img src={logo} alt="ecollection"/>
                <Link to="/">
                    <FiArrowLeft />
                    Back to Home
                </Link>
            </header>

            <form onSubmit={handleSubmit}>
                <h1>Registration of the <br />collect point</h1>

                <Dropzone onFileUploaded={ setSelectedFile }/>

                <fieldset>
                    <legend>
                        <h2>Data</h2>
                    </legend>
                    <div className="field">
                        <label htmlFor="name">Entity's name</label>
                        <input 
                            type="text"
                            name="name"
                            id="name"
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="email">E-mail</label>
                            <input 
                                type="email"
                                name="email"
                                id="email"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="whatsapp">Whatsapp</label>
                            <input 
                                type="text"
                                name="whatsapp"
                                id="whatsapp"
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>
                        <h2>Address</h2>
                        <span>Sect the address on the map</span>
                    </legend>

                    <Map zoom={zoom} center={selectedPosition} onClick={handleMapClick}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        />
                        <Marker position={selectedPosition}>
                            <Popup>Your collect point is here</Popup>
                        </Marker>
                    </Map>
  
                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="country">Countries</label>
                            <select 
                                name="country" 
                                id="country" 
                                onChange={handleSelectCountry}
                            >
                                <option value="0">{isLoading ? 'Loading Countries...' : 'Select a Country'}</option>
                                {countries.map(country => (
                                    <option key={country.geonameId} value={JSON.stringify(country)}>{country.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="province">Provinces</label>
                            <select 
                                name="province" 
                                id="province" 
                                onChange={handleSelectProvince}
                            >
                                <option value="0">Select a Province</option>
                                {provinces.map(province => (
                                    <option key={province.geonameId} value={JSON.stringify(province)}>{province.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="city">City</label>
                            <select 
                                name="city" 
                                id="city"
                                onChange={handleSelectCity}
                            >
                                <option value="0">Select a City</option>
                                {cities.map(city => (
                                    <option key={city.geonameId} value={JSON.stringify(city)}>{city.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>
                        <h2>Items</h2>
                    </legend>
                    <ul className="items-grid">
                        {items.map( item => (
                            <li 
                                key={item.id} 
                                onClick={() => handleSelectItem(item.id)}
                                className={
                                    selectedItems.includes(item.id) ? 'selected' : ''
                                }
                            >
                                <img src={item.image_url} alt={item.title}/>
                                <span>{item.title}</span>
                            </li>
                        ))}
                    </ul>
                </fieldset>

                <button type="submit">
                    Register collection point
                </button>
            </form>

            
        </div>
    )
}

export default CreatePoint;