import React from 'react'
import ProjectList from '../components/ProjectList'

const projects = [
  {
    title: 'Not Bitly',
    description: 'A url shortener based on bitly.com'
  }, {
    title: 'Image Host',
    description: 'A site where you can share images and create albums'
  }, {
    title: 'Theremin',
    description: 'Move your mouse along the screen to produce sound. Based on the theremin, a musicical instrument.'
  }, {
    title: 'Alphabet Soup',
    description: 'Letters scattered around the screen arrange themselves to form messages.'
  }, {
    title: 'Conway\'s Game of Life',
    description: 'Cellular automaton.'
  }, {
    title: 'Tic tac toe',
    description: 'Featuring an unbeatable computer.'
  }, {
    title: 'Pomodoro timer',
    description: 'A timer that follows the pomodoro technique.'
  }, {
    title: 'Simon',
    description: 'Classic memory game.'
  }, {
    title: 'Finger Battle',
    description: 'Two player vs game where the faster tapper wins.'
  }
]

const IndexPage = () => (
  <div>
    <h1>JustusFT</h1>
    <h3>Web projects</h3>
    <ProjectList projects={projects} />
  </div>
)

export default IndexPage
