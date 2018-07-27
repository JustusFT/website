import React from 'react'
import ProjectList from '../components/ProjectList'

const projects = [
  {
    title: 'Image Host',
    description: 'A site where you can share images and create albums',
    url: 'https://aqueous-caverns-77669.herokuapp.com/'
  }, {
    title: 'Theremin',
    description: 'Move your mouse along the screen to produce sound. Based on the theremin, a musicical instrument.',
    url: 'https://justusft.github.io/theremin'
  }, {
    title: 'Alphabet Soup',
    description: 'Letters scattered around the screen arrange themselves to form messages.',
    url: 'https://codepen.io/JustusFT/full/ENLZGJ'
  }, {
    title: 'Not Bitly',
    description: 'A url shortener based on bitly.com',
    url: 'https://infinite-fortress-18426.herokuapp.com/'
  }, {
    title: 'Conway\'s Game of Life',
    description: 'Cellular automaton.',
    url: 'https://codepen.io/JustusFT/full/MovwKJ/'
  }, {
    title: 'Tic tac toe',
    description: 'Featuring an unbeatable computer.',
    url: 'https://codepen.io/JustusFT/full/jrrNVX/'
  }, {
    title: 'Pomodoro timer',
    description: 'A timer that follows the pomodoro technique.',
    url: 'https://codepen.io/JustusFT/full/qNZKjq/'
  }, {
    title: 'Simon',
    description: 'Classic memory game.',
    url: 'http://codepen.io/JustusFT/full/YWWrVZ'
  }, {
    title: 'Finger Battle',
    description: 'Two player vs game where the faster tapper wins.',
    url: 'http://justusft.github.io/finger-battle'
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
