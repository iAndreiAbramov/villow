import React from 'react';
import { FooterContainer } from 'containers/FooterContainer';
import { HeaderContainer } from 'containers/HeaderContainer';
import { MainContainer } from 'containers/MainContainer';

export const App: React.FC = () => {
    return (
        <>
            <HeaderContainer>
                <header className="header container">
                    <h2>Header</h2>
                </header>
            </HeaderContainer>
            <MainContainer>
                <h2>Content</h2>
                <p>text text text</p>
            </MainContainer>
            <FooterContainer>
                <footer className="footer container">
                    <h2>Footer</h2>
                </footer>
            </FooterContainer>
        </>
    );
};
