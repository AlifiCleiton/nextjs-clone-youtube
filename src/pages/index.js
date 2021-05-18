import React from 'react';
import { Box, Grid } from '@material-ui/core';
import Layout from 'src/components/Layout';
import VideoCard from 'src/components/VideoCard';

function Home({data}) {
  return (
    <Layout title="YouTube" >
       <Box p={2}>
         <Grid container spacing={4}>
            {data.map((item) => (
              <Grid key={item.id} item xl={3} lg={3} md={4} sm={6} xs={12}>
                <VideoCard item={item} />
              </Grid>
            ))}
          </Grid>
       </Box>
    </Layout>
  );
}

export async function getStaticProps(){
  const data = [
     
  ];
  return {
    props: {
      data
    },
  };
}

export default Home;
