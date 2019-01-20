import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import { StaticQuery, graphql } from 'gatsby';

function MeetingPage() {
    return (
        <StaticQuery
            query={graphql`
                query MeetingQuery {
                    site {
                        ...SchoolName
                    }
                }
            `}
            render={ (data) => (
                <Layout>
                    <SEO title="Meetings" />
                    <h1>Meetings</h1>
                    <div class="google-calendar">
                        <iframe title="schedule" src="https://calendar.google.com/calendar/embed?src=derp332211%40gmail.com&ctz=America%2FChicago" style={{border: 0}} width="800" height="600" frameborder="0" scrolling="no"></iframe>
                    </div>
                    <br />
                    <p>
                        While this is our set schedule, often times there are meetings hosted by members that may not fall on the one day a week we officially meet.
                        Reminders to meetings are sent out by email, if you would like to be added to our email list, join our club at 
                        our <a href="https://myndsu.ndsu.edu/organization/csa">My {data.site.siteMetadata.school} Page.</a>
                    </p>
                </Layout>
            )}
        />
    )
};
    
export default MeetingPage