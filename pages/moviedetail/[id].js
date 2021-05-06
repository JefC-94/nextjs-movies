import Link from 'next/link';
import React from 'react'
import Layout from '../../components/layout';
import axios from 'axios';

export default function MovieDetail({movie}) {

    return (
        <Layout pageTitle={movie.original_title}>
            {movie && <div className="movieDetail">
                <h4>{movie.release_date}</h4>
                <p>{movie.overview}</p>
            </div>}
            <Link href="/"><a>Back to all movies</a></Link>
        </Layout>
    )
}

export async function getStaticProps(context){
    console.log("executed on server");

    const id = context.params.id;
    
    const request = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=2f4d2782f86267806047a2e8197b5990&language=en-US`);
    const movie = request.data;
  
    return {
        props: {
            movie
        }
    }
  
}

export async function getStaticPaths(){

    const request = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=2f4d2782f86267806047a2e8197b5990&language=en-US&query=The&include_adult=false`);
    const movies = request.data.results;

    const paths = movies.map(movie => ({
        params: {id: movie.id.toString()},
    }));

    return {
      paths,
      fallback: false
    }
}