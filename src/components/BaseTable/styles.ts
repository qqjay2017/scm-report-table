import styled from "styled-components";

export const TableStyle = styled.table`
border-collapse: collapse;
  border-spacing: 0;
  font-family: arial, sans-serif;
  table-layout: fixed;
  width: 100%;

    
`

export const TheadStyle = styled.thead`
    background: lightgray;
    margin: 0;
    position: sticky;
    top: 0;
`;

export const ThStyle = styled.th` 
    border-bottom: 1px solid lightgray;
    border-right: 1px solid lightgray;
    padding: 2px 4px;
    text-align: left;
`

export const TdStyle = styled.td` 
    padding: 6px;
`

export const ContainerStyle = styled.div`
 border: 1px solid lightgray;
  height: 500px;
  max-width: 900px !important;
  overflow: auto;
`
