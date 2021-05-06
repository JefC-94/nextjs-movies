import Head from 'next/head'
import Layout from '../components/layout'
import axios from 'axios';
import React from 'react';
import Link from 'next/link';
import slugify from 'slugify';

const TITLE = 'My Movie App';

export default function Home({movies}) {

  return (
    <Layout pageTitle={TITLE}>
      <Head>
        <title>{TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="movies">
        {movies.length && movies.map(movie => (
            <div key={movie.id} className="movieItem">
                <Link href={`/moviedetail/`+ movie.id /* + "/" + slugify(movie.original_title, {strict: true, lower: true,} )*/}>
                <a>
                    <h4>{movie.original_title}</h4>
                    <img src={"https://image.tmdb.org/t/p/w200/" + movie.poster_path} />
                </a>
                </Link>
            </div>
        ))}
      </div>

    </Layout>
  )
}



/* export async function getServerSideProps(){
  console.log("executed on server");
  
  const request = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=2f4d2782f86267806047a2e8197b5990&language=en-US&query=The&include_adult=false`);
  const movies = request.data.results;

  return {
      props: {
          movies
      }
  }

} */


export async function getStaticProps(){
  console.log("executed on server");
  
  const request = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=2f4d2782f86267806047a2e8197b5990&language=en-US&query=The&include_adult=false`);
  const movies = request.data.results;

  return {
      props: {
          movies
      }
  }

}