# tba-api-node
Simple Node API Library for [The Blue Alliance](https://www.thebluealliance.com)

# Usage
## Installation

`npm install tba-api`

## Headers

The Blue Alliance API V2 requires users to identify with a username, app description, and app version. The authentication can be read about in more detail [here](https://www.thebluealliance.com/apidocs). Authentication using this library is simple:

```js
const tba = require('tba-api');

tba.initHeaders(username, app_description, app_version)
```

For example:

```js
const tba = require('tba-api');

tba.initHeaders('astronautlevel', 'tba-api-test-app', 'v0.0.1')
```

## Method Overview

### Team Requests

[Team List Request](https://www.thebluealliance.com/apidocs#team-list-request)

`getTeamList(pageNum, callback)`

[Team Request](https://www.thebluealliance.com/apidocs#team-request)

`getTeam(teamNum, callback)`

[Team Events](https://www.thebluealliance.com/apidocs#team-events-request)

`getTeamEvents(teamNum[, year], callback)`

[Team Event Awards](https://www.thebluealliance.com/apidocs#team-event-awards-request)

`getTeamEventAwards(teamNum, eventCode, callback)`

[Team Event Matches](https://www.thebluealliance.com/apidocs#team-event-matches-request)

`getTeamEventMatches(teamNum, eventCode, callback)`

[Team Years Participated](https://www.thebluealliance.com/apidocs#team-years-participated-request)

`getYearsParticipated(teamNum, callback)`

[Team Media](https://www.thebluealliance.com/apidocs#team-media-request)

`getTeamMedia(teamNum[, year], callback)`

[Team Event History](https://www.thebluealliance.com/apidocs#team-history-events-request)

`getTeamEventHistory(teamNum, callback)`

[Team Award History](https://www.thebluealliance.com/apidocs#team-history-awards-request)

`getTeamAwardHistory(teamNum, callback)`

[Team Robot History](https://www.thebluealliance.com/apidocs#team-history-robots-request)

`getTeamRobotHistory(teamNum, callback)`

[Team District History](https://www.thebluealliance.com/apidocs#team-history-districts-request)

`getTeamDistrictHistory(teamNum, callback)`

### Event Requests

[Event List](https://www.thebluealliance.com/apidocs#event-list-request)

`getEventList(year, callback)`

[Event details](https://www.thebluealliance.com/apidocs#event-request)

`getEvent(eventCode, callback)`

[Event Teams](https://www.thebluealliance.com/apidocs#event-teams-request)

`getEventTeams(eventCode, callback)`

[Event Matches](https://www.thebluealliance.com/apidocs#event-matches-request)

`getEventMatches(eventCode, callback)`

[Event Stats](https://www.thebluealliance.com/apidocs#event-stats-request)

`getEventStats(eventCode, callback)`

[Event Rankings](https://www.thebluealliance.com/apidocs#event-rankings-request)

`getEventRankings(eventCode, callback)`

[Event Awards](https://www.thebluealliance.com/apidocs#event-awards-request)

`getEventAwards(eventCode, callback)`

[Event District Points](https://www.thebluealliance.com/apidocs#event-points-request)

`getEventDistrictPoints(eventCode, callback)`

### Match Requests

[Single Match Request](https://www.thebluealliance.com/apidocs#match-request)

`getSingleMatch(matchKey, callback)`

### District Requests

[District List Request](https://www.thebluealliance.com/apidocs#district-list-request)

`getDistrictList(year, callback)`

[District Events Request](https://www.thebluealliance.com/apidocs#district-events-request)

`getDistrictEvents(district, year, callback)`

[District Rankings Request](https://www.thebluealliance.com/apidocs#district-rankings-request)

`getDistrictRankings(district, year, callback)`

[District Teams Request](https://www.thebluealliance.com/apidocs#district-teams-request)

`getDistrictTeams(district, year, callback)`
