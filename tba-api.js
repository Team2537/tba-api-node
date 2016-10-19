/**
 * The Blue Alliance Node API Library
 * Made by Alex Taber and Team 2537
 * License: BSD 3-Clause License
 */

const https = require('https');

const base_url = 'https://www.thebluealliance.com/api/v2/';
let headers = "";

// Set user name, app description, and app version for the TBA API v2
exports.initHeaders = function(name, description, version) {
    if (name && description && version) {
         headers = '?X-TBA-App-Id=' + name + ':' + description + ':' + version;
    }
}

// Helper Function
TBAGET = function(path, callback) {
    let data = '';
    https.get(base_url + path + headers , (res) => {
        let err;
        if (res.statusCode != 200) {
            err = res.statusCode + ': ' + res.statusMessage;
            callback(err, null);
        }

        res.on('data', (d) => {
            data += d;
        });

        res.on('end', (d) => {
            if (!err) callback(null, JSON.parse(data));
        });
    });
};

/* Main API Functions */

// Team API Requests

exports.getTeamList = function(pageNum, callback) {
    TBAGET('teams/' + pageNum, callback);
}
    
exports.getTeam = function(teamNum, callback) {
    TBAGET('team/frc' + teamNum, callback);
}
    
exports.getTeamEvents = function(teamNum, year, callback) {
    if (!callback) {
        callback = year;
        year = null;
    }
    
    if (year) {
        TBAGET('team/frc' + teamNum + '/' + year + '/events', callback);
    } else {
        TBAGET('team/frc' + teamNum + '/events', callback);
    }
}

exports.getTeamEventAwards = function(teamNum, eventCode, callback) {
    TBAGET('team/frc' + teamNum + '/event/' + eventCode + '/awards', callback);
}

exports.getTeamEventMatches = function(teamNum, eventCode, callback) {
    TBAGET('team/frc' + teamNum + '/event/' + eventCode + '/matches', callback);
}

exports.getYearsParticipated = function(teamNum, callback) {
    TBAGET('team/frc' + teamNum + '/years_participated', callback);
}

exports.getTeamMedia = function(teamNum, year, callback) {
    if (!callback) {
        callback = year;
        year = null;
    }

    if (year) {
        TBAGET('team/frc' + teamNum + '/' + year + '/media', callback);
    } else {
        TBAGET('team/frc' + teamNum + '/media', callback);
    }
}

exports.getTeamEventHistory = function(teamNum, callback) {
    TBAGET('team/frc' + teamNum + '/history/events', callback);
}

exports.getTeamAwardHistory = function(teamNum, callback) {
    TBAGET('team/frc' + teamNum + '/history/awards', callback);
}

exports.getTeamRobotHistory = function(teamNum, callback) {
    TBAGET('team/frc' + teamNum + '/history/robots', callback);
}

exports.getTeamDistrictHistory = function(teamNum, callback) {
    TBAGET('team/frc' + teamNum + '/history/districts', callback);
}

// Event API Requests

exports.getEventList = function(year, callback) {
    TBAGET('events/' + year, callback);
}

exports.getEvent = function(event, callback) {
    TBAGET('event/' + event, callback);
}

exports.getEventTeams = function(event, callback) {
    this.getEvent(event + '/teams', callback);
}

exports.getEventMatches = function(event, callback) {
    this.getEvent(event + '/matches', callback);
}

exports.getEventStats = function(event, callback) {
    this.getEvent(event + '/stats', callback);
}

exports.getEventRankings = function(event, callback) {
    this.getEvent(event + '/rankings', callback);
}

exports.getEventAwards = function(event, callback) {
    this.getEvent(event + '/awards', callback);
}

exports.getEventDistrictPoints = function(event, callback) {
    this.getEvent(event + '/district_points', callback);
}

// Match API Requests

exports.getSingleMatch = function(match_key, callback) {
    TBAGET('match/' + match_key, callback);
}

// District API Requests

exports.getDistrictList = function(year, callback) {
    TBAGET('districts/' + year, callback);
}

exports.getDistrictEvent = function(district, year, callback) {
    TBAGET('district/' + district + '/' + year + '/events', callback);
}

exports.getDistrictRankings = function(district, year, callback) {
    TBAGET('district/' + district + '/' + year + '/rankings', callback);
}

exports.getDistrictTeams = function(district, year, callback) {
    TBAGET('district/' + district + '/' + year + '/teams', callback);
}
