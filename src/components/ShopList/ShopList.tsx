import { useContext } from "react";
import { StyledWishList, BookImage } from "./ShopList.style";
import {
  ShopListContext,
  ShopListContextType,
} from "../../context/ShopListContext";

const ShopList = () => {
  const { shopListBooks } = useContext(ShopListContext) as ShopListContextType;

  return (
    <StyledWishList>
      <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Author</th>
          <th>Publisher</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {shopListBooks.map((shopListBook) => (
          <tr key={shopListBook.book.id}>
            <td>
              <BookImage src={shopListBook.book.coverImage} alt="Book Image" />
            </td>
            <td>{shopListBook.book.title}</td>
            <td>{shopListBook.book.author}</td>
            <td>{shopListBook.book.publishingHouse}</td>
            <td>{shopListBook.book.price} RSD</td>
            <td>{shopListBook.quantity}</td>
          </tr>
        ))}
      </tbody>
    </StyledWishList>
  );
};

export default ShopList;
