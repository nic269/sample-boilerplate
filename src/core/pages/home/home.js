import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Space, Tabs } from 'antd'

// UI Components, Business Components, HOCs
import Banner from './partials/banner'
import TopPopularMovies from './partials/top-popular-movies'
import TopRatedMovies from './partials/top-rated-movies'
import UpCommingMovies from './partials/up-comming-movies'
import { withErrorBoundary } from '../../hocs/with-error-boundary/with-error-boundary'

// Actions
import { loadMovieGenres } from './actions'

// Selectors
import { makeSelectMovieGenreOptions } from './selectors'

// Hooks
import useMount from '../../hooks/useMount'

// Styled components
import { GContainer } from '../../styles/global-styles'
import { Select, GridView, ListView } from './home.styled'

const { TabPane } = Tabs
const BannerWithErrorBoundary = withErrorBoundary({ componentName: 'Banner' })(Banner)
const TopPopularMoviesWithErrorBoundary = withErrorBoundary({ componentName: 'TopPopularMovies' })(TopPopularMovies)
const TopRatedMoviesWithErrorBoundary = withErrorBoundary({ componentName: 'TopRatedMovies' })(TopRatedMovies)
const UpCommingMoviesWithErrorBoundary = withErrorBoundary({ componentName: 'UpCommingMovies' })(UpCommingMovies)

const Home = () => {
  const dispatch = useDispatch()
  useMount(() => {
    dispatch(loadMovieGenres())
  })
  const genreOptions = useSelector(makeSelectMovieGenreOptions())

  return (
    <div>
      <BannerWithErrorBoundary />
      <div className="content">
        <GContainer>
          <Tabs
            defaultActiveKey="popular"
            tabBarGutter={40}
            tabBarExtraContent={{
              right: (
                <Space size="middle">
                  <GridView active="true" />
                  <ListView />
                </Space>
              )
            }}
          >
            <TabPane tab="Popular" key="popular">
              <TopPopularMoviesWithErrorBoundary />
            </TabPane>
            <TabPane tab="Top rated" key="topRated">
              <TopRatedMoviesWithErrorBoundary />
            </TabPane>
            <TabPane tab="Upcomming" key="upComming">
              <UpCommingMoviesWithErrorBoundary />
            </TabPane>
            <TabPane
              tab={(
                <Select
                  options={genreOptions}
                  bordered={false}
                  dropdownMatchSelectWidth={false}
                  placeholder="Genre"
                />
              )}
              disabled
            />
          </Tabs>
        </GContainer>
      </div>
    </div>
  )
}

export default Home
