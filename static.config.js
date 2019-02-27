import axios from 'axios'

var retailers;
var restaurants;

export default {
  // The following is JSON data accessible globally, by any component, by using the withSiteData() call
  disableDuplicateRoutesWarning: true,
  siteRoot: 'https://halycon.netlify.com',
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
    const { data: sales } = await axios.get(baseURL + '/wp-json/wp/v2/sales?per_page=100')
    const { data: storeCategories} = await axios.get(baseURL + '/wp-json/wp/v2/imag_taxonomy_store_category?per_page=100')

    var {data: moreEvents } = await axios.get(baseURL + '/wp-json/wp/v2/events?per_page=100&page=2').catch(error => {
      console.log(error.response)
    });
    if (moreEvents){
      for (var i = 0; i<moreEvents.length; i++){
        events.push(moreEvents[i])
      }
    }

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
      stores,
      storeCategories,
      sales
    }
  },


  // JSON data available only to the route which it is passed to. Accessed by withRouteData()
  getRoutes: async () => {
    const baseURL = 'https://halcyon.dev.v3.imaginuitycenters.com'
    var { data: pages } = await axios.get(baseURL + '/index.php/wp-json/wp/v2/pages?per_page=100')
    var { data: posts } = await axios.get(baseURL + '/index.php/wp-json/wp/v2/posts?per_page=100')
    var { data: events } = await axios.get(baseURL + '/wp-json/wp/v2/events?per_page=100')
    var { data: stores } = await axios.get(baseURL + '/wp-json/wp/v2/stores/')
    const { data: home } = await axios.get(baseURL + '/index.php/wp-json/wp/v2/pages?slug=home')
    const { data: sales } = await axios.get(baseURL + '/wp-json/wp/v2/sales?per_page=100')
    const { data: property_options } = await axios.get(baseURL + '/wp-json/acf/v3/options/property_options')
    const metaDescription = property_options.acf.meta_description
    const siteRoot = 'https://halycon.netlify.com/'
    const title = 'Halcyon'


    // Checks json header to see if there's more than one page, then pulls more data if there is. Wordpress has 100 limit via url
    const { headers: eventHeaders } = await axios.get(baseURL + '/wp-json/wp/v2/events?per_page=100')
    const { headers: storeHeaders } = await axios.get(baseURL + '/wp-json/wp/v2/stores/')
    const { headers: pageHeaders } = await axios.get(baseURL + '/index.php/wp-json/wp/v2/pages?per_page=100')
    const { headers: postHeaders } = await axios.get(baseURL + '/index.php/wp-json/wp/v2/posts?per_page=100')
    // checks page count, loops json pull per that page count, pushes it to the array above ^
    let count = eventHeaders['x-wp-totalpages']
    let x = 2;
    while (x <= count){
      var {data: moreEvents } = await axios.get(baseURL + '/wp-json/wp/v2/events?per_page=100&page=' + x)
      if (moreEvents){
        for (var i = 0; i<moreEvents.length; i++){
          events.push(moreEvents[i])
        }
      }
      x++
    }
    let counter = storeHeaders['x-wp-totalpages']
    let xy = 2;
    while (xy <= counter){
      var {data: moreStores } = await axios.get(baseURL + '/wp-json/wp/v2/events?per_page=100&page=' + x)
      if (moreStores){
        for (var i = 0; i<moreStores.length; i++){
          events.push(moreStores[i])
        }
      }
      xy++
    }
    let counter2 = pageHeaders['x-wp-totalpages']
    let xyz = 2;
    while (xyz <= counter2){
      var {data: moreStores } = await axios.get(baseURL + '/wp-json/wp/v2/events?per_page=100&page=' + x)
      if (moreStores){
        for (var i = 0; i<moreStores.length; i++){
          events.push(moreStores[i])
        }
      }
      xyz++
    }
    let counter3 = postHeaders['x-wp-totalpages']
    let xyzq = 2;
    while (xyzq <= counter3){
      var {data: moreStores } = await axios.get(baseURL + '/wp-json/wp/v2/events?per_page=100&page=' + x)
      if (moreStores){
        for (var i = 0; i<moreStores.length; i++){
          events.push(moreStores[i])
        }
      }
      xyzq++
    }


    // Divides stores data into two separate variables (retailers/restaurant) so that the routes are separated 
    // e.g. /shopping/test-route or /dining/taco-bell instead of having /shopping/taco-bell generated
    retailers = stores.map(store => {
      if (store.acf.store_type == "retailer"){
        return store
      }
    })
    retailers = retailers.filter(function (el) {
      return el != null;
    });
    restaurants = stores.map(store => {
      if (store.acf.store_type == "restaurant"){
        return store
      }
    })
    restaurants = restaurants.filter(function (el) {
      return el != null;
    });    


    // Generate routes based off of JSON data above or custom paths
    return [
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
        path: '/shopping',
        component: 'src/pages/Stores',
        getData: () => ({
          stores, siteRoot, title, metaDescription, pages, sales
        }),
        children: retailers.map(retailer => ({
          path: `/${retailer.slug}`,
          component: 'src/singles/Retailer',
          getData: () => ({
            retailer, siteRoot, title, metaDescription, property_options, sales
          }),
        })),
      },
      {
        path: '/dining',
        component: 'src/pages/Dining',
        getData: () => ({
          stores, siteRoot, title, metaDescription, pages
        }),
        children: restaurants.map(restaurant => ({
          path: `/${restaurant.slug}`,
          component: 'src/singles/Restaurant',
          getData: () => ({
            restaurant, siteRoot, title, metaDescription, property_options, sales
          }),
        })),
      },
      {
        path: '/search-results',
        component: 'src/pages/SearchResults',
        getData: () => ({
          stores, events, pages, metaDescription
        }),
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