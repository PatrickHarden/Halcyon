import axios from 'axios'

export default {
  getSiteData: async () => {
    const baseURL = 'https://halcyon.dev.v3.imaginuitycenters.com'
    const { data: menus } = await axios.get(baseURL + '/wp-json/wp-api-menus/v2/menus/2')
    const { data: options } = await axios.get('http://www.attorneytemplate.dev.php72-38.lan3-1.websitetestlink.com/index.php/wp-json/wp/v2/options/')
    const { data: centerInfo } = await axios.get(baseURL + '/wp-json/acf/v3/options/property_options')
    const { data: menuLocations } = await axios.get(baseURL + '/wp-json/wp-api-menus/v2/menu-locations')
    const { data: footerMenu } = await axios.get(baseURL + '/wp-json/wp-api-menus/v2/menus/3')

    return {
      title: 'Halcyon',
      siteCreator: 'Imaginuity',
      siteCreatorURL: 'https://www.imaginuity.com/',
      redirectURL: 'https://halcyon.dev.v3.imaginuitycenters.com/wp-admin',
      menus,
      options,
      centerInfo,
      menuLocations,
      footerMenu
    }
  },
  getRoutes: async () => {
    const baseURL = 'https://halcyon.dev.v3.imaginuitycenters.com'
    const { data: pages } = await axios.get(baseURL + '/index.php/wp-json/wp/v2/pages?per_page=99')
    const { data: posts } = await axios.get(baseURL + '/index.php/wp-json/wp/v2/posts?per_page=6')
    const { data: events } = await axios.get(baseURL + '/wp-json/wp/v2/events?per_page=100')
    const { data: stores } = await axios.get(baseURL + '/wp-json/wp/v2/stores/')
    const { data: home } = await axios.get(baseURL + '/index.php/wp-json/wp/v2/pages?slug=home')
    const { data: sales } = await axios.get(baseURL + '/wp-json/wp/v2/sales?per_page=100')
    const { data: property_options } = await axios.get(baseURL + '/wp-json/acf/v3/options/property_options')

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
        path: '/sales',
        component: 'src/pages/Sales',
        getData: () => ({
          sales,
        })
      },
      {
        path: '/search',
        component: 'src/oldContainers/Search'
      },
      {
        path: '/shopping',
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
        path: '/dining',
        component: 'src/pages/Dining',
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
        path: '/sign-up',
        component: 'src/pages/Contact',
      },
      {
        path: '/maps',
        component: 'src/pages/Map',
      },
      {
        path: '/',
        component: 'src/pages/Home',
        getData: () => ({
          stores, events, pages, home, property_options
        }),
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
      {
        path: '/search',
        component: 'src/pages/Search'
      }
    ]
  },
}