/* eslint max-len: off, quotes: off, key-spacing: off, comma-spacing: off,
   array-bracket-newline: off, array-bracket-spacing: off, indent: off */

const nock = require('nock');

nock('http://lims.dccouncil.us:80', {"encodedQueryParams":true})
    .post('/api/v1/Voting/Search', {})
    .query({"rowLimit":"10","offSet":"0"})
    .reply(200, [{"LegislationNumber":"B14-0019","DateOfVote":"2020/01/23 00:00:00","VoteResult":"Approved","ReadingDescription":"Final Reading","VideoLink":null,"MemberVotes":[{"MemberId":139,"MemberName":"Linda W. Cropp","Result":"Yes"},{"MemberId":134,"MemberName":"Sandy Allen","Result":"Yes"},{"MemberId":135,"MemberName":"Sharon Ambrose","Result":"Yes"},{"MemberId":136,"MemberName":"Harold Brazil","Result":"Yes"},{"MemberId":137,"MemberName":"David Catania","Result":"Yes"},{"MemberId":138,"MemberName":"Kevin P. Chavous","Result":"Yes"},{"MemberId":140,"MemberName":"Jack Evans","Result":"Yes"},{"MemberId":141,"MemberName":"Adrian Fenty","Result":"Yes"},{"MemberId":142,"MemberName":"Jim Graham","Result":"Yes"},{"MemberId":143,"MemberName":"Phil Mendelson","Result":"Yes"},{"MemberId":144,"MemberName":"Vincent B. Orange","Result":"Yes"},{"MemberId":145,"MemberName":"Kathleen Patterson","Result":"Yes"},{"MemberId":146,"MemberName":"Carol Schwartz","Result":"Yes"}],"DocumentType":"Enrollment","DocumentUrl":"http://lims.dccouncil.us/Download/1839/B14-0019-ENROLLMENT.pdf","VoteType":"VOICE VOTE","Title":"PUBLIC DISCLOSURE OF FINDINGS AND INFORMATION IN CASES OF CHILD FATALITY OR NEAR FATALITY CONGRESSIONAL REVIEW EMERGENCY AMENDMENT ACT OF 2001","Id":10131,"CouncilPeriod":14,"Modified":"2017/02/09 16:00:00"},{"LegislationNumber":"PR23-0425","DateOfVote":"2019/07/09 21:41:22","VoteResult":"Approved","ReadingDescription":"Final Reading ","VideoLink":"http://dc.granicus.com/MediaPlayer.php?view_id=2&clip_id=5140","MemberVotes":[{"MemberId":262,"MemberName":"Phil Mendelson","Result":"Yes"},{"MemberId":263,"MemberName":"Brianne Nadeau","Result":"Yes"},{"MemberId":264,"MemberName":"Jack Evans","Result":"Yes"},{"MemberId":265,"MemberName":"Mary Cheh","Result":"Yes"},{"MemberId":266,"MemberName":"Brandon Todd","Result":"Yes"},{"MemberId":267,"MemberName":"Kenyan McDuffie","Result":"Yes"},{"MemberId":268,"MemberName":"Charles Allen","Result":"Yes"},{"MemberId":269,"MemberName":"Vincent Gray","Result":"Yes"},{"MemberId":270,"MemberName":"Trayon White","Result":"Absent"},{"MemberId":271,"MemberName":"Elissa Silverman","Result":"Yes"},{"MemberId":272,"MemberName":"Anita Bonds","Result":"Yes"},{"MemberId":273,"MemberName":"David Grosso","Result":"Yes"},{"MemberId":274,"MemberName":"Robert White","Result":"Yes"}],"DocumentType":"Enrollment","DocumentUrl":"http://lims.dccouncil.us/Download/43008/PR23-0425-Enrollment.pdf","VoteType":"Voice Vote","Title":"Memoranda of Agreement for FY 2020 Wages between the Office of the State Superintendent of Education, Division of Student Transportation and Teamsters 639 and American Federation of State, Country and Municipal Employees, District Council 20, Local 1959 Emergency Declaration Resolution of 2019","Id":43008,"CouncilPeriod":23,"Modified":"2019/07/15 17:41:24"},{"LegislationNumber":"PR23-0427","DateOfVote":"2019/07/09 21:40:18","VoteResult":"Approved","ReadingDescription":"Final Reading","VideoLink":"http://dc.granicus.com/MediaPlayer.php?view_id=2&clip_id=5140","MemberVotes":[{"MemberId":262,"MemberName":"Phil Mendelson","Result":"Yes"},{"MemberId":263,"MemberName":"Brianne Nadeau","Result":"Yes"},{"MemberId":264,"MemberName":"Jack Evans","Result":"Yes"},{"MemberId":265,"MemberName":"Mary Cheh","Result":"Yes"},{"MemberId":266,"MemberName":"Brandon Todd","Result":"Yes"},{"MemberId":267,"MemberName":"Kenyan McDuffie","Result":"Yes"},{"MemberId":268,"MemberName":"Charles Allen","Result":"Yes"},{"MemberId":269,"MemberName":"Vincent Gray","Result":"Yes"},{"MemberId":270,"MemberName":"Trayon White","Result":"Absent"},{"MemberId":271,"MemberName":"Elissa Silverman","Result":"Yes"},{"MemberId":272,"MemberName":"Anita Bonds","Result":"Yes"},{"MemberId":273,"MemberName":"David Grosso","Result":"Yes"},{"MemberId":274,"MemberName":"Robert White","Result":"Yes"}],"DocumentType":"Enrollment","DocumentUrl":"http://lims.dccouncil.us/Download/43010/PR23-0427-Enrollment.pdf","VoteType":"Voice Vote","Title":"Collective Bargaining Agreement between the District of Columbia Public Schools and the Council of School Officers, Local #4, American Federation of School Administrators, AFL-CIO, Emergency Declaration Resolution of 2019","Id":43010,"CouncilPeriod":23,"Modified":"2019/07/15 17:40:19"},{"LegislationNumber":"PR23-0416","DateOfVote":"2019/07/09 21:39:24","VoteResult":"Approved","ReadingDescription":"Final Reading","VideoLink":"http://dc.granicus.com/MediaPlayer.php?view_id=2&clip_id=5140","MemberVotes":[{"MemberId":262,"MemberName":"Phil Mendelson","Result":"Yes"},{"MemberId":263,"MemberName":"Brianne Nadeau","Result":"Yes"},{"MemberId":264,"MemberName":"Jack Evans","Result":"Yes"},{"MemberId":265,"MemberName":"Mary Cheh","Result":"Yes"},{"MemberId":266,"MemberName":"Brandon Todd","Result":"Yes"},{"MemberId":267,"MemberName":"Kenyan McDuffie","Result":"Yes"},{"MemberId":268,"MemberName":"Charles Allen","Result":"Yes"},{"MemberId":269,"MemberName":"Vincent Gray","Result":"Yes"},{"MemberId":270,"MemberName":"Trayon White","Result":"Absent"},{"MemberId":271,"MemberName":"Elissa Silverman","Result":"Yes"},{"MemberId":272,"MemberName":"Anita Bonds","Result":"Yes"},{"MemberId":273,"MemberName":"David Grosso","Result":"Yes"},{"MemberId":274,"MemberName":"Robert White","Result":"Yes"}],"DocumentType":"Enrollment","DocumentUrl":"http://lims.dccouncil.us/Download/42997/PR23-0416-Enrollment.pdf","VoteType":"Voice Vote","Title":"Fiscal Year 2020 District Government Employee Pay Schedules Emergency Declaration Resolution of 2019","Id":42997,"CouncilPeriod":23,"Modified":"2019/07/15 17:39:26"},{"LegislationNumber":"PR23-0431","DateOfVote":"2019/07/09 21:38:22","VoteResult":"Approved","ReadingDescription":"Final Reading ","VideoLink":"http://dc.granicus.com/MediaPlayer.php?view_id=2&clip_id=5140","MemberVotes":[{"MemberId":262,"MemberName":"Phil Mendelson","Result":"Yes"},{"MemberId":263,"MemberName":"Brianne Nadeau","Result":"Yes"},{"MemberId":264,"MemberName":"Jack Evans","Result":"Yes"},{"MemberId":265,"MemberName":"Mary Cheh","Result":"Yes"},{"MemberId":266,"MemberName":"Brandon Todd","Result":"Yes"},{"MemberId":267,"MemberName":"Kenyan McDuffie","Result":"Yes"},{"MemberId":268,"MemberName":"Charles Allen","Result":"Yes"},{"MemberId":269,"MemberName":"Vincent Gray","Result":"Yes"},{"MemberId":270,"MemberName":"Trayon White","Result":"Absent"},{"MemberId":271,"MemberName":"Elissa Silverman","Result":"Yes"},{"MemberId":272,"MemberName":"Anita Bonds","Result":"Yes"},{"MemberId":273,"MemberName":"David Grosso","Result":"Yes"},{"MemberId":274,"MemberName":"Robert White","Result":"Yes"}],"DocumentType":"Enrollment","DocumentUrl":"http://lims.dccouncil.us/Download/43016/PR23-0431-Enrollment.pdf","VoteType":"Voice Vote","Title":"Urban Farming Land Lease Emergency Declaration Resolution of 2019","Id":43016,"CouncilPeriod":23,"Modified":"2019/07/15 17:38:23"},{"LegislationNumber":"PR23-0434","DateOfVote":"2019/07/09 21:37:18","VoteResult":"Approved","ReadingDescription":"Amendment #1 (Grosso)","VideoLink":"http://dc.granicus.com/MediaPlayer.php?view_id=2&clip_id=5140","MemberVotes":[{"MemberId":262,"MemberName":"Phil Mendelson","Result":"No"},{"MemberId":263,"MemberName":"Brianne Nadeau","Result":"Yes"},{"MemberId":264,"MemberName":"Jack Evans","Result":"No"},{"MemberId":265,"MemberName":"Mary Cheh","Result":"No"},{"MemberId":266,"MemberName":"Brandon Todd","Result":"No"},{"MemberId":267,"MemberName":"Kenyan McDuffie","Result":"No"},{"MemberId":268,"MemberName":"Charles Allen","Result":"No"},{"MemberId":269,"MemberName":"Vincent Gray","Result":"No"},{"MemberId":270,"MemberName":"Trayon White","Result":"Absent"},{"MemberId":271,"MemberName":"Elissa Silverman","Result":"Yes"},{"MemberId":272,"MemberName":"Anita Bonds","Result":"No"},{"MemberId":273,"MemberName":"David Grosso","Result":"Yes"},{"MemberId":274,"MemberName":"Robert White","Result":"No"}],"DocumentType":"Amendment","DocumentUrl":"http://lims.dccouncil.us/Download/43023/PR23-0434-Amendment2.pdf","VoteType":"Roll Call","Title":"Council Period 23 Rules and Investigation Authority Amendment Resolution of 2019","Id":43023,"CouncilPeriod":23,"Modified":"2019/07/15 17:37:19"},{"LegislationNumber":"PR23-0434","DateOfVote":"2019/07/09 21:37:18","VoteResult":"Approved","ReadingDescription":"Final Reading ","VideoLink":"http://dc.granicus.com/MediaPlayer.php?view_id=2&clip_id=5140","MemberVotes":[{"MemberId":262,"MemberName":"Phil Mendelson","Result":"Yes"},{"MemberId":263,"MemberName":"Brianne Nadeau","Result":"Yes"},{"MemberId":264,"MemberName":"Jack Evans","Result":"No"},{"MemberId":265,"MemberName":"Mary Cheh","Result":"Yes"},{"MemberId":266,"MemberName":"Brandon Todd","Result":"Yes"},{"MemberId":267,"MemberName":"Kenyan McDuffie","Result":"Yes"},{"MemberId":268,"MemberName":"Charles Allen","Result":"Yes"},{"MemberId":269,"MemberName":"Vincent Gray","Result":"Yes"},{"MemberId":270,"MemberName":"Trayon White","Result":"Absent"},{"MemberId":271,"MemberName":"Elissa Silverman","Result":"Yes"},{"MemberId":272,"MemberName":"Anita Bonds","Result":"Yes"},{"MemberId":273,"MemberName":"David Grosso","Result":"No"},{"MemberId":274,"MemberName":"Robert White","Result":"Yes"}],"DocumentType":"Enrollment","DocumentUrl":"http://lims.dccouncil.us/Download/43023/PR23-0434-Enrollment.pdf","VoteType":"Voice Vote","Title":"Council Period 23 Rules and Investigation Authority Amendment Resolution of 2019","Id":43023,"CouncilPeriod":23,"Modified":"2019/07/15 17:37:19"},{"LegislationNumber":"PR23-0434","DateOfVote":"2019/07/09 21:37:18","VoteResult":"Approved","ReadingDescription":"Amendment #2 (Grosso)","VideoLink":"http://dc.granicus.com/MediaPlayer.php?view_id=2&clip_id=5140","MemberVotes":[{"MemberId":262,"MemberName":"Phil Mendelson","Result":"No"},{"MemberId":263,"MemberName":"Brianne Nadeau","Result":"Yes"},{"MemberId":264,"MemberName":"Jack Evans","Result":"No"},{"MemberId":265,"MemberName":"Mary Cheh","Result":"Yes"},{"MemberId":266,"MemberName":"Brandon Todd","Result":"No"},{"MemberId":267,"MemberName":"Kenyan McDuffie","Result":"No"},{"MemberId":268,"MemberName":"Charles Allen","Result":"Yes"},{"MemberId":269,"MemberName":"Vincent Gray","Result":"No"},{"MemberId":270,"MemberName":"Trayon White","Result":"Absent"},{"MemberId":271,"MemberName":"Elissa Silverman","Result":"Yes"},{"MemberId":272,"MemberName":"Anita Bonds","Result":"No"},{"MemberId":273,"MemberName":"David Grosso","Result":"Yes"},{"MemberId":274,"MemberName":"Robert White","Result":"Yes"}],"DocumentType":"Amendment","DocumentUrl":"http://lims.dccouncil.us/Download/43023/PR23-0434-Amendment3.pdf","VoteType":"Roll Call","Title":"Council Period 23 Rules and Investigation Authority Amendment Resolution of 2019","Id":43023,"CouncilPeriod":23,"Modified":"2019/07/15 17:37:19"},{"LegislationNumber":"PR23-0434","DateOfVote":"2019/07/09 21:37:18","VoteResult":"Approved","ReadingDescription":"Amendment (Cheh/Silverman/Nadeau)","VideoLink":"http://dc.granicus.com/MediaPlayer.php?view_id=2&clip_id=5140","MemberVotes":[{"MemberId":262,"MemberName":"Phil Mendelson","Result":"No"},{"MemberId":263,"MemberName":"Brianne Nadeau","Result":"Yes"},{"MemberId":264,"MemberName":"Jack Evans","Result":"No"},{"MemberId":265,"MemberName":"Mary Cheh","Result":"Yes"},{"MemberId":266,"MemberName":"Brandon Todd","Result":"No"},{"MemberId":267,"MemberName":"Kenyan McDuffie","Result":"No"},{"MemberId":268,"MemberName":"Charles Allen","Result":"No"},{"MemberId":269,"MemberName":"Vincent Gray","Result":"No"},{"MemberId":270,"MemberName":"Trayon White","Result":"Absent"},{"MemberId":271,"MemberName":"Elissa Silverman","Result":"Yes"},{"MemberId":272,"MemberName":"Anita Bonds","Result":"No"},{"MemberId":273,"MemberName":"David Grosso","Result":"Yes"},{"MemberId":274,"MemberName":"Robert White","Result":"No"}],"DocumentType":"Amendment","DocumentUrl":"http://lims.dccouncil.us/Download/43023/PR23-0434-Amendment1.pdf","VoteType":"Roll Call","Title":"Council Period 23 Rules and Investigation Authority Amendment Resolution of 2019","Id":43023,"CouncilPeriod":23,"Modified":"2019/07/15 17:37:19"},{"LegislationNumber":"PR23-0375","DateOfVote":"2019/07/09 21:36:13","VoteResult":"Approved","ReadingDescription":"Final Reading CC","VideoLink":"http://dc.granicus.com/MediaPlayer.php?view_id=2&clip_id=5140","MemberVotes":[{"MemberId":262,"MemberName":"Phil Mendelson","Result":"Yes"},{"MemberId":263,"MemberName":"Brianne Nadeau","Result":"Yes"},{"MemberId":264,"MemberName":"Jack Evans","Result":"Yes"},{"MemberId":265,"MemberName":"Mary Cheh","Result":"Yes"},{"MemberId":266,"MemberName":"Brandon Todd","Result":"Yes"},{"MemberId":267,"MemberName":"Kenyan McDuffie","Result":"Yes"},{"MemberId":268,"MemberName":"Charles Allen","Result":"Yes"},{"MemberId":269,"MemberName":"Vincent Gray","Result":"Yes"},{"MemberId":270,"MemberName":"Trayon White","Result":"Absent"},{"MemberId":271,"MemberName":"Elissa Silverman","Result":"Yes"},{"MemberId":272,"MemberName":"Anita Bonds","Result":"Yes"},{"MemberId":273,"MemberName":"David Grosso","Result":"Yes"},{"MemberId":274,"MemberName":"Robert White","Result":"Yes"}],"DocumentType":"Enrollment","DocumentUrl":"http://lims.dccouncil.us/Download/42809/PR23-0375-Enrollment.pdf","VoteType":"Voice Vote","Title":"Green Finance Authority Board Ricardo Nogueira Confirmation Resolution of 2019","Id":42809,"CouncilPeriod":23,"Modified":"2019/07/15 17:36:14"}], [ 'Cache-Control',
        'no-cache',
        'Pragma',
        'no-cache',
        'Content-Type',
        'application/json; charset=utf-8',
        'Expires',
        '-1',
        'Server',
        'Microsoft-IIS/7.5',
        'X-AspNet-Version',
        '4.0.30319',
        'X-Powered-By',
        'ASP.NET',
        'MicrosoftSharePointTeamServices',
        '15.0.0.4481',
        'X-Content-Type-Options',
        'nosniff',
        'X-MS-InvokeApp',
        '1; RequireReadOnly',
        'Date',
        'Sun, 21 Jul 2019 22:41:22 GMT',
        'Connection',
        'close',
        'Content-Length',
        '13361' ]);

if (process.env.NOCK_OFF !== 'true') {
    nock.disableNetConnect();
}
else {
    nock.recorder.rec();
}

module.exports = nock;
