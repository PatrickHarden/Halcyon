import React from 'react'

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
        var customStoreHours = false
        var holidayHours = false
        if (store.acf.alternate_hours.length != 0){
            var hourArray = store.acf.alternate_hours
            for (var i = 0; i < hourArray.length; i++){
                var testDate = new Date(store.acf.alternate_hours[i].date_picker)
                if(testDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0) && store.acf.alternate_hours[i].closed == true) {
                    customStoreHolidayHours = true
                    return store.acf.alternate_hours[i].start_time + " - " + store.acf.alternate_hours[i].end_time
                }
            }
        }
        if (store.acf.custom_hours == true && customStoreHolidayHours == false){
            if (days[day] == "Monday"){
                if (store.acf.standard_hours[0].monday_closed == false){
                    customStoreHours = true;
                    return store.acf.standard_hours[0].monday_open + " - " + store.acf.standard_hours[0].monday_close
                } else {
                    return 'Closed'
                }
            } else if (days[day] == "Tuesday"){
                if (store.acf.standard_hours[0].tuesday_closed == false){
                    customStoreHours = true;
                    return store.acf.standard_hours[0].tuesday_open + " - " + store.acf.standard_hours[0].tuesday_close
                } else {
                    return 'Closed'
                }
            } else if (days[day] == "Wednesday"){
                if (store.acf.standard_hours[0].wednesday_closed == false){
                    customStoreHours = true;
                    return store.acf.standard_hours[0].wednesday_open + " - " + store.acf.standard_hours[0].wednesday_close
                } else {
                    return 'Closed'
                }
            } else if (days[day] == "Thursday"){
                if (store.acf.standard_hours[0].thursday_closed == false){
                    customStoreHours = true;
                    return store.acf.standard_hours[0].thursday_open + " - " + store.acf.standard_hours[0].thursday_close
                } else {
                    return 'Closed'
                }
            } else if (days[day] == "Friday"){
                if (store.acf.standard_hours[0].friday_closed == false){
                    customStoreHours = true;
                    return store.acf.standard_hours[0].friday_open + " - " + store.acf.standard_hours[0].friday_close
                } else {
                    return 'Closed'
                }
            } else if (days[day] == "Saturday"){
                if (store.acf.standard_hours[0].saturday_closed == false){
                    customStoreHours = true;
                    return store.acf.standard_hours[0].saturday_open + " - " + store.acf.standard_hours[0].saturday_close
                } else {
                    return 'Closed'
                }
            } else if (days[day] == "Sunday"){
                if (store.acf.standard_hours[0].sunday_closed == false){
                    customStoreHours = true;
                    return store.acf.standard_hours[0].sunday_open + " - " + store.acf.standard_hours[0].sunday_close
                } else {
                    return 'Closed'
                }
            }
        }
        if (store.acf.custom_hours == false && customStoreHolidayHours == false){
            if (globalHolidayHours.length != 0){
                var hourArray = globalHolidayHours
                for (var i = 0; i < hourArray.length; i++){
                    var testDate = new Date(globalHolidayHours[i].date_picker)
                    if(testDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0) && globalHolidayHours[i].closed == true) {
                        console.log('holiday hours true')
                        holidayHours = true
                        return globalHolidayHours[i].start_time + " - " + globalHolidayHours[i].end_time
                    }
                }
            }
        }
        if (store.acf.custom_hours == false && customStoreHolidayHours == false && holidayHours == false){
            if (globalHours.length != 0){
                console.log(globalHours, 'global hours')
                if (days[day] == "Monday"){
                    if (globalHours[0].monday_closed == false){
                        customStoreHours = true;
                        return globalHours[0].monday_open + " - " + globalHours[0].monday_close
                    } else {
                        return 'Closed'
                    }
                } else if (days[day] == "Tuesday"){
                    if (globalHours[0].tuesday_closed == false){
                        customStoreHours = true;
                        return globalHours[0].tuesday_open + " - " + globalHours[0].tuesday_close
                    } else {
                        return 'Closed'
                    }
                } else if (days[day] == "Wednesday"){
                    if (globalHours[0].wednesday_closed == false){
                        customStoreHours = true;
                        return globalHours[0].wednesday_open + " - " + globalHours[0].wednesday_close
                    } else {
                        return 'Closed'
                    }
                } else if (days[day] == "Thursday"){
                    if (globalHours[0].thursday_closed == false){
                        customStoreHours = true;
                        return globalHours[0].thursday_open + " - " + globalHours[0].thursday_close
                    } else {
                        return 'Closed'
                    }
                } else if (days[day] == "Friday"){
                    if (globalHours[0].friday_closed == false){
                        customStoreHours = true;
                        return globalHours[0].friday_open + " - " + globalHours[0].friday_close
                    } else {
                        return 'Closed'
                    }
                } else if (days[day] == "Saturday"){
                    if (globalHours[0].saturday_closed == false){
                        customStoreHours = true;
                        return globalHours[0].saturday_open + " - " + globalHours[0].saturday_close
                    } else {
                        return 'Closed'
                    }
                } else if (days[day] == "Sunday"){
                    if (globalHours[0].sunday_closed == false){
                        customStoreHours = true;
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
            return url.replace(/(^\w+:|^)\/\//, '')
        }
    },

    // Converts youtube url to an ID which is inserted into an iframe
    getVideoUrl: function(url){
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
    
        if (match && match[2].length == 11) {
            return match[2];
        } else {
            return 'error';
        }
    },

    // Compress text, or clamp it
    compressText: function(store, amount){
        excerpt = store.replace(regex, "").substr(0, amount)
        excerpt = excerpt.substr(0, excerpt.lastIndexOf(" "))
        return excerpt + "...";
    }
    
}

export default helpers;