var todaysDate = new Date();
var day = new Date().getDay();
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var excerpt;
var regex = /(<([^>]+)>)/ig;

const helpers = {
    // get store hours respective to the day the client hits the website
    // custom store holiday hours > custom store hours > global holiday hours > global hours
    getHours: function(store, globalHours, globalHolidayHours){
        // If store holiday hours are present and today
        var customStoreHolidayHours = false
        var holidayHours = false
        if (store.acf.alternate_hours.length != 0){
            var hourArray = store.acf.alternate_hours
            for (var i = 0; i < hourArray.length; i++){
                var testDate = new Date(store.acf.alternate_hours[i].date_picker)
                if(testDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
                    // console.log('Custom store holiday hours:', store.acf.alternate_hours)
                    customStoreHolidayHours = true
                    if (store.acf.alternate_hours[i].closed == true){
                        return store.acf.alternate_hours[i].start_time + " - " + store.acf.alternate_hours[i].end_time
                    } else {
                        return 'Closed'
                    }
                }
            }
        }
        // If store custom hours are present and store custom holiday hours are not in range
        if (store.acf.custom_hours == true && customStoreHolidayHours == false){
            // console.log('Custom store hours:', store.acf.standard_hours[0])
            if (days[day] == "Monday"){
                if (store.acf.standard_hours[0].monday_closed == false){
                    return store.acf.standard_hours[0].monday_open + " - " + store.acf.standard_hours[0].monday_close
                } else {
                    return 'Closed'
                }
            } else if (days[day] == "Tuesday"){
                if (store.acf.standard_hours[0].tuesday_closed == false){
                    return store.acf.standard_hours[0].tuesday_open + " - " + store.acf.standard_hours[0].tuesday_close
                } else {
                    return 'Closed'
                }
            } else if (days[day] == "Wednesday"){
                if (store.acf.standard_hours[0].wednesday_closed == false){
                    return store.acf.standard_hours[0].wednesday_open + " - " + store.acf.standard_hours[0].wednesday_close
                } else {
                    return 'Closed'
                }
            } else if (days[day] == "Thursday"){
                if (store.acf.standard_hours[0].thursday_closed == false){
                    return store.acf.standard_hours[0].thursday_open + " - " + store.acf.standard_hours[0].thursday_close
                } else {
                    return 'Closed'
                }
            } else if (days[day] == "Friday"){
                if (store.acf.standard_hours[0].friday_closed == false){
                    return store.acf.standard_hours[0].friday_open + " - " + store.acf.standard_hours[0].friday_close
                } else {
                    return 'Closed'
                }
            } else if (days[day] == "Saturday"){
                if (store.acf.standard_hours[0].saturday_closed == false){
                    return store.acf.standard_hours[0].saturday_open + " - " + store.acf.standard_hours[0].saturday_close
                } else {
                    return 'Closed'
                }
            } else if (days[day] == "Sunday"){
                if (store.acf.standard_hours[0].sunday_closed == false){
                    return store.acf.standard_hours[0].sunday_open + " - " + store.acf.standard_hours[0].sunday_close
                } else {
                    return 'Closed'
                }
            }
        }
        // If store custom hours and custom holiday hours are false, check to see if global holiday hours are present and today
        if (store.acf.custom_hours == false && customStoreHolidayHours == false){
            if (globalHolidayHours.length != 0){
                var hourArray = globalHolidayHours
                for (var i = 0; i < hourArray.length; i++){
                    var testDate = new Date(globalHolidayHours[i].date_picker)
                    if(testDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
                        // console.log('Global holiday hours:', globalHolidayHours[i])
                        holidayHours = true
                        if (globalHolidayHours[i].closed == true) {
                            return globalHolidayHours[i].start_time + " - " + globalHolidayHours[i].end_time
                        } else {
                            return 'Closed'
                        }
                    }
                }
            }
        }
        // If all other hours are non-existent, use global store hours
        if (store.acf.custom_hours == false && customStoreHolidayHours == false && holidayHours == false){
            if (globalHours.length != 0){
                // console.log('Global hours:', globalHours[0])
                if (days[day] == "Monday"){
                    if (globalHours[0].monday_closed == false){
                        return globalHours[0].monday_open + " - " + globalHours[0].monday_close
                    } else {
                        return 'Closed'
                    }
                } else if (days[day] == "Tuesday"){
                    if (globalHours[0].tuesday_closed == false){
                        return globalHours[0].tuesday_open + " - " + globalHours[0].tuesday_close
                    } else {
                        return 'Closed'
                    }
                } else if (days[day] == "Wednesday"){
                    if (globalHours[0].wednesday_closed == false){
                        return globalHours[0].wednesday_open + " - " + globalHours[0].wednesday_close
                    } else {
                        return 'Closed'
                    }
                } else if (days[day] == "Thursday"){
                    if (globalHours[0].thursday_closed == false){
                        return globalHours[0].thursday_open + " - " + globalHours[0].thursday_close
                    } else {
                        return 'Closed'
                    }
                } else if (days[day] == "Friday"){
                    if (globalHours[0].friday_closed == false){
                        return globalHours[0].friday_open + " - " + globalHours[0].friday_close
                    } else {
                        return 'Closed'
                    }
                } else if (days[day] == "Saturday"){
                    if (globalHours[0].saturday_closed == false){
                        return globalHours[0].saturday_open + " - " + globalHours[0].saturday_close
                    } else {
                        return 'Closed'
                    }
                } else if (days[day] == "Sunday"){
                    if (globalHours[0].sunday_closed == false){
                        return globalHours[0].sunday_open + " - " + globalHours[0].sunday_close
                    } else {
                        return 'Closed'
                    }
                } 
            }
        }    
    },

    // get hours for the current day and the next seven days. Passing in currendDay instead of inherititng it form array above
    // index is used to iterate days forward, so 0 would start at the current day (tuesday) and 6 would be the 7th day (monday)
    getWeekHours: function(store, currendDay, index, globalHours, globalHolidayHours){
        var customStoreHolidayHours = false
        var holidayHours = false
        if (store.acf.alternate_hours.length != 0){
            var hourArray = store.acf.alternate_hours
            for (var i = 0; i < hourArray.length; i++){
                var testDate = new Date(store.acf.alternate_hours[i].date_picker)
                if(testDate.setHours(0,0,0,0) == todaysDate.setHours((24 * index),0,0,0)) {
                    // console.log('Custom store holiday hours:', store.acf.alternate_hours)
                    customStoreHolidayHours = true
                    if (store.acf.alternate_hours[i].closed == true){
                        return store.acf.alternate_hours[i].start_time + " - " + store.acf.alternate_hours[i].end_time
                    } else {
                        return 'Closed'
                    }
                }
            }
        }

        if (store.acf.custom_hours == true && customStoreHolidayHours == false){
            // console.log('Custom store hours:', store.acf.standard_hours[0], currendDay)
            if (currendDay == "Monday"){
                if (store.acf.standard_hours[0].monday_closed == false){
                    return store.acf.standard_hours[0].monday_open + " - " + store.acf.standard_hours[0].monday_close
                } else {
                    return 'Closed'
                }
            } else if (currendDay == "Tuesday"){
                if (store.acf.standard_hours[0].tuesday_closed == false){
                    return store.acf.standard_hours[0].tuesday_open + " - " + store.acf.standard_hours[0].tuesday_close
                } else {
                    return 'Closed'
                }
            } else if (currendDay == "Wednesday"){
                if (store.acf.standard_hours[0].wednesday_closed == false){
                    return store.acf.standard_hours[0].wednesday_open + " - " + store.acf.standard_hours[0].wednesday_close
                } else {
                    return 'Closed'
                }
            } else if (currendDay == "Thursday"){
                if (store.acf.standard_hours[0].thursday_closed == false){
                    return store.acf.standard_hours[0].thursday_open + " - " + store.acf.standard_hours[0].thursday_close
                } else {
                    return 'Closed'
                }
            } else if (currendDay == "Friday"){
                if (store.acf.standard_hours[0].friday_closed == false){
                    return store.acf.standard_hours[0].friday_open + " - " + store.acf.standard_hours[0].friday_close
                } else {
                    return 'Closed'
                }
            } else if (currendDay == "Saturday"){
                if (store.acf.standard_hours[0].saturday_closed == false){
                    return store.acf.standard_hours[0].saturday_open + " - " + store.acf.standard_hours[0].saturday_close
                } else {
                    return 'Closed'
                }
            } else if (currendDay == "Sunday"){
                if (store.acf.standard_hours[0].sunday_closed == false){
                    return store.acf.standard_hours[0].sunday_open + " - " + store.acf.standard_hours[0].sunday_close
                } else {
                    return 'Closed'
                }
            }
        }
        // If store custom hours and custom holiday hours are false, check to see if global holiday hours are present and today
        if (store.acf.custom_hours == false && customStoreHolidayHours == false){
            if (globalHolidayHours.length != 0){
                var hourArray = globalHolidayHours
                for (var i = 0; i < hourArray.length; i++){
                    var testDate = new Date(globalHolidayHours[i].date_picker)
                    if(testDate.setHours(0,0,0,0) == todaysDate.setHours((24 * index),0,0,0)) {
                        // console.log('Global holiday hours:', globalHolidayHours[i])
                        holidayHours = true
                        if (globalHolidayHours[i].closed == true) {
                            return globalHolidayHours[i].start_time + " - " + globalHolidayHours[i].end_time
                        } else {
                            return 'Closed'
                        }
                    }
                }
            }
        }
        // If all other hours are non-existent, use global store hours
        if (store.acf.custom_hours == false && customStoreHolidayHours == false && holidayHours == false){
            if (globalHours.length != 0){
                // console.log('Global hours:', globalHours[0])
                if (currendDay == "Monday"){
                    if (globalHours[0].monday_closed == false){
                        return globalHours[0].monday_open + " - " + globalHours[0].monday_close
                    } else {
                        return 'Closed'
                    }
                } else if (currendDay == "Tuesday"){
                    if (globalHours[0].tuesday_closed == false){
                        return globalHours[0].tuesday_open + " - " + globalHours[0].tuesday_close
                    } else {
                        return 'Closed'
                    }
                } else if (currendDay == "Wednesday"){
                    if (globalHours[0].wednesday_closed == false){
                        return globalHours[0].wednesday_open + " - " + globalHours[0].wednesday_close
                    } else {
                        return 'Closed'
                    }
                } else if (currendDay == "Thursday"){
                    if (globalHours[0].thursday_closed == false){
                        return globalHours[0].thursday_open + " - " + globalHours[0].thursday_close
                    } else {
                        return 'Closed'
                    }
                } else if (currendDay == "Friday"){
                    if (globalHours[0].friday_closed == false){
                        return globalHours[0].friday_open + " - " + globalHours[0].friday_close
                    } else {
                        return 'Closed'
                    }
                } else if (currendDay == "Saturday"){
                    if (globalHours[0].saturday_closed == false){
                        return globalHours[0].saturday_open + " - " + globalHours[0].saturday_close
                    } else {
                        return 'Closed'
                    }
                } else if (currendDay == "Sunday"){
                    if (globalHours[0].sunday_closed == false){
                        return globalHours[0].sunday_open + " - " + globalHours[0].sunday_close
                    } else {
                        return 'Closed'
                    }
                } 
            }
        }  
    },

    // Convert url received from wordpress to one that functions within react-static
    convertLink: function(url, title){
        if (url.includes(title)){
            var words = url.split('/');
            if (words[4] == ""){
                return words[3]
            } else {
                if (words[3] == "events") {
                return "/events/" + words[4]
                } else if (words[3] == "sales"){
                return "/sales/" + words[4]
                }  else if (words[3] == "stores"){
                return "/stores/" + words[4]
                } else if (words[3] == "blog"){
                return "/blogs/" + words[4]
                }
            }
        } else {
            return url;
        }
    },

    // Gets title from url if one is not already provided
    getTitleFromUrl: function(url, title){
        var words = url.split('/');
        if (url.includes(title)){
            if (words[4] == ""){
                return words[3].replace(/-/g, ' ')
            } else {
                return words[4].replace(/-/g, ' ')
            }
        } else {
            var temp = url.replace(/(^\w+:|^)\/\//, '')
            var end = temp.lastIndexOf('.');
            return temp.substring(0, end);
        }
    },

    // Converts youtube url to an ID which is later inserted into an iframe
    getVideoUrl: function(url){
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = url.match(regExp); 
        if (match && match[2].length == 11) {
            return match[2];
        } else {
            return 'error';
        }
    },

    // Compress or clamp text. Adds ellipsis to the end of the text if the text is above the amount passed in
    compressText: function(text, amount){
        if (text.length <= amount){
            return text
        } else {
            excerpt = text.replace(regex, "").substr(0, amount)
            excerpt = excerpt.substr(0, excerpt.lastIndexOf(" "))
            if (excerpt == ''){
                return excerpt
            } else {
                return excerpt + "...";
            }
        }
    }
    
}

export default helpers;