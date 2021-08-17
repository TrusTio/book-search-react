import { BookContainer } from "components/GalleryImages/BookContainer";
import React, { useEffect, useState } from "react";
import { getBooks } from "components/services/books/images";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";

export const BooksPage = () => {
  const [bookContents, setBookContents] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  const getBookContents = async (searchField) => {
    const response = await getBooks(searchField);

    setBookContents(response?.items);

    console.log(response?.items);
  };

  useEffect(() => {
    getBookContents(searchWord);
  }, [searchWord]);

  return (
    <div>
      <SearchBox>
        <SearchField
          type="search"
          placeholder="Search for an image"
          onChange={(e) => {
            setSearchWord(e.target.value);
          }}
        />
      </SearchBox>
      <Container>
        <Row xs="auto">
          {bookContents ? (
            bookContents?.map((book) => {
              return (
                <BookContainer
                  key={book?.id}
                  book={book}
                  searchedWord={searchWord}
                />
              );
            })
          ) : (
            <NoResultsBox>
              <NoResults>No results</NoResults>
            </NoResultsBox>
          )}
        </Row>
      </Container>
    </div>
  );
};

const SearchBox = styled.div`
  padding-left: 10% !important;
  padding-right: 10% !important;
  padding-top: 2% !important;
  padding-bottom: 2% !important;
  width: 70% !important;
  margin: 0 auto;
  display: block;
`;
const SearchField = styled.input`
  background-color: ${(props) => props.theme.searchBody};
  color: ${(props) => props.theme.text};
  width: 100%;
  margin: 0 auto;
  display: block;
  font-size: 3rem;
  border-radius: 25px;
  border: 1px solid #555;
  text-indent: 1rem;

  :focus {
    outline: none !important;
    border: 1px solid ${(props) => props.theme.searchFocusBorder};
    box-shadow: 0 0 10px #719ece;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${(props) => props.theme.text};
  }
  :-ms-input-placeholder {
    color: ${(props) => props.theme.text};
  }
`;

const NoResultsBox = styled(Container)`
  width: 100vw !important;
  height: 70vh !important;
  border-collapse: collapse;
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NoResults = styled.div`
  height: 25%;
  width: 45%;
  background-color: ${(props) => props.theme.noResultsBoxBody};
  border-radius: 3rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10vmin;
`;
