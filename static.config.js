import axios from 'axios'

export default {
  getSiteData: async () => {
    const baseURL = 'http://www.expect3.io.php72-38.lan3-1.websitetestlink.com/'
    const { data: menus } = await axios.get('https://manhattan-village.dev.v3.imaginuitycenters.com/wp-json/wp-api-menus/v2/menus/2')
    const { data: options } = await axios.get(baseURL + '/index.php/wp-json/wp/v2/options/')
    const { data: centerInfo } = await axios.get(baseURL + 'https://liberty-center.dev.v3.imaginuitycenters.com/wp-json/acf/v3/options/property_options')
    const { data: menuLocations } = await axios.get('https://manhattan-village.dev.v3.imaginuitycenters.com/wp-json/wp-api-menus/v2/menu-locations')

    return {
      title: 'Halcyon',
      siteCreator: 'Imaginuity',
      siteCreatorURL: 'https://www.imaginuity.com/',
      menus,
      options,
      centerInfo,
      menuLocations
    }
  },
  getRoutes: async () => {
    const baseURL = 'https://www.shopmanhattanvillage.com'
    const { data: pages } = await axios.get('https://manhattan-village.dev.v3.imaginuitycenters.com/index.php/wp-json/wp/v2/pages?per_page=99')
    const { data: posts } = await axios.get(baseURL + '/index.php/wp-json/wp/v2/posts?per_page=6')
    const { data: events } = await axios.get(baseURL + '/wp-json/wp/v2/events?per_page=100')
    const { data: stores } = await axios.get(baseURL + '/wp-json/wp/v2/stores/')

    return [
      {
        path: '/blogs',
        component: 'src/pages/Blogs',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/${post.slug}`,
          component: 'src/singles/Post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        path: '/events',
        component: 'src/pages/Events',
        getData: () => ({
          events,
        }),
        children: events.map(event => ({
          path: `/${event.slug}`,
          component: 'src/singles/Event',
          getData: () => ({
            event,
          }),
        })),
      },
      {
        path: '/stores',
        component: 'src/pages/Stores',
        getData: () => ({
          stores,
        }),
        children: stores.map(store => ({
          path: `/${store.slug}`,
          component: 'src/singles/Store',
          getData: () => ({
            store,
          }),
        })),
      },
      {
        path: '/contact',
        component: 'src/pages/Contact',
      },
      {
        path: '/',
        component: 'src/pages/Home',
        children: pages.map(page => ({
        path: `/${page.slug}`,
        component: 'src/singles/Page',
          getData: () => ({
            page,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/pages/404',
      },
    ]
  },
}