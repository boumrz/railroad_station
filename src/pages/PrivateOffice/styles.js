import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row; 
    justify-content: space-between;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 30px;
    padding-right: 30px;
    margin-right: 10px;
    margin-left: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2); 
`;

export const HomePageRedirect = styled.span`
    font-family: Helvetica;

    &:Hover {
        color: grey;
        cursor: pointer;
    }
`;

export const LogOffPageRedirect = styled.span`
    font-family: Helvetica;

    &:Hover {
        color: grey;
        cursor: pointer;
    }
`;

export const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TripsOptionMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 60px;
    margin-right: 40px;
    margin-left: 40px;
`;

export const ScheduledTripsButton = styled.button`
    font-family: Helvetica;
    margin-right: 100px;
    width: 300px;
    height: 30px;
    margin: 15px;
    outline: none;
    border: none;
    font-size: 18px;
    ${props => props.isActiveScheduled && `border-bottom: 3px solid black`} 

    ${props => !props.isActiveScheduled && `
        &:Hover {
            color: rgba(0, 0, 0, 0.6);
            cursor: pointer;
        }
    `}
`;

export const PastTripsButton = styled.button`
    font-family: Helvetica;
    margin-left: 100px;
    width: 300px;
    height: 30px;
    margin: 15px;
    outline: none;
    border: none;
    font-size: 18px;
    ${props => props.isActivePast && `border-bottom: 3px solid black`} 

    ${props => !props.isActivePast && `
        &:Hover {
            color: rgba(0, 0, 0, 0.6);
            cursor: pointer;
        }
    `}
`;

export const TripsInfoPopup = styled.div`
    width: 1000px;
    height: 220px;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 25px;
`;

export const PersonalOfficeSpan = styled.span`
    font-family: Helvetica;
    text-align: center;
    margin-top: 30px;
    font-size: 24px;
`;

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
`;