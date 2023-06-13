import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const SongDetail = ({ songs }) => {
  // 페이지 이동 Hook
  const navigate = useNavigate();

  // 주소표시줄에 기재된 URL 전달된 파라메터를 파악
  // 주소표시줄에 표현되는 형시2가지
  // 파라메터 형식 : /songs/1 <=== /songs/:id
  // query string  형식 : /songs?id=1&title+안녕
  const { id } = useParams();
  // id와 같은 1개의 객체를 songs 에서 추출해서
  // 화면을 갱신합니다.
  // 화면갱신을 위해서 state 를 활용해야 합니다.
  const [title, setTitle] = useState("");
  const [musician, setMusician] = useState("");
  const [link, setLink] = useState("");
  // 컴포넌트 마운트 되기전에 처리한다.
  // 데이터 로딩 및 처리시 좋은 위치!

  // 배열.find : 조건이 true인 요소를 return 한다.
  // 배열.find : 여려개가 true일때 처름 true 만 return 한다.
  // URL Parameter 는 무조건 문자열입니다. 숫자로 변경함!.
  // useEffect ( () => {} [])

  useEffect(() => {
    // id를 이용해스 데이터에서 검색한 결과를 출력한다.

    // 목록의 id 속성과 params 로 전달된 ID 같다면 true
    // 목록의 item.id === ParseInt(id)
    const song = songs.find((item) => item.id === parseInt(id));
    // 검색이 되지 않을경우 처리

    if (song) {
      setTitle(song.title ? song.title : "");
      setMusician(song.musician ? song.musician : "");
      setLink(
        songs.youtube_link
          ? `https://m.youtube.com/watch?v=${song.youtube_link}`
          : ""
      );
    } else {
      alert("자료가 없습니다~");
      navigate("/songlist");
    }
  }, [id]);

  return (
    <div className="mt-5">
      <h2>{title}</h2>
      <p>Original Musician : {musician}</p>
      <p>
        {/* 유튜브 보여주기 */}
        <a href={link} target="_blank">
          View Yotube
        </a>
      </p>
      <Link to="/songs">Return SongList</Link>
    </div>
  );
};

export default SongDetail;
