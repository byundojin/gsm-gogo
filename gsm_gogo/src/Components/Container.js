import styled from 'styled-components'

const Box = styled.div `
    border: 1px solid;
    border-radius: 16px;
    width: 460px;
    padding: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
`

function Container({ children } ) {
    

    return (
            <Box>
                {children}
            </Box>
    );
}

export default Container;