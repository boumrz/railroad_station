import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
`;

export const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
    height: 800px;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 25px;
`;

export const HeaderContainer = styled.div`
    margin-top: 40px;
    margin-bottom: 70px;
`;

export const RegistrationSpan = styled.div`
    font-size: 24px;
    font-family: Helvetica;
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const RegistrationInput = styled.input`
    width: 250px;
    height: 35px;
    border-radius: 10px;
    border: none;
    border-bottom: 1px solid black;
    border-top: 1px solid black;
    outline: none;
    margin: 10px;
    padding-left: 15px;
    font-size: 20px;
    font-family: Helvetica;
`;

export const RegistrationSelecter = styled.select`
    width: 270px;
    height: 35px;
    border-radius: 10px;
    border: none;
    border-bottom: 1px solid black;
    border-top: 1px solid black;
    outline: none;
    margin: 10px;
    padding-left: 15px;
    font-size: 20px;
    font-family: Helvetica;
`;

export const RegistrationSubmitButton = styled.button`
    width: 270px;
    height: 40px;
    margin: 15px;
    border-radius: 10px;
    outline: none;
    margin-top: 45px;
    font-size: 20px;
    font-family: Helvetica;

    &:Hover {
        border: 2px solid grey;
        cursor: pointer;
    }
`;

export const FooterContainer = styled.div``;