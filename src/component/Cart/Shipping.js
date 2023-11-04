import React, { Fragment, useState } from 'react';
import CheckOutSteps from './CheckOutSteps';
import MetaData from '../Layout/MetaData';
import { Home, LocationCity, Phone, PinDrop, Public, TransferWithinAStation } from '@mui/icons-material';
import { Country, State } from 'country-state-city';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { saveShippingInfo } from '../action/cartAction';

const Shipping = () => {
    const dispatch = useDispatch();
    const { shippingInfo } = useSelector((state) => state.cart);

    // navigation 
    const navigate = useNavigate();

    // state 
    const [address, setAddress] = useState(shippingInfo?.address);
    const [city, setCity] = useState(shippingInfo?.city);
    const [state, setState] = useState(shippingInfo?.state);
    const [country, setCountry] = useState(shippingInfo?.country);
    const [pinCode, setPinCode] = useState(shippingInfo?.pinCode);
    const [phoneNumber, setPhoneNumber] = useState(shippingInfo?.phoneNumber);

    const shippingSubmit = (e) => {

        e.preventDefault();
        if (phoneNumber.length < 10 || phoneNumber.length > 10) {
            toast.warn("Phone number must be 10 digit");
            return;
        }
        dispatch(saveShippingInfo({ address, city, state, country, pinCode, phoneNumber }))
        navigate("/order/confirm");

    }

    return (
        <Fragment>
            <MetaData title="Shipping Details" />
            <CheckOutSteps activeStep={0} />
            <div className=" bg-gray-200 rounded-md  flex lg:justify-center lg:items-center flex-col" style={{ margin: '0 auto', width: '100vh', height: '70vh' }}>
                <h2 className='text-3xl text-primary font-bold border-2 border-b-green-700'> Shipping Details </h2>
                <form
                    onSubmit={shippingSubmit}
                    encType='multipart/form-date'
                    className='w-full mt-10 px-12 flex lg:justify-center lg:items-center flex-col'>
                    <div>
                        <Home style={{ fontSize: 60, color: 'green', paddingRight: 10 }} />
                        <input
                            type="text"
                            placeholder="Address"
                            required
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="input input-bordered input-secondary w-96"
                            style={{ outline: 'none' }}
                        />
                    </div>
                    <div>
                        <LocationCity style={{ fontSize: 60, color: 'green', paddingRight: 10 }} />
                        <input
                            type="text"
                            placeholder="City"
                            required
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="input input-bordered input-secondary w-96"
                            style={{ outline: 'none' }}
                        />
                    </div>
                    <div>
                        <PinDrop style={{ fontSize: 60, color: 'green', paddingRight: 10 }} />
                        <input
                            type="number"
                            placeholder="Pin code"
                            required
                            value={pinCode}
                            onChange={(e) => setPinCode(e.target.value)}
                            className="input input-bordered input-secondary w-96"
                            style={{ outline: 'none' }}
                        />
                    </div>
                    <div>
                        <Phone style={{ fontSize: 60, color: 'green', paddingRight: 10 }} />
                        <input
                            type="number"
                            placeholder="Phone number"
                            required
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="input input-bordered input-secondary w-96"
                            style={{ outline: 'none' }}
                        />
                    </div>
                    <div>
                        <Public style={{ fontSize: 60, color: 'green', paddingRight: 10 }} />
                        <select
                            required
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            className="input input-bordered input-secondary w-96"

                        >
                            <option value=""> Country </option>
                            {
                                Country &&
                                Country.getAllCountries().map((item) => (
                                    <option key={item?.isoCode} value={item?.isoCode}> {item?.name} </option>
                                ))
                            }
                        </select>
                    </div>
                    {
                        Country && (
                            <div>
                                <TransferWithinAStation style={{ fontSize: 60, color: 'green', paddingRight: 10 }} />
                                <select
                                    required
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    className="input input-bordered input-secondary w-96"

                                >
                                    <option value="">State</option>
                                    {State &&
                                        State.getStatesOfCountry(country).map((item) => (
                                            <option key={item.isoCode} value={item.isoCode}>
                                                {item.name}
                                            </option>
                                        ))}
                                </select>
                            </div>
                        )
                    }
                    <div>
                        <input
                            type='submit'
                            className="btn btn-primary text-white w-96 ml-16"
                            disabled={state ? false : true}
                            value="Continue"
                        />
                    </div>
                </form>
            </div>
        </Fragment>
    );
};

export default Shipping;