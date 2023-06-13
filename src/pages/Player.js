import React, { useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router";
import Youtube from "react-youtube";
import { Link } from "react-router-dom";

const Player = () => {
  const { songs } = useOutletContext();
  console.log(songs);
  const navigate = useNavigate();
  const { id } = useParams();
  // 이거 알아야함
  // useParams에 담긴 값은 무조껀 문자열이다.
  // 그래서 parseInt로 숫자로 변경해줘야 한다.
  const [title, setTitle] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");
  // 데이터를 가지고 와서 세팅한다. 한번만
  useEffect(() => {
    const song = songs.find((item) => item.id === parseInt(id));
    if (song) {
      setTitle(song.title);
      setYoutubeLink(song.youtube_link);
    } else {
      alert("자료 없음");
      navigate("/songs");
    }
  }, []);
  return (
    <div className="modal modal-sheet d-block p-4 py-md-5">
      <div className="modal-dialog">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-header border-bottom-0">
            <h1 className="modal-title fs-5">{title}</h1>
            <Link to="/songs" type="button" className="btn-close"></Link>
          </div>
          <div className="modal-body py-0 pb-3">
            {/* react-youytube 라이브러리 활용 */}
            <Youtube
              videoId={youtubeLink}
              opts={{ width: "100%", playerVars: { autoplay: 1 } }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
