import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Luggage, withCollection } from 'react-luggage'

class Recipes extends React.Component {
  static propTypes = {
    recipes: PropTypes.array
  }

  static defaultProps = {
    recipes: []
  }

  render() {
    const { recipes } = this.props

    return (
      <div className='recipes'>
        { recipes.map((recipe, i) => <div key={i}>{recipe.title}</div>) }
      </div>
    )
  }
}

const RecipesCollection = withCollection(Recipes)

class App extends Component {
  render() {
    const credentials = {
      API_KEY: 'someapikey'
    }

    return (
      <Luggage
        collection='recipes'
        creadentials={credentials}
        redirectUrl='/'
      >
        <RecipesCollection />
      </Luggage>
    )
  }
}

export default App
