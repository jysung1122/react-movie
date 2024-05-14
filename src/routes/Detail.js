import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Ratio, Card, ListGroup, Spinner, Container, Row, Col } from 'react-bootstrap';
import styles from '../components/Detail.module.css';

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
    <Container fluid className="bg-dark">
      <Row className="g-4">
        {loading ? (
          <Col className="d-flex justify-content-center">
            <Spinner animation="border" variant="light" />
          </Col>
        ) : (
          <Container>
            <Row>
              <Col md={8}>
                <Card className={styles.card}>
                  <Card.Img variant="top" src={movie.large_cover_image} alt={movie.title} />
                  <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <ListGroup variant="flush">
                      <ListGroup.Item className={styles.listGroupItem}>개봉연도: {movie.year}</ListGroup.Item>
                      <ListGroup.Item className={styles.listGroupItem}>평점: {movie.rating}</ListGroup.Item>
                      <ListGroup.Item className={styles.listGroupItem}>런타임: {movie.runtime}분</ListGroup.Item>
                      <ListGroup.Item className={styles.listGroupItem}>좋아요: {movie.like_count}</ListGroup.Item>
                    </ListGroup>
                    <Card.Text>{movie.description_full}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Ratio aspectRatio="16x9">
                  <iframe
                    title={`${movie.title} Trailer`}
                    src={`https://www.youtube.com/embed/${movie.yt_trailer_code}`}
                    allowFullScreen
                    className="embed-responsive-item"
                  />
                </Ratio>
              </Col>
            </Row>
          </Container>
        )}
      </Row>
    </Container>
  );
}
export default Detail;
