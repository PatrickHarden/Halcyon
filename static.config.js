import axios from 'axios'

// variables responsible for holding stores json data if respective store is a retailer/restaurant
// the data is split into two futher down in the getRouteData method
var retailers;
var restaurants;

export default {
  // self-evident - the events/shopping/blogs pages are being inentionally overwritten by the page data
  // src/singles/Page file is responsible for handling them instead of src/pages/Events, ect
  disableDuplicateRoutesWarning: true,

  // siteRoot here is responsible for generating xml file automatically. React-static speciality
  siteRoot: 'https://halycon.netlify.com',

  // The following is JSON data accessible globally, by any component, by using the withSiteData() call
  // Below you will see some repeated functionality - I couldn't place it into it's own function since the axios await
  // call is reserved to the getSiteData, getRouteData methods. However, the repeated functionality is responsible for pulling
  // more than 100 post types if there exists more than 100.
  getSiteData: async () => {
    const baseURL = 'https://halcyon.dev.v3.imaginuitycenters.com'
    const { data: menus } = await axios.get(baseURL + '/wp-json/wp-api-menus/v2/menus/2')
    const { data: centerInfo } = await axios.get(baseURL + '/wp-json/acf/v3/options/property_options')
    const { data: menuLocations } = await axios.get(baseURL + '/wp-json/wp-api-menus/v2/menu-locations')
    const { data: footerMenu } = await axios.get(baseURL + '/wp-json/wp-api-menus/v2/menus/3')
    var { data: pages } = await axios.get(baseURL + '/index.php/wp-json/wp/v2/pages?per_page=100')
    var { data: posts } = await axios.get(baseURL + '/index.php/wp-json/wp/v2/posts?per_page=100')
    var { data: events } = await axios.get(baseURL + '/wp-json/wp/v2/events?per_page=100')
    var { data: stores } = await axios.get(baseURL + '/wp-json/wp/v2/stores/')
    var { data: sales } = await axios.get(baseURL + '/wp-json/wp/v2/sales?per_page=100')
    const { data: storeCategories } = await axios.get(baseURL + '/wp-json/wp/v2/imag_taxonomy_store_category?per_page=100')

    // Getting headers for events, stores, sales, blogs, and pages to see if there exist more than 100, and if so, pull more
    const { headers: moreEvents } = await axios.get(baseURL + '/wp-json/wp/v2/events?per_page=100')
    const { headers: moreStores } = await axios.get(baseURL + '/wp-json/wp/v2/stores?per_page=100')
    const { headers: moreSales } = await axios.get(baseURL + '/wp-json/wp/v2/sales?per_page=100')
    const { headers: morePages } = await axios.get(baseURL + '/wp-json/wp/v2/pages?per_page=100')
    const { headers: morePosts } = await axios.get(baseURL + '/wp-json/wp/v2/posts?per_page=100')

    // get more json data for events if it exists
    let theCount = moreEvents['x-wp-totalpages']
    let x = 2;
    while (x <= theCount) {
      var { data: moreEvents2 } = await axios.get(baseURL + '/wp-json/wp/v2/events?per_page=100&page=' + x)
      if (moreEvents2) {
        for (var i = 0; i < moreEvents2.length; i++) {
          events.push(moreEvents2[i])
        }
      }
      x++
    }

    // get more json for stores if it exists
    let theStoreCount = moreStores['x-wp-totalpages']
    let storeCount = 2;
    while (storeCount <= theStoreCount) {
      var { data: moreStores2 } = await axios.get(baseURL + '/wp-json/wp/v2/events?per_page=100&page=' + x)
      if (moreStores2) {
        for (var i = 0; i < moreStores2.length; i++) {
          stores.push(moreStores2[i])
        }
      }
      storeCount++
    }

    // get more json for sales if it exists
    let theSaleCount = moreSales['x-wp-totalpages']
    let saleCount = 2;
    while (saleCount <= theSaleCount) {
      var { data: moreSales2 } = await axios.get(baseURL + '/wp-json/wp/v2/events?per_page=100&page=' + x)
      if (moreSales2) {
        for (var i = 0; i < moreSales2.length; i++) {
          sales.push(moreSales2[i])
        }
      }
      saleCount++
    }

    // get more json for pages if it exists
    let thePageCount = morePages['x-wp-totalpages']
    let pageCount = 2;
    while (pageCount <= thePageCount) {
      var { data: morePages2 } = await axios.get(baseURL + '/wp-json/wp/v2/events?per_page=100&page=' + x)
      if (morePages2) {
        for (var i = 0; i < morePages2.length; i++) {
          pages.push(morePages2[i])
        }
      }
      pageCount++
    }

    // get more json for posts if it exists
    let thePostCount = morePosts['x-wp-totalpages']
    let postCount = 2;
    while (postCount <= thePostCount) {
      var { data: morePosts2 } = await axios.get(baseURL + '/wp-json/wp/v2/events?per_page=100&page=' + x)
      if (morePosts2) {
        for (var i = 0; i < morePosts2.length; i++) {
          posts.push(morePosts2[i])
        }
      }
      postCount++
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
    var { data: stores } = await axios.get(baseURL + '/wp-json/wp/v2/stores?per_page=100')
    var { data: sales } = await axios.get(baseURL + '/wp-json/wp/v2/sales?per_page=100')
    const { data: home } = await axios.get(baseURL + '/index.php/wp-json/wp/v2/pages?slug=home')
    const { data: property_options } = await axios.get(baseURL + '/wp-json/acf/v3/options/property_options')
    const metaDescription = property_options.acf.meta_description
    const siteRoot = 'https://halycon.netlify.com/'
    const title = 'Halcyon'

    // Checks json header to see if there's more than one page, then pulls more data if there is. Wordpress has 100 limit via url
    const { headers: eventHeaders } = await axios.get(baseURL + '/wp-json/wp/v2/events?per_page=100')
    const { headers: storeHeaders } = await axios.get(baseURL + '/wp-json/wp/v2/stores/')
    const { headers: pageHeaders } = await axios.get(baseURL + '/index.php/wp-json/wp/v2/pages?per_page=100')
    const { headers: postHeaders } = await axios.get(baseURL + '/index.php/wp-json/wp/v2/posts?per_page=100')
    const { headers: saleHeaders } = await axios.get(baseURL + '/wp-json/wp/v2/sales?per_page=100')

    // checks page count, loops json pull per that page count, and pushes it to the arrays above ^
    let count = eventHeaders['x-wp-totalpages']
    let x = 2;
    while (x <= count) {
      var { data: moreEvents } = await axios.get(baseURL + '/wp-json/wp/v2/events?per_page=100&page=' + x)
      if (moreEvents) {
        for (var i = 0; i < moreEvents.length; i++) {
          events.push(moreEvents[i])
        }
      }
      x++
    }
    let counter = storeHeaders['x-wp-totalpages']
    let xy = 2;
    while (xy <= counter) {
      var { data: moreStores } = await axios.get(baseURL + '/wp-json/wp/v2/stores?per_page=100&page=' + x)
      if (moreStores) {
        for (var i = 0; i < moreStores.length; i++) {
          stores.push(moreStores[i])
        }
      }
      xy++
    }
    let counter2 = pageHeaders['x-wp-totalpages']
    let xyz = 2;
    while (xyz <= counter2) {
      var { data: morePages } = await axios.get(baseURL + '/wp-json/wp/v2/pages?per_page=100&page=' + x)
      if (morePages) {
        for (var i = 0; i < morePages.length; i++) {
          pages.push(morePages[i])
        }
      }
      xyz++
    }
    let counter3 = postHeaders['x-wp-totalpages']
    let xyzq = 2;
    while (xyzq <= counter3) {
      var { data: morePosts } = await axios.get(baseURL + '/wp-json/wp/v2/posts?per_page=100&page=' + x)
      if (morePosts) {
        for (var i = 0; i < morePosts.length; i++) {
          posts.push(morePosts[i])
        }
      }
      xyzq++
    }
    let counter4 = saleHeaders['x-wp-totalpages']
    let xyzqx = 2;
    while (xyzqx <= counter4) {
      var { data: moreSales } = await axios.get(baseURL + '/wp-json/wp/v2/sales?per_page=100&page=' + x)
      if (moreSales) {
        for (var i = 0; i < moreSales.length; i++) {
          sales.push(moreSales[i])
        }
      }
      xyzqx++
    }

    // Divides stores data into two separate variables (retailers/restaurant) so that the routes are separated and not duplicated
    // e.g. /shopping/test-route or /dining/taco-bell instead of having /shopping/taco-bell generated
    retailers = stores.map(store => {
      if (store.acf.store_type == "retailer") {
        return store
      }
    })
    // Remove nulls
    retailers = retailers.filter(function (el) {
      return el != null;
    });
    restaurants = stores.map(store => {
      if (store.acf.store_type == "restaurant") {
        return store
      }
    })
    // Remove nulls
    restaurants = restaurants.filter(function (el) {
      return el != null;
    });

    // Generate routes based off of JSON data above and pass json to specified route component
    return [
      {
        path: '/',
        component: 'src/pages/Home',
        getData: () => ({
          stores, events, pages, home, property_options, title
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