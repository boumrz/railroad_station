import React from 'react';
import qs from 'querystring';
import { Field, Form, getFormValues } from 'redux-form';
import PurchaseTicket from '../../components/PurchaseTicket';
import {
    RegisterTicket,
    FormBodyRegisterTicket,
    FormButtonRegisterTicket,
    FormInputRegisterTicket,
} from './styles';

export class TicketPurchaseView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isRegister: false,
            id: null,
            firstname: '',
            surname: '',
            patronymic: '',
            trainNumber: null,
            carNumber: null,
            placeNumber: null,
            stationLandingPassenger: '',
            endStationPassenger: '',
            departureDatePassenger: '',
            departureTimePassenger: '',
            departureDateTrain: '',
            travelTimePassenger: '',
            arrivalTimePassenger: '',
            arrivalDatePassenger: '',
            typeOfCar: '',
            ticketPrice: null,
        }
    }

    handleClickRegister = () => {
        this.setState({
            isRegister: true,
        });
    }

    handleSubmitRegister = () => {
        const { addTicket } = this.props;
        const { 
            id,
            firstname,
            surname,
            patronymic,
            trainNumber,
            carNumber,
            placeNumber,
            stationLandingPassenger,
            endStationPassenger,
            departureDatePassenger,
            departureTimePassenger,
            departureDateTrain,
            travelTimePassenger,
            arrivalTimePassenger,
            arrivalDatePassenger,
            typeOfCar,
            ticketPrice,
        } = this.state;
        addTicket({
            id,
            firstname,
            surname,
            patronymic,
            trainNumber,
            carNumber,
            placeNumber,
            stationLandingPassenger,
            endStationPassenger,
            departureDatePassenger,
            departureTimePassenger,
            departureDateTrain,
            travelTimePassenger,
            arrivalTimePassenger,
            arrivalDatePassenger,
            typeOfCar,
            ticketPrice,
        });
    }

    handleChangeInputRegisterTicket = (event) => {
        const value = event.target.value;

        switch(event.target.dataset.name) {
            case 'firstname': {
                this.setState({
                    firstname: value,
                });

                return;
            }
            case 'surname': {
                this.setState({
                    surname: value,
                });

                return;
            }
            case 'patronymic': {
                this.setState({
                    patronymic: value,
                });

                return;
            }
            case 'carNumber': {
                this.setState({
                    carNumber: value,
                });

                return;
            }
            case 'placeNumber': {
                this.setState({
                    placeNumber: value,
                });

                return;
            }
            case 'typeOfCar': {
                this.setState({
                    typeOfCar: value,
                });

                return;
            }
            default: {
                return null;
            }
        }
    }

    renderRegisterTicket = () => {
        const { targetTicket } = this.props;

        this.setState({
            trainNumber: targetTicket.train_number,
            departureDatePassenger: targetTicket.train_departure_date,
            departureDateTrain: targetTicket.train_departure_date,
            stationLandingPassenger: targetTicket.from_station,
            endStationPassenger: targetTicket.to_station,
            departureTimePassenger: targetTicket.train_departure_time,
            travelTimePassenger: targetTicket.train_travel_time,
            arrivalTimePassenger: targetTicket.train_arrival_time,
            arrivalDatePassenger: targetTicket.train_arrival_date,
            ticketPrice: targetTicket.train_ticket_price,
        });

        return (
            <RegisterTicket>
                <FormBodyRegisterTicket>
                    <FormInputRegisterTicket data-name="surname" onChange={this.handleChangeInputRegisterTicket} placeholder="Фамилия"/>
                    <FormInputRegisterTicket data-name="firstname" onChange={this.handleChangeInputRegisterTicket} placeholder="Имя"/>
                    <FormInputRegisterTicket data-name="patronymic" onChange={this.handleChangeInputRegisterTicket} placeholder="Отчество"/>
                    <FormInputRegisterTicket data-name="carNumber" onChange={this.handleChangeInputRegisterTicket} placeholder="Номер вагона"/>
                    <FormInputRegisterTicket data-name="placeNumber" onChange={this.handleChangeInputRegisterTicket} placeholder="Номер места"/>
                    <FormInputRegisterTicket data-name="typeOfCar" onChange={this.handleChangeInputRegisterTicket} placeholder="Тип вагона"/>
                    <FormButtonRegisterTicket 
                        onClick={this.handleSubmitRegister} 
                        type="submit"
                    >
                        Купить билет
                    </FormButtonRegisterTicket>
                </FormBodyRegisterTicket>
            </RegisterTicket>
        )
    }

    componentDidMount() {
        const { purchaseTicket } = this.props;
        purchaseTicket(localStorage.getItem('purchaseTicket'));
    }

    render() {
        const { isLoading, isError, isPurchaseTicket, history, isAuth } = this.props;
        console.log('isAuth', isPurchaseTicket);
        if(isPurchaseTicket && isAuth) {
            history.push('/office');
        } 
        if(isPurchaseTicket && !isAuth) {
            history.push('/login');
        }

        return (
            <PurchaseTicket 
                isRegister={this.state.isRegister} 
                handleClickRegister={this.handleClickRegister} 
                renderRegisterTicket={this.renderRegisterTicket}
            />
        );  
    }
}