import React, { useState } from "react";
import styled from "styled-components";
import noImage from "assets/no-image-icon.png";
import { Card, Col, Container } from "react-bootstrap";
import LinesEllipsis from "react-lines-ellipsis";
import { Popover } from "react-tiny-popover";
import Highlighter from "react-highlight-words";

export const BookContainer = ({ book, searchedWord }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const popoverContent = () => (
    <PopupContainer>
      <PopupTitle>
        <Highlighter
          highlightTag={HighlightedWord}
          searchWords={searchedWord.split(" ")}
          autoEscape={true}
          textToHighlight={book?.volumeInfo?.title}
        ></Highlighter>{" "}
      </PopupTitle>
      <PopupSubtitle>
        <Highlighter
          highlightTag={HighlightedWord}
          searchWords={searchedWord.split(" ")}
          autoEscape={true}
          textToHighlight={book?.volumeInfo?.subtitle}
        ></Highlighter>
      </PopupSubtitle>
    </PopupContainer>
  );

  return (
    <Col>
      <Popover
        isOpen={isPopoverOpen}
        positions={["right", "left", "top", "bottom"]} // preferred positions by priority
        content={popoverContent}
        onClickOutside={() => setIsPopoverOpen(false)}
      >
        <BookCard
          onMouseEnter={() => {
            setIsPopoverOpen(true);
          }}
          onMouseLeave={() => {
            setIsPopoverOpen(false);
          }}
        >
          <ImageBox
            variant="top"
            src={book?.volumeInfo?.imageLinks?.thumbnail || noImage}
          />
          <CardBody>
            <CardTitle>
              <LinesEllipsis
                text={book?.volumeInfo?.title}
                maxLine="2"
                ellipsis="..."
                trimRight
                basedOn="letters"
              />
            </CardTitle>
          </CardBody>
        </BookCard>
      </Popover>
    </Col>
  );
};

const BookCard = styled(Card)`
  width: 12vw;
  height: 35vh;
  border: 4px solid ${(props) => props.theme.cardBorder};
  background-color: ${(props) => props.theme.cardBody};
  margin: 1vh 0vw 1vh 0vw;
`;

const ImageBox = styled(Card.Img)`
  width: 100%;
  height: 80%;

  &:hover {
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  }
`;

const CardBody = styled(Card.Body)`
  width: 100%;
  overflow: hidden;
  font-size: 11px;
  margin: -1rem 0rem 0rem 0rem;
  text-align: center;
`;

const CardTitle = styled(Card.Title)`
  width: 100%;
  overflow: hidden;
  font-size: 1rem;
`;

const PopupContainer = styled(Container)`
  width: 15rem;
  background-color: ${(props) => props.theme.bookPopupBody};
  border: 3px solid ${(props) => props.theme.bookPopupBorder};
  color: ${(props) => props.theme.text};
  text-align: center;
  border-radius: 5px;
  margin: 1rem 1rem 1rem 1rem;
`;

const PopupTitle = styled.div`
  font-size: 1.2rem;
`;
const PopupSubtitle = styled.div`
  font-style: italic;
  font-size: 0.9rem;
`;

const HighlightedWord = styled.span`
  font-weight: bold;
`;
