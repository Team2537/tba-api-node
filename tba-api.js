/**
 * The Blue Alliance Node API Library
 * Made by Alex Taber and Team 2537
 * License: BSD 3-Clause License
 */

const https = require('https');

const base_url = 'https://www.thebluealliance.com/api/v2/';
let headers = "";

class TBA {

    // Constructor: Get user name, app description, and app version for the TBA API v2
    constructor(name, description, version) {
        if (name && description && version) {
             headers = '?X-TBA-App-Id=' + name + ':' + description + ':' + version;
        }
    }

    // Helper Function
    TBAGET(path, callback) {
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

    getTeamList(pageNum, callback) {
        this.TBAGET('teams/' + pageNum, callback);
    }
    
    getTeam(teamNum, callback) {
        this.TBAGET('team/frc' + teamNum, callback);
    }
    
    getTeamEvents(teamNum, year, callback) {
        if (!callback) {
            callback = year;
            year = null;
        }
        
        if (year) {
            this.TBAGET('team/frc' + teamNum + '/' + year + '/events', callback);
        } else {
            this.TBAGET('team/frc' + teamNum + '/events', callback);
        }
    }

    getTeamEventAwards(teamNum, eventCode, callback) {
        this.TBAGET('team/frc' + teamNum + '/event/' + eventCode + '/awards', callback);
    }

    getTeamEventMatches(teamNum, eventCode, callback) {
        this.TBAGET('team/frc' + teamNum + '/event/' + eventCode + '/matches', callback);
    }

    getYearsParticipated(teamNum, callback) {
        this.TBAGET('team/frc' + teamNum + '/years_participated', callback);
    }

    getTeamMedia(teamNum, year, callback) {
        if (!callback) {
            callback = year;
            year = null;
        }

        if (year) {
            this.TBAGET('team/frc' + teamNum + '/' + year + '/media', callback);
        } else {
            this.TBAGET('team/frc' + teamNum + '/media', callback);
        }
    }

    getTeamEventHistory(teamNum, callback) {
        this.TBAGET('team/frc' + teamNum + '/history/events', callback);
    }

    getTeamAwardHistory(teamNum, callback) {
        this.TBAGET('team/frc' + teamNum + '/history/awards', callback);
    }

    getTeamRobotHistory(teamNum, callback) {
        this.TBAGET('team/frc' + teamNum + '/history/robots', callback);
    }

    getTeamDistrictHistory(teamNum, callback) {
        this.TBAGET('team/frc' + teamNum + '/history/districts', callback);
    }

    // Event API Requests

    getEventList(year, callback) {
        this.TBAGET('events/' + year, callback);
    }

    getEvent(event, callback) {
        this.TBAGET('event/' + event, callback);
    }

    getEventTeams(event, callback) {
        this.getEvent(event + '/teams', callback);
    }

    getEventMatches(event, callback) {
        this.getEvent(event + '/matches', callback);
    }

    getEventStats(event, callback) {
        this.getEvent(event + '/stats', callback);
    }

    getEventRankings(event, callback) {
        this.getEvent(event + '/rankings', callback);
    }

    getEventAwards(event, callback) {
        this.getEvent(event + '/awards', callback);
    }

    getEventDistrictPoints(event, callback) {
        this.getEvent(event + '/district_points', callback);
    }

    // Match API Requests

    getSingleMatch(match_key, callback) {
        this.TBAGET('match/' + match_key, callback);
    }

    // District API Requests

    getDistrictList(year, callback) {
        this.TBAGET('districts/' + year, callback);
    }

    getDistrictEvent(district, year, callback) {
        this.TBAGET('district/' + district + '/' + year + '/events', callback);
    }

    getDistrictRankings(district, year, callback) {
        this.TBAGET('district/' + district + '/' + year + '/rankings', callback);
    }

    getDistrictTeams(district, year, callback) {
        this.TBAGET('district/' + district + '/' + year + '/teams', callback);
    }
}

module.exports = TBA;
