import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    //비동기 함수 생성
    //await을 사용하여 API 응답을 기다린 후 그 응답 데이터를 json 형식으로 파싱하고 완료될 때까지 기다림
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?&sort_by=download_count`
      )
    ).json();
    //json 데이터에서 movies 필드를 추출하여 movies 상태 업데이트
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id} //map 안에서 컴포넌트들을 render할 때 사용하므로 key prop 추가
              id={movie.id} //Detail 페이지에서 사용할 id prop 추가
              coverImg={movie.medium_cover_image}
              title={movie.title}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
