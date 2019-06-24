import React from 'react'
import PropTypes from 'prop-types'
import Box from 'reusecore/src/elements/Box'
import Text from 'reusecore/src/elements/Text'
import Heading from 'reusecore/src/elements/Heading'
import 'react-image-gallery/styles/css/image-gallery.css'
import Container from '../../../components/UI/Container'
import FeatureSliderWrapper from './about.style'

const About = ({ sectionSubTitle, sectionTitle, sectionHeader }) => {
    return (
        <FeatureSliderWrapper id="keyfeature">
            <Container>
                <Box {...sectionHeader}>
                    <Heading {...sectionTitle} />
                </Box>
                <p>Team Health Check is a mobile app based on retrospectives model designed by Spotify (https://labs.spotify.com/2014/09/16/squad-health-check-model/).
                    No app can replace honest conversation between the team members, while everyone has a say about their feelings and thoughts. But how to understand the key pain points of your team without getting bragged into a long, negative spirals of complain with no certainty if the identified issues are addressing a real threat, or just demands of the most vocal part of a group.
                    Team Health Check addresses this challenge by involving the whole team in anonymous voting for the most important (and urgent) parts of its work.
                    Predefined categories enables your team to start immediately. Just register the free account in the iOS or Android app, and you are ready for your first health check : )
                    Keep an eye (and swiftly improve) on the direction of your team by looking at the trend between multiple health checks / votings.</p>
            </Container>
        </FeatureSliderWrapper>
    )
}

About.propTypes = {
    sectionSubTitle: PropTypes.object,
    sectionTitle: PropTypes.object,
    sectionHeader: PropTypes.object
}

About.defaultProps = {
    sectionHeader: {},

    sectionTitle: {
        content: 'About',
        textAlign: 'center',
        fontSize: ['20px', '24px', '24px', '24px', '30px'],
        fontWeight: '400',
        color: '#0f2137',
        letterSpacing: '-0.025em',
        mb: '0'
    }
}

export default About
