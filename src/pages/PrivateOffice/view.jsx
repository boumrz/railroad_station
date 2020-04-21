import React from 'react';
import { Redirect } from 'react-router';
import moment from 'moment';
import { checkUser } from '../../utils/checkUser';
import {
    MainContainer,
    ContentContainer,
    HeaderContainer,
    BodyContainer,
    FooterContainer,
    HomePageRedirect,
    LogOffPageRedirect,
    PersonalOfficeSpan,
    TripsOptionMenu,
    ScheduledTripsButton,
    PastTripsButton,
    TripsInfoPopup,
    InfoTickets,
    DateTickets,
    AppointmentTickets,
    AmountTickets,
    DateDeparture,
    DateArrival,
    Date,
    Time,
    Text,
    FromStation,
    ToStation,
    FromBox,
    ToBox,
    CarBox,
    TrainNumber,
    CarNumber,
    PlaceNumber,
    TextMain,
    TicketPrice,
    TypeCar,
} from './styles';

export class PrivateOfficeView extends React.Component {
    state = {
        isActiveScheduled: (localStorage.getItem('isActiveScheduled') === 'true') || 
            !(localStorage.getItem('isActivePast') && true),
        isActivePast: localStorage.getItem('isActivePast') === 'true',
    }

    handleClickScheduledTripsButton = () => {
        localStorage.setItem('isActiveScheduled', true);
        localStorage.setItem('isActivePast', false);

        this.setState({
            isActiveScheduled: true,
            isActivePast: false,
        });
    }

    handleClickPastTripsButton = () => {
        localStorage.setItem('isActiveScheduled', false);
        localStorage.setItem('isActivePast', true);
        
        this.setState({
            isActiveScheduled: false,
            isActivePast: true,
        });
    }

    handleClickLogout = () => {
        const { history, logout } = this.props;

        logout();
        localStorage.setItem('IS_AUTH', false);

        history.push('/');  
    }

    handleClickToHome = () => {
        const { history } = this.props;

        history.push('/');
    }

    componentDidMount = () => {
        const { isAuthAction, isAuth, compareUsersTickets } = this.props;

        compareUsersTickets();

        if (localStorage.getItem('IS_AUTH') === 'true') {
            isAuthAction();
        } 
    }

    render() {
        const { isActivePast, isActiveScheduled } = this.state;
        const { isAuth, responseUsers, responseTickets } = this.props;

        let currentTickets = [];
        let currentUser = {};

        let scheduledTickets = [];
        let pastTickets = [];

        Array.isArray(responseUsers) && responseUsers.map((item) => {
            if (item.login === localStorage.getItem('MY_LOGIN')) {
                currentUser = item;
            }
        });

        let j = 0;
        if (responseTickets) {
            for (let i = 0; i < responseTickets.length; i++) {
                if (responseTickets[i].firstname === currentUser.firstname && 
                    responseTickets[i].surname === currentUser.surname &&
                    responseTickets[i].patronymic === currentUser.midname) {

                    currentTickets[j] = responseTickets[i];
                    j += 1;
                }
            }
        }

        let pastTicket = 0;
        Array.isArray(currentTickets) && currentTickets.map((item) => {
            if (moment(item.departureDatePassenger).format("DD-MM-YYYY") < moment().format("DD-MM-YYYY")) {
                pastTickets[pastTicket] = item;
                pastTicket += 1;
            }
        });

        let scheduledTicket = 0;
        Array.isArray(currentTickets) && currentTickets.map((item) => {
            if (moment(item.departureDatePassenger).format("DD-MM-YYYY") >= moment().format("DD-MM-YYYY")) {
                scheduledTickets[scheduledTicket] = item;
                scheduledTicket += 1;
            }
        });

        if (!isAuth) return <Redirect to="/login" />;

        return (
            <MainContainer>
                <ContentContainer>
                    <HeaderContainer>
                        <HomePageRedirect onClick={this.handleClickToHome}>На главную</HomePageRedirect>
                        <LogOffPageRedirect onClick={this.handleClickLogout}>Выйти</LogOffPageRedirect>
                    </HeaderContainer>
                    <BodyContainer>
                        <PersonalOfficeSpan>Личный кабинет</PersonalOfficeSpan>
                        <TripsOptionMenu>
                            <ScheduledTripsButton 
                                onClick={this.handleClickScheduledTripsButton} 
                                isActiveScheduled={isActiveScheduled}
                            >
                                Запланированные поездки
                            </ScheduledTripsButton>
                            <PastTripsButton 
                                onClick={this.handleClickPastTripsButton} 
                                isActivePast={isActivePast}
                            >
                                Прошедшие поездки
                            </PastTripsButton>
                        </TripsOptionMenu>
                        <TripsInfoPopup>
                            {(isActiveScheduled && (
                                Array.isArray(scheduledTickets) && scheduledTickets.map(({
                                    trainNumber,
                                    carNumber,
                                    placeNumber,
                                    stationLandingPassenger,
                                    endStationPassenger,
                                    departureDatePassenger,
                                    departureTimePassenger,
                                    arrivalTimePassenger,
                                    typeOfCar,
                                    ticketPrice,
                                }) => (
                                    <InfoTickets>
                                        <DateTickets>
                                            <DateDeparture>
                                                <TextMain>Дата и время отправления:</TextMain>
                                                <Date>{moment(departureDatePassenger).format("DD-MM-YYYY")}</Date>
                                                <Time>{departureTimePassenger}</Time>
                                            </DateDeparture>
                                            <DateArrival>
                                                <TextMain>Время прибытия:</TextMain>
                                                <Time>{arrivalTimePassenger}</Time>
                                            </DateArrival>
                                        </DateTickets>
                                        <AppointmentTickets>
                                            <FromBox>
                                                <TextMain>Откуда:</TextMain>
                                                <FromStation>{stationLandingPassenger}</FromStation>
                                            </FromBox>
                                            <CarBox>
                                                <TrainNumber>
                                                    <Text>Номер поезда: </Text>{trainNumber}
                                                </TrainNumber>
                                                <CarNumber>
                                                    <Text>Номер вагона: </Text>{carNumber}
                                                </CarNumber>
                                                <PlaceNumber>
                                                    <Text>Номер места: </Text>{placeNumber}
                                                </PlaceNumber>
                                            </CarBox>
                                            <ToBox>
                                                <TextMain>Куда:</TextMain>
                                                <ToStation>{endStationPassenger}</ToStation>
                                            </ToBox>
                                        </AppointmentTickets>
                                        <AmountTickets>
                                            <TicketPrice>
                                                <TextMain>Цена билета</TextMain>
                                                {ticketPrice}
                                            </TicketPrice>
                                            <TypeCar>
                                                <TextMain>Тип вагона</TextMain>
                                                {typeOfCar}
                                            </TypeCar>
                                        </AmountTickets>
                                    </InfoTickets>
                                ))
                            ))}
                            {(isActivePast && (
                                Array.isArray(pastTickets) && pastTickets.map(({
                                    trainNumber,
                                    carNumber,
                                    placeNumber,
                                    stationLandingPassenger,
                                    endStationPassenger,
                                    departureDatePassenger,
                                    departureTimePassenger,
                                    arrivalTimePassenger,
                                    typeOfCar,
                                    ticketPrice,
                                }) => (
                                    <InfoTickets>
                                        <DateTickets>
                                            <DateDeparture>
                                                <TextMain>Дата и время отправления:</TextMain>
                                                <Date>{moment(departureDatePassenger).format("DD-MM-YYYY")}</Date>
                                                <Time>{departureTimePassenger}</Time>
                                            </DateDeparture>
                                            <DateArrival>
                                                <TextMain>Время прибытия:</TextMain>
                                                <Time>{arrivalTimePassenger}</Time>
                                            </DateArrival>
                                        </DateTickets>
                                        <AppointmentTickets>
                                            <FromBox>
                                                <TextMain>Откуда:</TextMain>
                                                <FromStation>{stationLandingPassenger}</FromStation>
                                            </FromBox>
                                            <CarBox>
                                                <TrainNumber>
                                                    <Text>Номер поезда: </Text>{trainNumber}
                                                </TrainNumber>
                                                <CarNumber>
                                                    <Text>Номер вагона: </Text>{carNumber}
                                                </CarNumber>
                                                <PlaceNumber>
                                                    <Text>Номер места: </Text>{placeNumber}
                                                </PlaceNumber>
                                            </CarBox>
                                            <ToBox>
                                                <TextMain>Куда:</TextMain>
                                                <ToStation>{endStationPassenger}</ToStation>
                                            </ToBox>
                                        </AppointmentTickets>
                                        <AmountTickets>
                                            <TicketPrice>
                                                <TextMain>Цена билета</TextMain>
                                                {ticketPrice}
                                            </TicketPrice>
                                            <TypeCar>
                                                <TextMain>Тип вагона</TextMain>
                                                {typeOfCar}
                                            </TypeCar>
                                        </AmountTickets>
                                    </InfoTickets>
                                ))
                            ))}
                        </TripsInfoPopup>
                    </BodyContainer>
                </ContentContainer>
                <FooterContainer>
                    
                </FooterContainer>
            </MainContainer>                                                                                       
        );
    }
}