import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const BackgroundContainer = styled.div`
    background-image: url(public/assets/bilety-na-poezd37.jpg);
    -moz-background-size: 100%; /* Firefox 3.6+ */
    -webkit-background-size: 100%; /* Safari 3.1+ и Chrome 4.0+ */
    -o-background-size: 100%; /* Opera 9.6+ */
`;

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CustomText = styled.span`
    font-family: Helvetica;
`;

export const BoxServices = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    margin-right: 40px;
    color: #ffffff;
`;

export const BoxBuyTickets = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const BuyTickets = styled.div`
    width: 1000px;
    height: 220px;
    margin-top: 40px;
    margin-bottom: 40px; 
`;

export const BoxDescription = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 10px;
    color: #ffffff;
`;

export const DivDescription = styled.div`
    display: flex;
    flex-direction: column;
    width: 800px;
`;

export const SpanDesription = styled.div`
    text-align: center;
`;