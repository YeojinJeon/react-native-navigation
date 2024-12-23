import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
    flex: 0;
    justify-content: center;
    align-items: center;
`;

const StyledText = styled.Text`
    font-size: 30px;
    margin-bottom: 10px;
`;

const Item = () => {
    return (
        <Container>
            <StyledText>Item</StyledText>
        </Container>
    );
};

export default Item;
