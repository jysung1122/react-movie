import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setLoading(false);
      setMovie(json.data.movie);

      console.log(json.data.movie);
    };

    getMovie();
  }, [id]);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <iframe
            title={`${movie.title} Trailer`}
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${movie.yt_trailer_code}`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div>
            <img src={movie.medium_cover_image} alt={movie.title}></img>
            <h2>{movie.title}</h2>
            <p>개봉연도 : {movie.year} 평점 : {movie.rating} 런타임 : {movie.runtime}분 좋아요 : {movie.like_count}</p>
            <p>{movie.description_full}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
