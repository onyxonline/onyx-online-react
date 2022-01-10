import { useEffect, useState } from 'react';
import { SimpleGrid, Link, Box } from '@chakra-ui/react';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';

import merci from '../../images/portfolio/merci.jpg';
import thirtyfivemm from '../../images/portfolio/35mm.jpg';
import cvuo from '../../images/portfolio/cvuo.jpg';
import designleague from '../../images/portfolio/designleague.jpg';
import mess from '../../images/portfolio/mess.jpg';
import mpsp from '../../images/portfolio/mpsp.jpg';
import ruby from '../../images/portfolio/ruby.jpg';
import thatmakergirl from '../../images/portfolio/thatmakergirl.jpg';

import Sites from './Sites';

const Portfolio = () => {
  var images = [
    {
      id: 0,
      img: thirtyfivemm,
      link: 'https://www.35mm.website/',
      title: '35mm',
      caption: 'A photo gallery of travelling through Vietnam',
      loaded: false,
    },
    {
      id: 1,
      img: merci,
      link: 'https://www.mercicanada.org/',
      title: 'MERCI',
      caption: 'idk what this site does',
      loaded: false,
    },
    {
      id: 2,
      img: thatmakergirl,
      link: 'https://www.thatmakergirl.ca/',
      title: 'That Maker Girl',
      caption: 'Storefront bringing local handmade art ideas to life',
      loaded: false,
    },
    {
      id: 3,
      img: designleague,
      link: 'https://www.uottawadesignleague.ca/',
      title: 'uOttawa Design League',
      caption: 'An event for a 3-day University of Ottawa student event',
      loaded: false,
    },
    {
      id: 4,
      img: cvuo,
      link: 'https://cvuo.ca/',
      title: 'CVUO',
      caption: 'The massive clubs portal for the University of Ottawa',
      loaded: false,
    },
    {
      id: 5,
      img: mess,
      link: 'https://mess-segm.ca/',
      title: 'MESS',
      caption: 'The hub for the Mechanical Engineering Student Society',
      loaded: false,
    },
    {
      id: 6,
      img: mpsp,
      link: 'https://uottawampsp.com/',
      title: 'uOttawa MPSP',
      caption:
        'A site for students aspiring for the opportunity to participate as members of Parliament at the House of Commons',
      loaded: false,
    },
    {
      id: 7,
      img: ruby,
      link: 'https://uottawampsp.com/',
      title: 'Ruby Dev.',
      caption: 'A software development company',
      loaded: false,
    },
  ];

  const setLoading = (id) => {
    images.map((image) => {
      if (image.id === id) {
        image.loaded = true;
      }
    });
  };

  useEffect(() => {
    images.map((image) => {
      console.log('loading: ' + image.loaded);
    });
  }, []);

  return (
    <div className='portfolio'>
      <Box m={8}>
        <h2>Our Recent Work</h2>

        <SimpleGrid
          minChildWidth={{ base: '50vw', md: '35vw', lg: '35vw' }}
          spacing={2}
        >
          {images.map((image, key) => (
            <Link
              href={image.link}
              isExternal
              style={{ textDecoration: 'none' }}
            >
              <Sites site={image}></Sites>
              <div className='portfolio-image-caption'>
                <h3>{image.title}</h3>
                <p>{image.caption}</p>
              </div>
            </Link>
          ))}
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default Portfolio;