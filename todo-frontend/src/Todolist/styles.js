import styled from  'styled-components';

export const ListContainer = styled.ul`
cursor:pointer;
padding:0;`

export const Row = styled.li`
display: flex;
align-items: center;
justify-content: space-between;
padding: 8px 0;
`

export const Text= styled.span`
::first-letter{
    text-transform: capitalize;
}
color:${(props) => (props.isCompleted ? "red":null)};

text-decoration:${(props) => (props.isCompleted ? "line-through":"none")};
`

export const DeleteIcon = styled(Text)`
cursor: pointer;
`;