import React from 'react';
import { Redirect } from 'react-router';
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
        const { isAuthAction, isAuth } = this.props;

        if (localStorage.getItem('IS_AUTH') === 'true') {
            isAuthAction();
        } 
    }

    render() {
        const { isActivePast, isActiveScheduled } = this.state;
        const { isAuth } = this.props;

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

                        </TripsInfoPopup>
                    </BodyContainer>
                </ContentContainer>
                <FooterContainer>
                    
                </FooterContainer>
            </MainContainer>                                                                                       
        );
    }
}