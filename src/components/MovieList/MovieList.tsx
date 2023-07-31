import styled from "styled-components";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

type Movie = {
  title: string;
  poster_path: string;
};

type MovieListProps = {
  movies: Movie[];
  action: (movie: Movie) => void;
};

const MovieListPage = styled.div`
  width: 100vw;
  display:flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-left: 14em;

  @media(max-width: 480px) {
    flex-direction: column;
    align-items:center;
    padding-left: 0;
    }
`;

const SmallCard = styled.div`
  width:300px;
  height:400px;
  margin:1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
`;

const Title = styled.h3`
  text-align: center;
`;

const CardImage = styled.img`
  width:200px;
  height:300px;
  border: 1px solid;
  border-radius: 2%;
  border-color: #0d76b5;
  box-shadow: rgba(42, 48, 226, 0.663) 0px 1px 2px, rgb(51, 51, 51) 0px 5px 5px 5px;
  }
`;
const MovieList: React.FC<MovieListProps> = ({ movies, action }) => {
  return (
    <MovieListPage>
      {movies && movies.map((elem) => {
        return (
          <SmallCard key={elem.title}>
            <CardImage
              src={`https://image.tmdb.org/t/p/original${elem.poster_path}`}
              alt={elem.title}
            />
            <Title>
              {elem.title}
              <IconButton color="error" onClick={() => action(elem)}>
                <CloseIcon />
              </IconButton>
            </Title>
          </SmallCard>
        );
      })}
    </MovieListPage>
  );
};

export default MovieList;
