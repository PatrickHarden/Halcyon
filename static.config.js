import axios from 'axios'

export default {
  getSiteData: async () => {
    const baseURL = 'https://halcyon.dev.v3.imaginuitycenters.com'
    const { data: menus } = await axios.get(baseURL + '/wp-json/wp-api-menus/v2/menus/2')
    const { data: centerInfo } = await axios.get(baseURL + '/wp-json/acf/v3/options/property_options')
    const { data: menuLocations } = await axios.get(baseURL + '/wp-json/wp-api-menus/v2/menu-locations')
    const { data: footerMenu } = await axios.get(baseURL + '/wp-json/wp-api-menus/v2/menus/3')
    const { data: pages } = await axios.get(baseURL + '/index.php/wp-json/wp/v2/pages?per_page=99')
    const { data: posts } = await axios.get(baseURL + '/index.php/wp-json/wp/v2/posts?per_page=6')
    const { data: events } = await axios.get(baseURL + '/wp-json/wp/v2/events?per_page=100')
    const { data: stores } = await axios.get(baseURL + '/wp-json/wp/v2/stores/')

    return {
      title: 'Halcyon',
      siteCreator: 'Imaginuity',
      siteCreatorURL: 'https://www.imaginuity.com/',
      redirectURL: 'https://halcyon.dev.v3.imaginuitycenters.com/wp-admin',
      siteRoot: 'https://halycon.netlify.com/',
      menus,
      centerInfo,
      menuLocations,
      footerMenu,
      pages,
      posts,
      events,
      stores
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
    const metaDescription = property_options.acf.meta_description
    const siteRoot = 'https://halycon.netlify.com/'
    const title = 'Halcyon'

    return [
      {
        path: '/blogs',
        component: 'src/pages/Blogs',
        getData: () => ({
          posts, siteRoot, title, metaDescription, pages
        }),
        children: posts.map(post => ({
          path: `/${post.slug}`,
          component: 'src/singles/Post',
          getData: () => ({
            post, siteRoot, title, metaDescription
          }),
        })),
      },
      {
        path: '/events',
        component: 'src/pages/Events',
        getData: () => ({
          events, siteRoot, title, metaDescription, pages
        }),
        children: events.map(event => ({
          path: `/${event.slug}`,
          component: 'src/singles/Event',
          getData: () => ({
            event, siteRoot, title, metaDescription
          }),
        })),
      },
      {
        path: '/sales',
        component: 'src/pages/Sales',
        getData: () => ({
          sales, siteRoot, title, metaDescription, pages
        }),
        children: sales.map(sale => ({
          path: `/${sale.slug}`,
          component: 'src/singles/Sale',
          getData: () => ({
            sale, siteRoot, title, metaDescription
          }),
        })),
      },
      {
        path: '/search',
        component: 'src/oldContainers/Search'
      },
      {
        path: '/shopping',
        component: 'src/pages/Stores',
        getData: () => ({
          stores, siteRoot, title, metaDescription, pages, sales
        }),
        children: stores.map(store => ({
          path: `/${store.slug}`,
          component: 'src/singles/Store',
          getData: () => ({
            store, siteRoot, title, metaDescription
          }),
        })),
      },
      {
        path: '/dining',
        component: 'src/pages/Dining',
        getData: () => ({
          stores, siteRoot, title, metaDescription, pages
        }),
        children: stores.map(store => ({
          path: `/${store.slug}`,
          component: 'src/singles/Store',
          getData: () => ({
            store, siteRoot, title, metaDescription
          }),
        })),
      },
      {
        path: '/sign-up',
        component: 'src/pages/Contact',
      },
      {
        path: '/search-results',
        component: 'src/pages/SearchResults',
        getData: () => ({
          stores, events, pages, metaDescription
        }),
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
            page, siteRoot, title, metaDescription, 
          }),
        })),
      },
      {
        path: '/admin',
        component: 'src/pages/Redirect',
      },
      {
        path: '/wp-admin',
        component: 'src/pages/Redirect',
      },
      {
        is404: true,
        component: 'src/pages/404',
      },
    ]
  },
}