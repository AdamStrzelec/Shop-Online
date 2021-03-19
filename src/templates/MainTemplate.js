import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    width: 100%;
`

const MainTemplate = ({ children }) => (
    <Wrapper>
        {children}
    </Wrapper>
)

MainTemplate.propTypes = {
    children: PropTypes.element
}

export default MainTemplate;