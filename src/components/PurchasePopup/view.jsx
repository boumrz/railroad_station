import React from 'react';
import { RouteComponentProps } from 'react-router';
import qs from 'querystring';
import {
    MainContainer,
    OptionsContainer,
    FromContainer,
    InputPoint,
    ToContainer,
    DateContainer,
    InputDate,
    SearchContainer,
    ButtonSearch,
    DiscriptionBox,
    CustomText,
} from './styles';

export class PurchasePopupView extends React.Component {
    state = {
        from_station: '',
        to_station: '',
        train_departure_date: '',
    }

    handleFromMovementChange = (event) => {
        let value = event.target.value;

        this.setState({
            from_station: value,
        });
    }

    handleToMovementChange = (event) => {
        let value = event.target.value;

        this.setState({
            to_station: value,
        });
    }

    handleDateMovementChange = (event) => {
        let value = event.target.value;

        this.setState({
            train_departure_date: value,
        });
    }

    handleClickSearchTickets = () => {
        const { onLoadingDateTrains } = this.props;
        const { from_station, to_station, train_departure_date } = this.state;

        from_station && to_station && train_departure_date && onLoadingDateTrains(qs.stringify(this.state));
        from_station && to_station && onLoadingDateTrains(qs.stringify({
            from_station,
            to_station,
        }));
        !from_station && !to_station && !train_departure_date && onLoadingDateTrains();
    }

    render() {

        return(
            <MainContainer>
                <DiscriptionBox>
                    <CustomText>Укажите маршрут и дату поездки, чтобы узнать расписание и выбрать поезд</CustomText>
                </DiscriptionBox>
                <OptionsContainer>
                    <FromContainer> 
                        <InputPoint onChange={this.handleFromMovementChange} placeholder='Откуда' />
                    </FromContainer>
                    <ToContainer>
                        <InputPoint onChange={this.handleToMovementChange} placeholder='Куда' />
                    </ToContainer>
                    <DateContainer>
                        <InputDate onChange={this.handleDateMovementChange} type="date" />
                    </DateContainer>
                    <SearchContainer>
                        <ButtonSearch onClick={this.handleClickSearchTickets}>Узнать расписание и цены</ButtonSearch>
                    </SearchContainer>
                </OptionsContainer>
            </MainContainer>
        );
    }
}