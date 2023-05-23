import styled from "styled-components";

export const StyledWishList = styled.table`
  margin-top: 30px;
  width: 100%;
  margin-bottom: 630px;
  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    vertical-align: middle;
  }

  th {
    font-weight: bold;
  }

  td {
    vertical-align: middle;
  }

  .book-title {
    font-weight: bold;
  }

  .book-price {
    color: #888;
  }
`;

export const BookImage = styled.img`
  width: 80px;
`;
export const BookTitle = styled.td`
  font-weight: bold;
`;
