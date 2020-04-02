import React from 'react';
import qs from 'querystring';
import {
    MainContainer,
    TicketTrainContainer,
    InfoTrainBox,
    TicketTrainBox,
    HeaderInfoTrainBox,
} from './styles';

export class TicketsPopupView extends React.Component {
    handleClickPurchaseTicket = (number, date, from, to, time) => {
        const { history, purchaseTicket } = this.props;

        history.push('/purchase');

        localStorage.setItem('purchaseTicket', qs.stringify({
            train_number: number,
            train_departure_date: date,
            from_station: from,
            to_station: to,
            train_departure_time: time,
        }));

        purchaseTicket(qs.stringify({
            train_number: number,
            train_departure_date: date,
            from_station: from,
            to_station: to,
            train_departure_time: time,
        }));
    }

    render() {
        const { trains } = this.props;

        return (
            <MainContainer>
                {trains && (
                    <HeaderInfoTrainBox>
                        <InfoTrainBox>Номер состава</InfoTrainBox>
                        <InfoTrainBox>Дата отправления</InfoTrainBox>
                        <InfoTrainBox>Станция отправления</InfoTrainBox>
                        <InfoTrainBox>Станция назначения</InfoTrainBox>
                    </HeaderInfoTrainBox>
                )}
                {Array.isArray(trains) && trains.map(({ 
                    train_number, 
                    train_departure_date, 
                    train_departure_time,
                    from_station, 
                    to_station,
                    train_arrival_date,
                    train_arrival_time,
                    train_travel_time, 
                    train_ticket_price,
                }) => (
                    <TicketTrainContainer>
                        <TicketTrainBox onClick={() => this.handleClickPurchaseTicket(
                            train_number, 
                            train_departure_date,
                            from_station,
                            to_station,
                            train_departure_time,
                            train_arrival_date,
                            train_arrival_time,
                            train_travel_time,
                            train_ticket_price,
                        )}>
                            <InfoTrainBox>{train_number}</InfoTrainBox>
                            <InfoTrainBox>{train_departure_date}</InfoTrainBox>
                            <InfoTrainBox>{from_station}</InfoTrainBox>
                            <InfoTrainBox>{to_station}</InfoTrainBox>
                        </TicketTrainBox>
                    </TicketTrainContainer>
                ))}
            </MainContainer>
        );
    }
}