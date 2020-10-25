import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Space, Carousel } from 'antd'
import { SearchOutlined, PlusOutlined } from '@ant-design/icons'
import _get from 'lodash/get'

// UI Components, Business Components, HOCs
import Rating from '../../../business-components/rating/rating'
import Logo from '../../../business-components/logo/logo'

// Actions
import { loadNowPlaying } from '../actions'

// Selectors
import { makeSelectNumberOfNowPlayingMovies, makeSelectMovieGenreObject } from '../selectors'

// Hooks
import useMount from '../../../hooks/useMount'

// Styled components
import {
  BannerWrapper,
  TopNav,
  CarouselWrapper,
  CarouselItem,
  CarouselImg,
  CarouselInfoWrapper,
  CarouselInfo,
  CarouselTitle,
  CarouselDescription,
  ButtonText,
  Button,
  VerticalMiddle,
  JustDesktop,
  ActionWrapper,
} from './banner.styled'

// Constants
import { IMG_END_POINT } from '../constants'

const Banner = () => {
  const dispatch = useDispatch()
  useMount(() => {
    dispatch(loadNowPlaying())
  })
  const top3NowPlayingMovies = useSelector(makeSelectNumberOfNowPlayingMovies(3))
  const genreObject = useSelector(makeSelectMovieGenreObject())

  return (
    <BannerWrapper>
      <TopNav>
        <Logo />
        <div className="actions">
          <Space size="middle">
            <ButtonText type="text"><SearchOutlined style={{ fontSize: 20 }} /></ButtonText>
            <ButtonText type="text">Log in</ButtonText>
            <Button type="primary">Sign up</Button>
          </Space>
        </div>
      </TopNav>
      <CarouselWrapper>
        <Carousel autoplaySpeed={3000}>
          {top3NowPlayingMovies.length > 0 && top3NowPlayingMovies.map((movie) => (
            <CarouselItem key={movie.id}>
              <CarouselImg src={`${IMG_END_POINT}/original${movie.backdrop_path}`} alt={movie.title} />
              <CarouselInfoWrapper>
                <CarouselInfo>
                  <div>
                    <CarouselTitle>{movie.title}</CarouselTitle>
                    <CarouselDescription>
                      <Space size="middle">
                        {_get(movie, 'genre_ids', []).map((genreId) => (<span key={genreId}>{genreObject[genreId]}</span>))}
                        <span>|</span>
                        <span>Duration: 1h 52m</span>
                      </Space>
                    </CarouselDescription>
                    <ActionWrapper>
                      <Space size="middle">
                        <Button type="primary">Watch movie</Button>
                        <Button ghost>View info</Button>
                        <ButtonText type="text" icon={<PlusOutlined />} color="white">Add to whishlist</ButtonText>
                      </Space>
                    </ActionWrapper>
                  </div>
                  <JustDesktop>
                    <VerticalMiddle>
                      {/* Vote average is based on 10 points, the rating component is based on 5 points
                        => The input value will be a half of vote average
                      */}
                      <Rating value={(movie.vote_average / 2).toFixed(1)} originalValue={movie.vote_average} basedOn={movie.vote_count} />
                    </VerticalMiddle>
                  </JustDesktop>
                </CarouselInfo>
              </CarouselInfoWrapper>
            </CarouselItem>
          ))}
        </Carousel>
      </CarouselWrapper>
    </BannerWrapper>
  )
}

export default Banner
