import React from 'react'
import Head from 'next/head';
import Layout from '../components/layout'

const TITLE = "About This App";

function About() {
    return (
        <Layout pageTitle={TITLE}>
        <Head>
            <title>{TITLE}</title>
        </Head>
        <div>
            <h3>Praesent efficitur</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat elementum libero eu posuere. Donec lacinia risus vel magna eleifend pulvinar. Sed condimentum lorem lectus, sed blandit nisi ullamcorper non. Maecenas congue dolor ut dapibus efficitur. Praesent efficitur a arcu eget rhoncus. Vivamus posuere sodales nunc et tincidunt. Quisque nec dignissim enim. Vivamus molestie nisi feugiat pharetra lobortis. Duis at turpis diam. Nunc hendrerit justo eget mollis rutrum.</p>

            <h3>Feugiat pharetra</h3>
            <p>Curabitur venenatis velit et sapien faucibus, eu iaculis nulla auctor. Aenean porttitor at metus vitae faucibus. Duis interdum quis risus in aliquam. Sed vestibulum turpis augue, vel volutpat est ornare ut. Donec non imperdiet velit. Quisque bibendum neque a mauris placerat dapibus. Proin risus nibh, imperdiet a tincidunt ut, porttitor in lacus. Nullam eget libero non mauris ornare sagittis. Duis hendrerit mattis metus eu interdum. Sed sodales tempus sollicitudin. Suspendisse faucibus, mauris nec blandit tincidunt, turpis orci tristique sem, et condimentum enim augue ut nunc.</p>

            <p>Vestibulum vulputate magna eget dictum cursus. Nullam urna orci, dapibus non faucibus eu, molestie non justo. Sed id eros tempor, sagittis libero quis, aliquet orci. Aenean congue commodo feugiat. Curabitur placerat lorem quis mollis condimentum. Nam tempor est ac lobortis gravida. Morbi blandit nisi quis tellus accumsan, eu faucibus tortor aliquet. Fusce rutrum ultricies nunc, quis tempus orci malesuada a. In sollicitudin scelerisque fringilla. Aliquam ut ante luctus, faucibus magna vel, ullamcorper velit.</p> 

        </div>
        </Layout>
    )
}

export default About
