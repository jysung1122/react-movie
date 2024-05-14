import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, Badge } from "react-bootstrap";
import styles from './Movie.module.css';

function Movie({ id, coverImg, title, genres }) {
  return (
    <Card className={styles.card}>
      <Card.Img variant="top" src={coverImg} alt={title} />
      <Card.Body>
        <Card.Title className={styles.cardTitle}>
          <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>{title}</Link>
        </Card.Title>
        <Card.Text className={styles.cardText}>
          {genres.map((genre) => (
            <Badge bg="secondary" key={genre}>
              {genre}
            </Badge>
          ))}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
