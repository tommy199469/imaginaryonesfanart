import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import { ImageMap } from "@qiuz/react-image-map";
import { useRouterStore } from "../../stores";

import { Modal, Button } from "antd";

import pageImg from "./IO_game-02.png";
import tick1 from "./IO_game-03.png";
import tick2 from "./IO_game-04.png";

import result1 from "./IO_game-09.png";
import result2 from "./IO_game-08.png";
import result3 from "./IO_game-06.png";
import result4 from "./IO_game-07.png";

import youLose from "./game-14.png";
import youWin from "./game-13.png";
import tryAGain from "./game-15.png";

const calculateWinner = (squares: any) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const getWhichLine = (squares: any) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return lines[i];
    }
  }
  return null;
};

const WelcomePage = () => {
  const { history } = useRouterStore();
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const [winCase, setWinCase] = useState(-1);
  const [draw, setDraw] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  let winner = calculateWinner(board);

  useEffect(() => {
    winner = calculateWinner(board);
    const left = board.filter((item) => !item);

    if (left.length === 0 && !winner) {
      setDraw(true);
      showModal();
    }

    if (winner) {
      handleWinCase();
      showModal();
    }
  }, [board]);

  const mapArea = [
    {
      left: "8%",
      top: "22%",
      height: "4%",
      width: "35%",
    },
  ];

  const squareStyle: any = {
    background: "transparent",
    marginLeft: "24%",
  };

  const Square = ({ value, onClick }: any) => (
    <button style={squareStyle} onClick={onClick}>
      {value ? value === 2 ? <img src={tick2} /> : <img src={tick1} /> : ""}
    </button>
  );

  const onMapClick = async (area: any, index: any) => {
    switch (index) {
      // login
      case 0:
        window.open("https://twitter.com/thomascryptohk", "_blank");
        break;
    }
  };

  const handleClick = (i: any) => {
    const boardCopy = [...board];
    // If user click an occupied square or if game is won, return
    if (winner || boardCopy[i]) return;
    // Put an X or an O in the clicked square
    boardCopy[i] = 1;
    let selected = 0;

    const left = boardCopy.filter((item) => !item);

    if (left.length > 1) {
      do {
        selected = Math.floor(Math.random() * 9);
      } while (boardCopy[selected]);
      boardCopy[selected] = 2;
    }

    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  const Board = ({ squares, onClick }: any) => (
    <div
      style={{
        width: "100%",
        height: "100%",
        margin: "0 auto",
        display: "grid",
        gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
      }}
    >
      {squares.map((square: any, i: any) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  );

  const ImageMapComponent = React.useMemo(
    () => (
      <ImageMap
        className="usage-map"
        src={pageImg}
        map={mapArea}
        onMapClick={onMapClick}
      />
    ),
    [mapArea, pageImg]
  );

  const handleWinCase = () => {
    const result: any = getWhichLine(board);
    if (result) {
      const a = result[0];
      const b = result[1];
      const c = result[2];

      if (a === 0 && b === 1 && c === 2) {
        setWinCase(0);
      }
      if (a === 3 && b === 4 && c === 5) {
        setWinCase(1);
      }

      if (a === 6 && b === 7 && c === 8) {
        setWinCase(2);
      }

      if (a === 0 && b === 3 && c === 6) {
        setWinCase(3);
      }

      if (a === 1 && b === 4 && c === 7) {
        setWinCase(4);
      }

      if (a === 2 && b === 5 && c === 8) {
        setWinCase(5);
      }

      if (a === 2 && b === 4 && c === 6) {
        setWinCase(6);
      }

      if (a === 0 && b === 4 && c === 8) {
        setWinCase(7);
      }
    }
  };

  const renderWinCase = () => {
    console.log("winCase", winCase);
    switch (winCase) {
      case 0:
        return (
          <img
            style={{
              position: "absolute",
              top: "35%",
              left: "14%",
              width: "72%",
            }}
            src={result3}
          />
        );
      case 1:
        return (
          <img
            style={{
              position: "absolute",
              top: "50%",
              left: "14%",
              width: "72%",
            }}
            src={result3}
          />
        );
      case 2:
        return (
          <img
            style={{
              position: "absolute",
              top: "65%",
              left: "14%",
              width: "72%",
            }}
            src={result3}
          />
        );

      case 3:
        return (
          <img
            style={{
              position: "absolute",
              top: "32%",
              left: "19%",
            }}
            src={result4}
          />
        );
      case 4:
        return (
          <img
            style={{
              position: "absolute",
              top: "32%",
              left: "47%",
            }}
            src={result4}
          />
        );
      case 5:
        return (
          <img
            style={{
              position: "absolute",
              top: "32%",
              left: "74.5%",
            }}
            src={result4}
          />
        );

      case 6:
        return (
          <img
            style={{
              position: "absolute",
              top: "30%",
              left: "7%",
              width: "87%",
            }}
            src={result1}
          />
        );
      case 7:
        return (
          <img
            style={{
              position: "absolute",
              top: "30%",
              left: "7%",
              width: "87%",
            }}
            src={result2}
          />
        );
    }
  };

  return (
    <div className="main_wrapper">
      <div className="landing">
        <div
          className="step step_0"
          style={{
            background: `url(${pageImg}) left top no-repeat`,
          }}
        >
          <div className="content">
            {ImageMapComponent}

            <div
              style={{
                position: "absolute",
                top: "30%",
                left: "9%",
                width: "83%",
                height: "46%",
              }}
            >
              <Board squares={board} onClick={handleClick} />
              <div style={{ marginBottom: "5%" }} />

              <Modal
                title={null}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                bodyStyle={{
                  minHeight: "40vh",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                width={"50vh"}
              >
                <img
                  src={
                    winner
                      ? winner === 1
                        ? youWin
                        : youWin
                      : draw
                      ? youLose
                      : ""
                  }
                  style={{ marginBottom: "10%" }}
                />

                <img onClick={() => window.location.reload()} src={tryAGain} />
              </Modal>
            </div>
            {winner && renderWinCase()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(WelcomePage);
